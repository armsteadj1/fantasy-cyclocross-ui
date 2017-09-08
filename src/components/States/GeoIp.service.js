import rp from 'request-promise';
import Cookie from 'js-cookie';

export const getLocation = () => {
  return new Promise(resolve => {
    if(Cookie.get('location')) {
      return resolve(Cookie.getJSON().location);
    }

    rp({
      uri: 'http://ip-api.com/json',
      json: true
    }).then(({ lat, lon }) => {
      let location = { latitude: lat, longitude: lon };
      Cookie.set('location', location);

      resolve(location);
    })
  });
};

const toRadians = (number) => {
  return number * Math.PI / 180;
};

export const distance = (start,compare) => {
  var φ1 = toRadians(start.latitude), φ2 = toRadians(compare.latitude), Δλ = toRadians(compare.longitude-start.longitude), R = 6371e3; // gives d in metres
  return Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R
};