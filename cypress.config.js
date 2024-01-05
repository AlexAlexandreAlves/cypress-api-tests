const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    BASE_URL: "https://test-api.k6.io",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
