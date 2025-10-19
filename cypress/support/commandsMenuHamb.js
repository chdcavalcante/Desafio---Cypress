Cypress.Commands.add('acessarCarrinhoDeCompras', () => {
    cy.get('#shopping_cart_container').should('be.visible').click();
});
Cypress.Commands.add('abrirMenuHamburguer', () => {
    cy.get('body').then($body => {
        const $btn = $body.find('#react-burger-menu-btn');
        if ($btn.length && !$btn.is(':visible')) {
            cy.scrollTo('top');
        }
    });
    cy.get('#react-burger-menu-btn').should('be.visible').click();
    cy.get('.bm-menu-wrap').should('have.css', 'display', 'block');
})
Cypress.Commands.add('clicarOpcaoMenu', (textoOpcao) => {
    cy.abrirMenuHamburguer();
    cy.get('.bm-menu-wrap').should('have.css', 'display', 'block');
    cy.contains(textoOpcao).should('be.visible').click();
});
