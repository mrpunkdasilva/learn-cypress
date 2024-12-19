const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      requestMode: true,
      hideCredentials: true,
      hideCredentialsOptions: {
        body: ["email", "password"]
      }
    }
  },
});
