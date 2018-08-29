import rp from 'request-promise';

export const getTeam = (id) =>
  new Promise(resolve => {
    rp({
      uri: `https://fantasy-cyclocross.herokuapp.com/teams/${id}`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
      resolve(JSON.parse(response));
    });
  });