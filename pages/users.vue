<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-4"
  >
    <div class="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl sm:max-w-4xl">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-600 text-center mb-6">
        Usuários Cadastrados
      </h1>

      <!-- Botão de Voltar ao Cadastro: Antes dos usuários no Mobile -->
      <div class="flex justify-center mb-6 sm:hidden">
        <NuxtLink
          to="/"
          class="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded shadow-md transition"
        >
          <ArrowLeftIcon class="w-5 h-5 mr-2" /> Voltar ao Cadastro
        </NuxtLink>
      </div>

      <!-- Exibe Tabela no Desktop e Cards no Mobile -->
      <div>
        <!-- Tabela: Somente em telas médias ou maiores -->
        <div class="hidden sm:block overflow-y-auto max-h-96 rounded-lg">
          <table class="w-full text-left border-collapse bg-white rounded-lg shadow-lg">
            <thead class="sticky top-0 bg-gray-300 text-gray-600 z-10">
              <tr>
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
                <td class="p-4 text-gray-700 border-b border-gray-300">
                  {{ user.name }}
                </td>
                <td class="p-4 text-gray-700 border-b border-gray-300">
                  {{ user.email }}
                </td>
                <td class="p-4 flex gap-2 border-b border-gray-300">
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

        <!-- Cards: Exibido apenas em dispositivos móveis -->
        <div class="sm:hidden flex flex-col gap-4">
          <div
            v-for="user in userStore.users"
            :key="user.id"
            class="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h2 class="text-lg font-semibold text-gray-800">{{ user.name }}</h2>
            <p class="text-gray-600">{{ user.email }}</p>
            <div class="mt-2 flex gap-2">
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
            </div>
          </div>
        </div>
      </div>

      <!-- Botão de Voltar ao Cadastro no Desktop (depois da tabela) -->
      <div class="hidden sm:flex justify-center mt-6">
        <NuxtLink
          to="/"
          class="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded shadow-md transition"
        >
          <ArrowLeftIcon class="w-5 h-5 mr-2" /> Voltar ao Cadastro
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore'; // Store de usuários
import { ArrowLeftIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'; // Ícones

const userStore = useUserStore(); // Inicializa a store

// Função para deletar um usuário
const deleteUser = (id: string) => {
  userStore.deleteUser(id); // Remove o usuário da store
};
</script>
