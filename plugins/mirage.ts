//mirage.ts
import { createServer, Model } from "miragejs"; // Importa o MirageJS para simular uma API

// Verifica se o código está sendo executado no navegador
const isBrowser = typeof window !== "undefined";

// Função para carregar usuários armazenados no localStorage
const loadUsersFromStorage = () => {
  if (isBrowser) {
    const storedUsers = localStorage.getItem("users"); // Recupera dados do localStorage
    return storedUsers ? JSON.parse(storedUsers) : []; // Converte de JSON para objeto, ou retorna um array vazio
  }
  return [];
};

// Função para salvar usuários no localStorage
const saveUsersToStorage = (users) => {
  if (isBrowser) {
    localStorage.setItem("users", JSON.stringify(users)); // Converte o array de usuários em JSON e salva
  }
};

// Configura o servidor MirageJS para simular uma API mock
export default function () {
  createServer({
    models: {
      user: Model, // Define o modelo de dados para 'user'
    },

    // Seed: Inicializa o servidor com dados existentes do localStorage
    seeds(server) {
      const users = loadUsersFromStorage(); // Carrega usuários armazenados
      users.forEach((user) => server.create("user", user)); // Cria instâncias no servidor Mirage
    },

    routes() {
      // Permitir que certas rotas do Nuxt passem sem serem interceptadas pelo MirageJS
      this.passthrough("/_nuxt/**");
      this.passthrough("/__webpack_hmr/**");
      this.passthrough("/_nuxt/builds/**");
      this.passthrough("/_nuxt/builds/meta/**");

      // Define o namespace das rotas da API
      this.namespace = "api";

      // Define a rota para listar todos os usuários
      this.get("/users", (schema) => schema.all("user"));

      // Define a rota para adicionar um novo usuário
      this.post("/users", (schema, request) => {
        const attrs = JSON.parse(request.requestBody); // Extrai os dados do corpo da requisição
        const user = schema.create("user", attrs); // Cria um novo usuário no servidor mock
        saveUsersToStorage(schema.all("user").models); // Salva os usuários no localStorage
        return user;
      });

      // Define a rota para atualizar um usuário existente
      this.put("/users/:id", (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody); // Extrai os dados atualizados
        const user = schema.find("user", request.params.id); // Encontra o usuário pelo ID
        user.update(newAttrs); // Atualiza o usuário no servidor mock
        saveUsersToStorage(schema.all("user").models); // Salva os usuários atualizados no localStorage
        return user;
      });

      // Define a rota para deletar um usuário
      this.del("/users/:id", (schema, request) => {
        const user = schema.find("user", request.params.id); // Encontra o usuário pelo ID
        user.destroy(); // Deleta o usuário do servidor mock
        saveUsersToStorage(schema.all("user").models); // Atualiza o localStorage após a exclusão
      });
    },
  });
}
