<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
    <h1 class="text-4xl font-extrabold text-white text-center mb-8">Usuários Cadastrados</h1>

    <div class="flex justify-between w-full max-w-4xl mb-4">
      <NuxtLink
        to="/"
        class="flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
      >
        <ArrowLeftIcon class="w-5 h-5 mr-2" /> Voltar ao Cadastro
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
                class="flex items-center text-blue-500 hover:text-blue-600 font-semibold"
              >
                <PencilIcon class="w-5 h-5 mr-1" /> Editar
              </NuxtLink>

              <button
                @click="deleteUser(user.id)"
                class="flex items-center text-red-500 hover:text-red-600 font-semibold"
              >
                <TrashIcon class="w-5 h-5 mr-1" /> Deletar
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
import { ArrowLeftIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'; // Ícones de navegação e ações

const userStore = useUserStore();

const deleteUser = (id: string) => {
  userStore.deleteUser(id); // Remove o usuário
};
</script>
