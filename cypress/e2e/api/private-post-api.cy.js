import { loginAndSetToken } from '../../support/login-and-set-token.js';
import { getAccessToken } from '../../support/store-token.js';

const BASE_URL = Cypress.env('BASE_URL')

beforeEach(() => {
    // Efetua login antes de cada teste e armazena o token
    loginAndSetToken('usuarioteste02', '1234hh', BASE_URL);
});

describe('Authentication test', () => {

    it('Do login test', () => {

        const data = {
            username: 'usuarioteste02',
            password: '1234hh'
        }

        cy.request({
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

        const token = getAccessToken();
        const data = {
            name: 'Godzilla',
            sex: 'M',
            date_of_birth: '1975-01-01',
        }

        cy.request({
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${BASE_URL}/my/crocodiles/`,
            body: data
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq('Godzilla');
            expect(response.body.sex).to.eq('M');
            expect(response.body.date_of_birth).to.eq('1975-01-01');
        })
    });

});
