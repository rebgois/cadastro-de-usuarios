<template>
  <!-- Contêiner principal com estilos aplicados -->
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
  >
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <!-- Título da página -->
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Cadastro de Usuário
      </h1>
      <!-- Componente de formulário de usuário -->
      <userForm @submit="handleSubmit" />
      <!-- Botão para ver usuários cadastrados -->
      <div class="mt-6 flex justify-center">
        <NuxtLink
          to="/users"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-md transition-all"
        >
          Ver Usuários Cadastrados
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userForm from "~/components/userForm.vue";
import { useUserStore } from "~/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

// Função chamada ao submeter o formulário
const handleSubmit = async (user) => {
  await userStore.addUser(user);
  router.push("/users"); // Redireciona para a lista de usuários após o cadastro
};
</script>
