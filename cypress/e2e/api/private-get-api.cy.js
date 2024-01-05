
const BASE_URL = Cypress.env('BASE_URL')


beforeEach(() => {
    cy.Login('usuarioteste02', '1234hh');
});

describe('Get private crocodile tests', () => {

    it('Get my crocodile test', () => {

        const token = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${BASE_URL}/my/crocodiles/`,
        }).then((response) => {

            const data = response.body[0];

            expect(response.status).to.eq(200);
            cy.log(response.body[0])
            expect(data).to.deep.equal({

                id: 12919385,
                name: 'Godzilla',
                sex: 'M',
                date_of_birth: '1975-01-01',
                age: 49
            });
        })
    });

});
