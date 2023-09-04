const getInstaAccessToken = require('./get-access-token');
const getRefreshToken = require('./get-long-token');
const getProfile = require('./get-profile');
const getPost = require('./get-post');

/**
 * oauth 인증 코드
 */
const code = 'code';

const shortAccessToken = 'shortAccessToken';

const longAccessToken = 'longAccessToken';

async function main() {
  /**
   * 액세스 토큰 받기
   */
  getInstaAccessToken('code');

  /**
   * 장기 액세스 토큰 받기
   */
  //   getLongToken();

  /**
   * 프로필 받기
   */
  //   getProfile();

  /**
   * 포스트 조회
   */
  //   getPost();
}

main();
