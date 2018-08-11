import rp from 'request-promise';

export const getTeams = () =>
  new Promise(resolve => {
    rp({
      uri: `https://fantasy-cyclocross.herokuapp.com/teams`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
      resolve(JSON.parse(response));
    });
  });