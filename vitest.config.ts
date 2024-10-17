// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Ativa variáveis globais como 'describe', 'it', 'expect'
    environment: "jsdom", // Define o ambiente como 'jsdom' para testes que simulam o navegador
  },
});
