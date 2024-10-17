import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

// Interface que define a estrutura de um usuário
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Cria a store de usuários usando Pinia
export const useUserStore = defineStore('userStore', () => {
  const users = ref<User[]>([]); // Estado reativo para armazenar usuários

  // Função para buscar usuários do localStorage
  const fetchUsers = () => {
    const storedUsers = localStorage.getItem('users');
    users.value = storedUsers ? JSON.parse(storedUsers) : [];
  };

  // Função para adicionar um novo usuário
  const addUser = (user: User) => {
    user.id = Date.now().toString(); // Gera um ID único
    users.value.push(user); // Adiciona o usuário à lista
    saveUsers(); // Salva no localStorage
  };

  // Função para atualizar um usuário existente
  const updateUser = (id: string, updatedUser: User) => {
    const index = users.value.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.value[index] = { ...updatedUser, id }; // Mantém o ID original
      saveUsers(); // Atualiza o localStorage
    }
  };

  // Função para deletar um usuário pelo ID
  const deleteUser = (id: string) => {
    users.value = users.value.filter((user) => user.id !== id); // Remove o usuário
    saveUsers(); // Atualiza o localStorage
  };

  // Função para salvar a lista de usuários no localStorage
  const saveUsers = () => {
    localStorage.setItem('users', JSON.stringify(users.value));
  };

  // Carrega os usuários ao inicializar a store
  onMounted(() => {
    if (typeof window !== 'undefined') {
      fetchUsers();
    }
  });

  return {
    users,
    addUser,
    updateUser,
    deleteUser,
  };
});
