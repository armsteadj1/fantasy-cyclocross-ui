import rp from 'request-promise';

export const getTeams = () =>
  new Promise(resolve => {
    rp({
      uri: `http://localhost:3001/teams`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
      resolve(JSON.parse(response));
    });
  });