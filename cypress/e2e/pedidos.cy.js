describe('Realizar pedido', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.preencherInformacoesDeLogin('standard_user', Cypress.env('USER_PASSWORD'))
        cy.url().should('include', '/inventory.html')
    })

    it('Realizar pedido com sucesso', () => {
        cy.realizarPedidoCompleto(
            ['sauce-labs-backpack', 'sauce-labs-bike-light'],
            'Carlos',
            'Mendes',
            '57057215'
        );
    })
})