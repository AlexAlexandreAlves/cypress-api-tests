// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username, password) => {
  // Faz a chamada à API para autenticar o usuário
  return cy.request({
    method: 'POST',
    url: 'https://test-api.k6.io/auth/token/login/',
    body: {
      username: username,
      password: password,
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    
    // Retorna o token para que ele possa ser usado no teste
     const token = response.body.access;
     Cypress.env('authToken', token);
    
  });
});


Cypress.Commands.add('getCustomRequest', (method, url, body = null, headers = null, statusCode, content = null) => {
    // const url = `${Cypress.config('baseUrl')}${endpoint}`;

    cy.request({
        method,
        url,
        body,
        headers,
    }).then((response) => {
        expect(response.status).to.eq(statusCode);

        if (content) {
            expect(response.body).to.deep.equal(content);
        }
    });
});



  