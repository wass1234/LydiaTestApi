import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
    reportTitle: 'Cypress Test Report',
    charts: true,
    code: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // Set the base URL for reqres.in
    baseUrl: 'https://reqres.in',
    // Define the pattern for locating test files
    // Note: .feature files are kept for documentation but excluded from execution
    specPattern: [
      'cypress/e2e/**/*.cy.ts'
    ],
    // Support files location
    supportFile: 'cypress/support/e2e.ts',
    // Fixtures location
    fixturesFolder: 'cypress/fixtures',
    // Screenshots and videos
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    // Video recording
    video: true,
    // Default command timeout
    defaultCommandTimeout: 10000,
    // Request timeout
    requestTimeout: 10000,
    // Response timeout
    responseTimeout: 30000,
    async setupNodeEvents(on, config) {
      // Setup mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on)
      
      return config
    },
  },
})

