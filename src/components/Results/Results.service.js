import * as cheerio from 'cheerio';
import rp from 'request-promise';
import request from 'request';
import tough from 'tough-cookie';

const getUsacAccessRegex = /usacsess=(.*); path=\/; domain=usacycling.org; HttpOnly/g;

export const getResults = (id, usac) => {
  // var j = request.jar();
  // var cookie = request.cookie(`usacsess=${usac}`);
  // j.setCookie(cookie, '*');

  let cookie = new tough.Cookie({
    key: "usacsess",
    value: usac,
    domain: 'api.usacx.co',
    httpOnly: false,
    maxAge: 31536000
  });

// Put cookie in an jar which can be used across multiple requests
  var cookiejar = request.jar();
  cookiejar.setCookie(cookie, 'https://api.usacx.co');
//
//   var j = request.jar();
//   var cookie = request.cookie(`usacsess=${usac}`);
//   var url = 'api.usacx.co';
//   j.setCookie(cookie, url);

  return new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/results/races?info_id=${id}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      jar: cookiejar,
      withCredentials: true,
      crossDomain: true,
    }).then(response => {

      const results = [];
      const data = cheerio.load(response);
      const resultsRows = data('#results_list').find('li');

      resultsRows.each((i, r) => {
        results.push({
          id: data(r).prop('id').split('_')[ 1 ],
          name: data(r).find('a').text(),
        });
      });

      console.log(results)
      return resolve(results);
    });
  });
}

export const getResultDays = (year, id) =>
  new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/results/days?permit=${year}-${id}`,
      resolveWithFullResponse: true,
    }).then(response => {
      const days = [];
      const data = cheerio.load(response.body);
      const resultsRows = data('div#mainContent').find('.tablecell').find('a');
      const usac = getUsacAccessRegex.exec(response.headers[ 'usac-access' ])[ 1 ];

      resultsRows.each((i, r) => {
        const properties = data(r).prop('onclick').split('(')[ 1 ].split(')')[ 0 ].split(',');
        days.push({
          id: properties[ 0 ],
          type: properties[ 1 ].split(' ')[ 0 ].substring(1),
          day: properties[ 1 ].split(' ')[ 1 ].slice(0, -1),
        });
      });

      return resolve({
        days,
        usac
      });
    });
  });