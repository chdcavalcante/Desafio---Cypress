describe('Validações de interface da homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Validar title da plataforma', () => {
    cy.title().should('eq', 'Swag Labs')
  })

  it('Realizar login com sucesso', () => {
    cy.preencherInformacoesDeLogin('standard_user', Cypress.env('USER_PASSWORD'))
    cy.url().should('include', '/inventory.html')
  })

  it('Tentar realizar login com usuario invalido e validar mensagem de erro', () => {
    cy.preencherInformacoesDeLogin('usuario_invalido', Cypress.env('USER_PASSWORD'))
    cy.validarMensagemDeErro('Epic sadface: Username and password do not match any user in this service')

  })

  it('Tentar realizar login com password invalido e validar mensagem de erro', () => {
    cy.preencherInformacoesDeLogin('standard_user', 'password_invalido')
    cy.validarMensagemDeErro('Epic sadface: Username and password do not match any user in this service')
  })

  it('Tentar realizar login com password em branco e validar mensagem de erro', () => {
    cy.preencherInformacoesDeLogin('standard_user')
    cy.validarMensagemDeErro('Epic sadface: Password is required')
  })

  it('Tentar realizar login com username em branco e validar mensagem de erro', () => {
    cy.preencherInformacoesDeLogin('', 'standard_user')
    cy.validarMensagemDeErro('Epic sadface: Username is required')
  })
})
