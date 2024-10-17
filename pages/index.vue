<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
  >
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Cadastro de Usuário
      </h1>

      <!-- Passa um objeto vazio como prop para garantir que o formulário inicie vazio -->
      <userForm :user="{}" @submit="handleSubmit" />

      <div class="mt-6 flex justify-center">
        <NuxtLink
          to="/users"
          class="flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
        >
          Ver Usuários
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userForm from "~/components/userForm.vue"; // Importa o formulário
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router"; // Importa o roteador
import { ArrowRightIcon } from "@heroicons/vue/24/outline"; // Ícone de seta

const userStore = useUserStore();
const router = useRouter();

const handleSubmit = (user) => {
  userStore.addUser(user); // Adiciona o usuário na store
  router.push("/users"); // Redireciona para a lista de usuários
};
</script>
