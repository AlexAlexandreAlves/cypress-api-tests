import data from '../../fixtures/crocodile-data.json'

const BASE_URL = Cypress.env('BASE_URL')

beforeEach(() => {
    cy.Login('usuarioteste02', '1234hh');
});


describe('Authentication test', () => {

    it('Do login test', () => {

        const data = {
            username: 'usuarioteste02',
            password: '1234hh'
        }

        cy.api({
            method: 'POST',
            url: `${BASE_URL}/auth/token/login/`,
            body: data
        }).then((response) => {
            expect(response.status).to.eq(200);

        })
    });
});

describe('Create crocodile test', () => {

    it('Create my crocodiles test', () => {

        const token = Cypress.env('authToken');

        const crocodile = {
            name: data.crocodileData.name,
            sex: data.crocodileData.sex,
            date_of_birth: data.crocodileData.date_of_birth,
        }

        cy.api({
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${BASE_URL}/my/crocodiles/`,
            body: crocodile
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq('Godzilla');
            expect(response.body.sex).to.eq('M');
            expect(response.body.date_of_birth).to.eq('1985-01-01');
        })
    });

});
