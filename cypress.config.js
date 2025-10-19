const { defineConfig } = require('cypress')

module.exports = defineConfig({
    
  e2e: {
    defaultCommandTimeout: 10000, //define o tempo máximo de espera para comandos
    baseUrl: 'https://automationpratice.com.br/', //define uma URL base para todos os testes
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
})
