// cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here, se necessário
    },
  },
});
