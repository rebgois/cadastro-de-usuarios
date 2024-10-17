import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~": ".", // Configura o alias para a raiz do projeto
      "@": ".", // Alias alternativo para '@'
    },
  },
});
