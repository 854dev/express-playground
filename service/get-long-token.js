const axios = require('axios');
const env = require('../env');

function getLongToken(shortLivedAccessToken) {
  const response = axios.get('https://graph.instagram.com/access_token', {
    params: {
      grant_type: 'ig_exchange_token',
      client_secret: env.clientSecret,
      access_token: shortLivedAccessToken,
    },
  });
  return response;
}

module.exports = getLongToken;
