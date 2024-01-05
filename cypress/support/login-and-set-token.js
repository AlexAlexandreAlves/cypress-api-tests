// authFunctions.js
import { setAccessToken } from './store-token.js';

const loginAndSetToken = (username, password, baseUrl) => {
  return cy.api({
    method: 'POST',
    url: `${baseUrl}/auth/token/login/`,
    body: { username, password },
  }).then((response) => {
    setAccessToken(response.body.access);
  });
};

export default {
  loginAndSetToken,
};
