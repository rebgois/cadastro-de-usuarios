<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
    <h1 class="text-4xl font-extrabold text-white text-center mb-8">Usuários Cadastrados</h1>

    <div class="flex justify-between w-full max-w-4xl mb-4">
      <NuxtLink
        to="/"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
      >
        Voltar ao Cadastro
      </NuxtLink>
    </div>

    <div class="overflow-x-auto w-full max-w-4xl rounded-[20px]">
      <table class="w-full text-left border-collapse bg-white rounded-lg shadow-lg">
        <thead>
          <tr class="bg-gray-300 text-gray-700">
            <th class="p-4">Nome</th>
            <th class="p-4">E-mail</th>
            <th class="p-4">Ações</th>
          </tr>
        </thead>
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
import { useUserStore } from '~/stores/userStore'; // Importa a store de usuários

const userStore = useUserStore(); // Instancia a store

// Função para deletar um usuário
const deleteUser = (id: string) => {
  console.log(`Deletando usuário com ID: ${id}`); // Log para depuração
  userStore.deleteUser(id); // Chama a função deleteUser da store
};
</script>
