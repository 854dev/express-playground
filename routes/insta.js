var express = require('express');
var router = express.Router();

const getInstaAccessToken = require('../service/get-access-token');
const getLongToken = require('../service/get-long-token');
const getProfile = require('../service/get-profile');
const getPost = require('../service/get-post');

/**
 * oauth 인증 코드
 */
const code = 'code';

const shortAccessToken = 'shortAccessToken';

const longAccessToken = 'longAccessToken';

/* GET accessToken */
router.get('/get-access-token', async function (req, res, next) {
  const axiosResponse = await getInstaAccessToken(code);

  const { data } = axiosResponse;

  res.send(data);
});

/* GET longAccessToken */
router.get('/get-long-token', async function (req, res, next) {
  const axiosResponse = await getLongToken(shortAccessToken);

  const { data } = axiosResponse;

  res.send(data);
});

/* GET profile */
router.get('/profile', function (req, res, next) {
  res.send('reponse with a token');
});

module.exports = router;
