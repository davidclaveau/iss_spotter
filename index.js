const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('705.89', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', coords);
// });

const coords = {
  longitude: -123.3597,
  latitude: 48.4371 };

fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', flyOverTimes);
});