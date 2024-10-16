<template>
  <!-- Container principal com margem automática nas laterais e padding -->
  <div class="container mx-auto p-4">
    <!-- Título da página -->
    <h1 class="text-2xl font-bold mb-4">Usuários</h1>
    <!-- Link para a página de adicionar um novo usuário -->
    <NuxtLink to="/add" class="bg-blue-500 text-white px-4 py-2 rounded">
      Adicionar Usuário
    </NuxtLink>
    <!-- Tabela para listar os usuários -->
    <table class="w-full mt-4">
      <thead>
        <tr>
          <!-- Cabeçalhos da tabela -->
          <th class="border px-4 py-2">Nome</th>
          <th class="border px-4 py-2">E-mail</th>
          <th class="border px-4 py-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop através da lista de usuários da store -->
        <tr v-for="user in userStore.users" :key="user.id">
          <!-- Exibe o nome do usuário -->
          <td class="border px-4 py-2">{{ user.name }}</td>
          <!-- Exibe o e-mail do usuário -->
          <td class="border px-4 py-2">{{ user.email }}</td>
          <!-- Coluna de ações: editar e deletar -->
          <td class="border px-4 py-2">
            <!-- Link para a página de edição do usuário -->
            <NuxtLink :to="`/edit/${user.id}`" class="text-blue-500">
              Editar
            </NuxtLink>
            <!-- Botão para deletar o usuário -->
            <button @click="deleteUser(user.id)" class="text-red-500 ml-2">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"; // Importa o hook onMounted para ações após a montagem do componente
import { useUserStore } from "~/stores/userStore"; // Importa a store de usuários

// Obtém a instância da store de usuários
const userStore = useUserStore();

// Quando o componente é montado, busca a lista de usuários
onMounted(() => {
  userStore.fetchUsers(); // Chama a função para buscar usuários da API
});

// Função para deletar um usuário específico
const deleteUser = (id: string) => {
  userStore.deleteUser(id); // Chama a função da store para deletar o usuário pelo ID
};
</script>
