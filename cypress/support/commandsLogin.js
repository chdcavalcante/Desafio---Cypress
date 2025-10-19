Cypress.Commands.add('preencherInformacoesDeLogin', (username, password) => {
    if (typeof username === 'string' && username.length > 0) {
        cy.get('#user-name').type(username);
    }
    if (typeof password === 'string' && password.length > 0) {
        cy.get('#password').type(password, { log: false });
    }
    cy.get('#login-button').click();
});

Cypress.Commands.add('validarMensagemDeErro', (mensagemEsperada) => {
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', mensagemEsperada);
});
