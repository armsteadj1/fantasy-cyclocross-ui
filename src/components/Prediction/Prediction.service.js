import * as cheerio from 'cheerio';
import rp from 'request-promise';

export const getRacers = (id) =>
  new Promise(resolve => {
    rp({
      uri: `https://api.usacx.co/predictions?race=${id}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
      const racers = [];
      const data = cheerio.load(response);
      const racerRows = data('table').find('tr');
      racerRows.each((i, r) => {
        const name = data(r).find('td:nth-child(2)').text();
        const team = data(r).find('td:nth-child(3)').text();
        racers.push({
          rank: data(r).find('td:nth-child(1)').text(),
          name,
          team,
          location: data(r).find('td:nth-child(4)').text(),
          points: data(r).find('td:nth-child(5)').text(),
        });
      });

      resolve(racers.filter(r => r.name !== ""));
    });
  });

export const getRaces = (year, id) =>
  new Promise(resolve => {
    rp({
    uri: `https://api.usacx.co/registration-races?eventid=${id}&year=${year}`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  }).then(response => {
      const races = [];
      const data = cheerio.load(response);
      const raceTables = data('table').find('td').find('table');
      raceTables.each((i, r) => {
        const date = data(r).find('td:nth-child(1)').text();
        const gender = data(r).find('td:nth-child(3)').text();
        const race = data(r).find('td:nth-child(4)').text();
        const id = data(r).parent().parent().next().attr('id').substring(3);

        races.push({
          id,
          name: `${date} - ${gender} - ${race}`,
        });
      });

      resolve(races);
    }
  );
});
