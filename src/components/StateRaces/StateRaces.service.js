import * as cheerio from 'cheerio';
import rp from 'request-promise';

const getExternalRegistrationLink = link => {
  const href = cheerio.load(link)('a').attr('href');
  return href.includes('http') ? href : '';
};

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
            complete: data(raceRows[i + 1]).text().includes('View Results')
          };
        }
      });

      const races = [];
      racesData.map((i, {r, complete}) => {
        const name = data(r).text();
        const raceData = data(r).parent().html().split('<br>');
        const city = raceData.filter(d => d.includes(state))[ 0 ].trim();
        const date = raceData.filter(d => d.includes(`/${year}`) && !d.includes('Permit'))[ 0 ].trim();
        const registrationLinkRaw = raceData.filter(d => d.includes('Online Registration'));
        const hasRegistration = registrationLinkRaw && registrationLinkRaw.length > 0;
        const externalRegistration = hasRegistration ? getExternalRegistrationLink(registrationLinkRaw[0]) : '';
        const permitData = raceData[ 1 ].replace('Permit Number: ', '').replace('&#xA0;&#xA0;', '').trim();
        const lastDate = new Date(date.split(' - ')[date.split(' - ').length - 1]).setHours(23);
        complete = complete ? complete : lastDate <= new Date();
        let id;

        if (permitData.includes(year)) {
          id = permitData.split('-')[ 1 ];
        }

        races.push({ year, id, name, date, city, complete, externalRegistration, hasRegistration, lastDate });
      });
      resolve(races);
    });
  });