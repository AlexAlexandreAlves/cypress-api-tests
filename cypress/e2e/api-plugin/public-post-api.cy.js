
const BASE_URL = Cypress.env('BASE_URL')


describe('Create user test', () => {


    it('Create a new user', () => {

        const data = {
            username: 'usuarioteste02',
            first_name: 'usuario',
            last_name: 'teste',
            email: 'testezinho2@gmail.com',
            password: '1234hh'
        }
        
        cy.api({
            method: 'POST',
            url: `${BASE_URL}/user/register/`,
            body: data
        }).then((response) => {
            expect(response.status).to.eq(201);
        })
    });
})