import { createServer, Model } from 'miragejs'; // Importa o MirageJS

// Verifica se estamos no navegador antes de acessar o localStorage
const isBrowser = typeof window !== 'undefined';

// Função para carregar os usuários do localStorage
const loadUsersFromStorage = () => {
  if (isBrowser) {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  }
  return [];
};

// Função para salvar os usuários no localStorage
const saveUsersToStorage = (users) => {
  if (isBrowser) {
    localStorage.setItem('users', JSON.stringify(users));
  }
};

// Configuração do servidor MirageJS
export default function () {
  createServer({
    models: {
      user: Model, // Define o modelo de usuário
    },

    seeds(server) {
      // Carrega os usuários do localStorage na inicialização
      const users = loadUsersFromStorage();
      users.forEach((user) => server.create('user', user));
    },

    routes() {
      // Permitir que rotas internas do Nuxt passem sem serem interceptadas
      this.passthrough('/_nuxt/**');
      this.passthrough('/__webpack_hmr/**');
      this.passthrough('/_nuxt/builds/**');
      this.passthrough('/_nuxt/builds/meta/**');

      // Define o namespace para as rotas da API
      this.namespace = 'api';

      // Rota para buscar todos os usuários
      this.get('/users', (schema) => schema.all('user'));

      // Rota para adicionar um novo usuário
      this.post('/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const user = schema.create('user', attrs);
        saveUsersToStorage(schema.all('user').models);
        return user;
      });

      // Rota para atualizar um usuário
      this.put('/users/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody);
        const user = schema.find('user', request.params.id);
        user.update(newAttrs);
        saveUsersToStorage(schema.all('user').models);
        return user;
      });

      // Rota para deletar um usuário
      this.del('/users/:id', (schema, request) => {
        const user = schema.find('user', request.params.id);
        user.destroy();
        saveUsersToStorage(schema.all('user').models);
      });
    },
  });
}
