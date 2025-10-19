describe('Validações de interface da homepage', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.preencherInformacoesDeLogin('standard_user', Cypress.env('USER_PASSWORD'))
        cy.url().should('include', '/inventory.html')
    })

    it('Validar funcionalidade da opção "All Items" no menu hamburguer', () => {
        cy.acessarCarrinhoDeCompras();
        cy.clicarOpcaoMenu('All Items');
        cy.url().should('include', '/inventory.html');
    })

    it('Validar funcionalidade da opção "About" no menu hamburguer', () => {
        cy.clicarOpcaoMenu('About');
        cy.url().should('eq', 'https://saucelabs.com/');
    })

    it('Validar funcionalidade da opção "Logout" no menu hamburguer', () => {
        cy.acessarCarrinhoDeCompras();
        cy.clicarOpcaoMenu('Logout');
        cy.url().should('include', '/');
    })
    it.only('Validar funcionalidade da opção "Reset App State" no menu hamburguer', () => {
        cy.adicionarProdutosAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt');
        cy.quantidadeProdutosNoCarrinho(3);
        cy.clicarOpcaoMenu('Reset App State');
        cy.quantidadeProdutosNoCarrinho();
    })
})