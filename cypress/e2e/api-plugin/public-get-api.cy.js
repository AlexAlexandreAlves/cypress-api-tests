
const BASE_URL = Cypress.env('BASE_URL')


describe('Public Get crocodiles tests', () => {

    it('Get all public crocodiles', () => {

        cy.api(`${BASE_URL}/public/crocodiles/`).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(7);
        })
    });
});

it('Get public crocodiles per id', () => {

    cy.api(`${BASE_URL}/public/crocodiles/1`).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
        expect(response.body.name).to.eq('Bert');
        expect(response.body.sex).to.eq('M');
    });

});