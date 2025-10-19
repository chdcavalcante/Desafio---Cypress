Cypress.Commands.add('quantidadeItensNoPedido', (quantidade) => {
    cy.get('.cart_item').should('have.length', quantidade);
});
Cypress.Commands.add('preencherDadosCliente', (firstName, lastName, postalCode) => {
    if (firstName) {
        cy.get('#first-name').type(firstName);
    }
    if (lastName) {
        cy.get('#last-name').type(lastName);
    }
    if (postalCode) {
        cy.get('#postal-code').type(postalCode);
    }
});

Cypress.Commands.add('realizarPedidoCompleto', (produtos, firstName, lastName, postalCode) => {
    cy.adicionarProdutosAoCarrinho(...produtos);
    cy.quantidadeProdutosNoCarrinho(produtos.length);
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.preencherDadosCliente(firstName, lastName, postalCode);
    cy.get('#continue').click();
    cy.quantidadeItensNoPedido(produtos.length);
    cy.get('#finish').click();
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
});

Cypress.Commands.add('adicionarProdutosAoCarrinho', (...produtos) => {
    produtos.forEach(produto => {
        cy.get(`[data-test="add-to-cart-${produto}"]`)
            .should('be.visible')
            .click();
    });
});

Cypress.Commands.add('quantidadeProdutosNoCarrinho', (quantidade) => {
    if (quantidade === undefined || quantidade === null) {
        cy.get('.shopping_cart_link').should('exist').and('not.have.text');
    } else {
        if (!Number.isInteger(quantidade)) {
            throw new Error('O parâmetro quantidade deve ser um número inteiro');
        }
        cy.get('.shopping_cart_link').should('have.text', quantidade.toString());
    }
});