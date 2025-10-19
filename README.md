# 🧪 Testes Automatizados com Cypress

Este projeto realiza testes automatizados de interface utilizando o framework [Cypress](https://www.cypress.io/).  
Os testes cobrem funcionalidades essenciais da aplicação, como login, navegação pelo menu  
e realização de pedidos, garantindo que o comportamento esperado seja mantido.

---

## 🛠️ Tecnologias necessárias

- [Node.js](https://nodejs.org/) — versão 22.20.0 ou superior  
- [npm](https://www.npmjs.com/) — gerenciador de pacotes  
- [Cypress](https://www.cypress.io/) — versão 15.5.0

---

## ⚙️ Instalar Node.js (via nvm recomendado)

```bash
nvm install 22.20.0
nvm use 22.20.0

# Verificar instalação
node -v
npm -v
```

---

## 📦 Clonar o projeto e instalar dependências

```bash
# Clonar o repositório
git clone https://github.com/chdcavalcante/Desafio---Cypress.git
cd Desafio---Cypress

# Instalar dependências do projeto
npm install
```

---

## 🚀 Executar os testes em modo headless

```bash
# Executar todos os testes com o navegador Electron em modo headless
npx cypress run --browser electron
```

---

## 📄 Observações

- Os testes são executados em modo headless por padrão, ideal para ambientes de CI/CD.
- Para executar os testes em modo interativo com interface gráfica:

```bash
npx cypress open
```

---

## ⚙️ Integração com GitHub Actions

Este projeto está integrado com **GitHub Actions**, permitindo que os testes Cypress sejam executados automaticamente a cada `push` ou `pull request` para as branches `main`, `master` ou `desenvolvimento`.

O workflow está definido em:

```
.github/workflows/cypress.yml
```

### 🔁 Quando a pipeline é executada:

- Push para `main`, `master` ou `desenvolvimento`
- Pull request para `main`, `master` ou `desenvolvimento`

### 🧪 O que a pipeline faz:

- Instala o Node.js na versão correta
- Instala as dependências do projeto
- Executa os testes Cypress em modo headless