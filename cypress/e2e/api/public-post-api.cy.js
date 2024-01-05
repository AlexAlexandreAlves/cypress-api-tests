
const BASE_URL = Cypress.env('BASE_URL')


describe('Create user test', () => {

    it('Create a new user', () => {

        const data = {
            username: `${Math.random()}username`,
            first_name: `${Math.random()}first-name`,
            last_name: `${Math.random()}last-name`,
            email: `${Math.random()}@gmail.com`,
            password: '1234hh'
        }
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/user/register/`,
            body: data
        }).then((response) => {
            expect(response.status).to.eq(201);
        })
    });
})