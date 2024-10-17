// cypress/plugins/index.ts
import { startDevServer } from '@cypress/vite-dev-server';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: (on, config) => {
      return startDevServer({
        options: config,
      });
    },
  },
});
