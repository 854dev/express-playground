const axios = require('axios');
const env = require('../env');

function getProfile(accessToken, userId, apiVersion = 'v17.0') {
  /** instagram basic api로 프로필 조회 */
  const fields = 'id,username';

  const response = axios.get(
    `https://graph.instagram.com/${apiVersion}/${userId}`,
    {
      params: {
        fields,
        access_token: accessToken,
      },
    }
  );
}

module.exports = getProfile;
