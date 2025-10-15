const { defineConfig } = require('cypress')

module.exports = defineConfig({
    
  e2e: {
    baseUrl: 'https://automationpratice.com.br/', //define uma URL base para todos os testes
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
})
