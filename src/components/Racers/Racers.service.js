import rp from 'request-promise';

export const getRacers = () =>
  new Promise(resolve => {
    rp({
      uri: `https://fantasy-cyclocross.herokuapp.com/racers`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(response => {
      resolve(JSON.parse(response));
    });
  });