// useUserStore.ts

import { defineStore } from "pinia"; // Importa a função defineStore do Pinia para criar a store
import { ref } from "vue"; // Importa ref do Vue para criar referências reativas

// Define a interface User que representa a estrutura de um usuário
interface User {
  id?: string; // ID opcional do usuário
  name: string;
  email: string;
  password: string;
}

// Exporta a store 'useUserStore' usando o Pinia
export const useUserStore = defineStore("userStore", () => {
  // Cria um estado 'users' que é um array de usuários
  const users = ref<User[]>([]);

  // Função assíncrona para buscar os usuários da API
  const fetchUsers = async () => {
    // Faz uma requisição GET para '/api/users' usando fetch
    const response = await fetch("/api/users");
    // Converte a resposta em JSON
    const data = await response.json();
    // Atualiza o estado 'users' com os dados recebidos
    users.value = data.users;
  };

  // Função assíncrona para adicionar um novo usuário
  const addUser = async (user: User) => {
    // Faz uma requisição POST para '/api/users' com o usuário no corpo da requisição
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user), // Converte o objeto 'user' em uma string JSON
    });
    // Converte a resposta em JSON
    const data = await response.json();
    // Adiciona o novo usuário ao array 'users'
    users.value.push(data.user);
  };

  // Função assíncrona para atualizar um usuário existente
  const updateUser = async (id: string, user: User) => {
    // Faz uma requisição PUT para '/api/users/{id}' com os dados atualizados
    await fetch(`/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user), // Converte o objeto 'user' em uma string JSON
    });
    // Encontra o índice do usuário a ser atualizado no array 'users'
    const index = users.value.findIndex((u) => u.id === id);
    // Se o usuário for encontrado, atualiza seus dados
    if (index !== -1) {
      users.value[index] = { id, ...user }; // Atualiza mantendo o ID original
    }
  };

  // Função assíncrona para deletar um usuário
  const deleteUser = async (id: string) => {
    // Faz uma requisição DELETE para '/api/users/{id}'
    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
    // Remove o usuário do array 'users' filtrando pelo ID
    users.value = users.value.filter((user) => user.id !== id);
  };

  // Retorna o estado e as funções para serem usadas em outros componentes
  return {
    users, // Estado que contém a lista de usuários
    fetchUsers, // Função para buscar usuários
    addUser, // Função para adicionar um novo usuário
    updateUser, // Função para atualizar um usuário existente
    deleteUser, // Função para deletar um usuário
  };
});
