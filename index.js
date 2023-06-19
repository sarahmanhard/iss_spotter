const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    console.log('Response:', body); // Added logging statement

    if (response.statusCode !== 200) {
      const errorMsg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(new Error(errorMsg), null);
      return;
    }

    const { ip } = JSON.parse(body);
    callback(null, ip);
  });
};

const callback = function(error, ip) {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
};

fetchMyIP(callback);
