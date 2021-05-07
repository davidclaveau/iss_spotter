const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://geo.ipify.org/api/v1?apiKey=at_1DkYDADkLQEXcr0vbUcYUzRjieudd&ipAddress');
};
  
const fetchCoordsByIP = body => {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = body => {
  const coords  = {};
  coords.latitude = JSON.parse(body).latitude;
  coords.longitude = JSON.parse(body).longitude;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = body => {
  return JSON.parse(body)['response'];
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};