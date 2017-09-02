import * as cheerio from 'cheerio';
import rp from 'request-promise';

export const getRaces = (state, year) =>
  new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/races/cyclocross?state=${state}&fyear=${year}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
      const data = cheerio.load(response);
      const raceRows = data('table').find('.homearticlebody').find('b:nth-child(1)');
      const racesData = raceRows.map((i, r) => {
        if(!data(r).text().includes('Event is not yet permitted') && !data(r).text().includes('View Results')) {
          return {
            r,
            completed: data(raceRows[i + 1]).text().includes('View Results')
          };
        }
      });

      const races = [];
      racesData.map((i, {r, complete}) => {
        const name = data(r).text();
        const raceData = data(r).parent().html().split('<br>');
        const city = raceData.filter(d => d.includes(state))[ 0 ].trim();
        const date = raceData.filter(d => d.includes(`/${year}`) && !d.includes('Permit'))[ 0 ].trim();
        const permitData = raceData[ 1 ].replace('Permit Number: ', '').replace('&#xA0;&#xA0;', '').trim();
        let id;

        if (permitData.includes(year)) {
          id = permitData.split('-')[ 1 ];
        }

        races.push({ year, id, name, date, city, complete });
      });
      resolve(races);
    });
  });