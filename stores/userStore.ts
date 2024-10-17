import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

// Interface que define a estrutura do usuário
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Função para verificar se o ambiente é o navegador
const isBrowser = typeof window !== 'undefined';

// Função para carregar usuários do localStorage
const loadUsersFromStorage = (): User[] => {
  if (isBrowser) {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  }
  return [];
};

// Função para salvar usuários no localStorage
const saveUsersToStorage = (users: User[]) => {
  if (isBrowser) {
    localStorage.setItem('users', JSON.stringify(users));
  }
};

// Store de usuários
export const useUserStore = defineStore('userStore', () => {
  const users = ref<User[]>([]); // Estado para armazenar usuários

  // Carrega usuários do localStorage na montagem do componente
  const fetchUsers = () => {
    users.value = loadUsersFromStorage();
  };

  // Adiciona um novo usuário
  const addUser = (user: User) => {
    user.id = Date.now().toString(); // Gera um ID único
    users.value.push(user); // Adiciona o usuário à lista
    saveUsersToStorage(users.value); // Salva no localStorage
  };

  // Atualiza um usuário existente
  const updateUser = (id: string, updatedUser: User) => {
    const index = users.value.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.value[index] = { ...updatedUser, id };
      saveUsersToStorage(users.value); // Atualiza o localStorage
    }
  };

  // Deleta um usuário pelo ID
  const deleteUser = (id: string) => {
    users.value = users.value.filter((user) => user.id !== id);
    saveUsersToStorage(users.value); // Atualiza o localStorage
  };

  // Garante que a função `fetchUsers` seja chamada apenas no cliente
  if (isBrowser) {
    onMounted(fetchUsers);
  }

  return { users, addUser, updateUser, deleteUser };
});
