
const BASE_URL = Cypress.env('BASE_URL')


beforeEach(() => {
    cy.Login('usuarioteste02', '1234hh');
});

describe('Get private crocodile tests', () => {

    it('Get my crocodile test', () => {

        const token = Cypress.env('authToken');

        // Default method 
        cy.request({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
            url: `${BASE_URL}/my/crocodiles/`,
        }).then((response) => {

            const data = response.body[0];
            expect(response.status).to.eq(200);
            expect(data).to.equal({

                id: 1,
                name: 'Bert',
                sex: 'M',
                date_of_birth: '2010-06-27',
                age: 14
            });
        })
    });

});
