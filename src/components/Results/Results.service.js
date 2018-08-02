import * as cheerio from 'cheerio';
import rp from 'request-promise';

export const getResults = (id, usac) =>
  new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/results?race_id=${id}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'usac': `usacsess=${usac}`,
      },
      json: true
    }).then(({ message }) => {
      const results = [];
      const data = cheerio.load(message);
      const resultsRows = data('.tablerow');

      resultsRows.each((i, r) => {
        const row = data(r).find('div.results');
        if(row.length > 0) {
          const nameArray = data(row[4]).text().split(' (');
          results.push({
            place: data(row[1]).text(),
            points: data(row[2]).text(),
            name: nameArray[0],
            placeInCat: nameArray[1] ? nameArray[1].trim().slice(0, -1) : '',
            location: data(row[5]).text(),
            time: data(row[6]).text(),
            usacId: data(row[8]).text(),
            team: data(row[10]).text(),
          });
        }
      });

      return resolve({ results });
    });
  });

export const getDayRaces = (id, usac) =>
  new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/results/races?info_id=${id}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'usac': `usacsess=${usac}`,
      },
      json: true
    }).then(({ message }) => {
      const results = [];
      const data = cheerio.load(message);
      const resultsRows = data('#results_list').find('li');

      resultsRows.each((i, r) => {
        results.push({
          id: data(r).prop('id').split('_')[ 1 ],
          name: data(r).find('a').text(),
        });
      });

      return resolve(results);
    });
  });

export const getResultDays = (year, id) =>
  new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/results/days?permit=${year}-${id}`,
      resolveWithFullResponse: true,
    }).then(response => {
      const days = [];
      const data = cheerio.load(response.body);
      const name = data('title').text().replace('Results for ', '').replace(' - USA Cycling', '');
      const resultsRows = data('div#mainContent').find('.tablecell').find('a');
      const getUsacAccessRegex = /usacsess=(.*); path=\/; domain=usacycling.org; HttpOnly/g;
      const usac = getUsacAccessRegex.exec(response.headers[ 'usac-access' ])[ 1 ];

      if(resultsRows.length > 0) {
          resultsRows.each((i, r) => {
              const properties = data(r).prop('onclick').split('(')[ 1 ].split(')')[ 0 ].split(',');
              days.push({
                  id: properties[ 0 ],
                  type: properties[ 1 ].split(' ')[ 0 ].substring(1),
                  day: properties[ 1 ].split(' ')[ 1 ].slice(0, -1),
              });
          });
      } else {
        const allScripts = data('script');
        const theScript = allScripts[allScripts.length - 1]
        days.push({
            id: theScript.children[0].data.split('(')[1].split(',')[0],
            day: "One Day"
        })
      }

      return resolve({
        name,
        days,
        usac
      });
    });
  });