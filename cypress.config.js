const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/junit-results-[hash].xml",
    toConsole:true
      },
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  }
})