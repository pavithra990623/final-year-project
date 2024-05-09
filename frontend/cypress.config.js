const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "e2e": {
    "baseUrl": "http://localhost:3000" // Adjust the URL as needed
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
