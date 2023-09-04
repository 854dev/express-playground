const axios = require('axios');
const env = require('../env');

const getInstaAccessToken = (code) => {
  const instaClientId = env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID;
  const instaClientSecret = env.INSTAGRAM_CLIENT_SECRET;
  const grantType = 'authorization_code';
  const redirectUri = `https://localhost:3000/auth/instagram/redirect`;

  const tokenHost = 'https://api.instagram.com/oauth/access_token';

  const requestBody = {
    client_id: instaClientId,
    client_secret: instaClientSecret,
    grant_type: grantType,
    redirect_uri: redirectUri,
    code,
  };

  return axios.post(tokenHost, requestBody);
};

module.exports = getInstaAccessToken;
