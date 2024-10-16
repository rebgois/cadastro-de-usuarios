<template>
  <!-- Contêiner principal com estilos aplicados -->
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
  >
    <!-- Título da página -->
    <h1 class="text-4xl font-extrabold text-white text-center mb-8">
      Usuários Cadastrados
    </h1>

    <!-- Botões de navegação -->
    <div class="flex justify-between w-full max-w-4xl mb-4">
      <!-- Botão para voltar ao cadastro -->
      <NuxtLink
        to="/"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
      >
        Voltar ao Cadastro
      </NuxtLink>
      <!-- Botão para adicionar novo usuário (opcional) -->
      <NuxtLink
        to="/"
        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
      >
        + Adicionar Usuário
      </NuxtLink>
    </div>

    <!-- Tabela de usuários -->
    <div class="overflow-x-auto w-full max-w-4xl rounded-[20px]">
      <table class="w-full text-left border-collapse bg-white rounded-lg shadow-lg">
        <!-- Cabeçalho da tabela -->
        <thead>
          <tr class="bg-gray-300 text-gray-700">
            <th class="p-4">Nome</th>
            <th class="p-4">E-mail</th>
            <th class="p-4">Ações</th>
          </tr>
        </thead>
        <!-- Corpo da tabela -->
        <tbody>
          <tr
            v-for="user in userStore.users"
            :key="user.id"
            class="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition"
          >
            <td class="p-4">{{ user.name }}</td>
            <td class="p-4">{{ user.email }}</td>
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
import { onMounted } from "vue";
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});

const deleteUser = (id: string) => {
  userStore.deleteUser(id);
};
</script>
