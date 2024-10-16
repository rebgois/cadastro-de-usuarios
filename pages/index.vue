<template>
    <!-- Contêiner principal, preenche a tela e centraliza o conteúdo -->
    <div
      class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
    >
      <!-- Título da página, estilizado e centralizado -->
      <h1 class="text-4xl font-extrabold text-white text-center mb-8">
        Usuários Cadastrados
      </h1>
  
      <!-- Botão para adicionar novo usuário, alinhado à direita -->
      <div class="flex justify-end w-full max-w-4xl mb-4">
        <NuxtLink
          to="/add"
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
        >
          + Adicionar Usuário
        </NuxtLink>
      </div>
  
      <!-- Contêiner da tabela com rolagem horizontal e borda arredondada -->
      <div class="overflow-x-auto w-full max-w-4xl rounded-[20px]">
        <table class="w-full text-left border-collapse bg-white rounded-lg shadow-lg">
          <!-- Cabeçalho da tabela com cor de fundo cinza claro -->
          <thead>
            <tr class="bg-gray-300 text-gray-700">
              <th class="p-4">Nome</th>
              <th class="p-4">E-mail</th>
              <th class="p-4">Ações</th>
            </tr>
          </thead>
          <!-- Corpo da tabela com linhas alternadas e efeito de hover -->
          <tbody>
            <tr
              v-for="user in userStore.users"
              :key="user.id"
              class="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition"
            >
              <!-- Coluna de Nome -->
              <td class="p-4">{{ user.name }}</td>
              <!-- Coluna de E-mail -->
              <td class="p-4">{{ user.email }}</td>
              <!-- Coluna de Ações com botões de edição e deleção -->
              <td class="p-4 flex gap-2">
                <NuxtLink
                  :to="`/edit/${user.id}`"
                  class="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  Editar
                </NuxtLink>
                <button
                  @click="deleteUser(user.id)"
                  class="text-red-500 hover:text-red-600 font-semibold"
                >
                  Deletar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue"; // Importa o hook para executar ações após a montagem do componente
  import { useUserStore } from "~/stores/userStore"; // Importa a store Pinia para acessar dados dos usuários
  
  const userStore = useUserStore(); // Cria uma instância da store de usuários
  
  // Executa a busca dos usuários ao montar o componente
  onMounted(() => {
    userStore.fetchUsers();
  });
  
  // Função para deletar um usuário com base no ID
  const deleteUser = (id: string) => {
    userStore.deleteUser(id);
  };
  </script>
  