<template>
  <!-- Contêiner principal com estilos aplicados -->
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
  >
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <!-- Título da página -->
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Editar Usuário
      </h1>
      <!-- Componente de formulário de usuário -->
      <userForm :user="user" @submit="handleSubmit" />
      <!-- Botões de navegação -->
      <div class="mt-6 flex justify-between">
        <!-- Botão para voltar ao cadastro -->
        <NuxtLink
          to="/"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow-md transition-all"
        >
          Voltar ao Cadastro
        </NuxtLink>
        <!-- Botão para ver usuários cadastrados -->
        <NuxtLink
          to="/users"
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-md transition-all"
        >
          Ver Usuários Cadastrados
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import userForm from "~/components/userForm.vue";
import { useUserStore } from "~/stores/userStore";
import { useRouter, useRoute } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const user = ref(null);

onMounted(() => {
  const id = route.params.id as string;
  user.value = userStore.users.find((u) => u.id === id);
});

const handleSubmit = async (updatedUser) => {
  await userStore.updateUser(route.params.id as string, updatedUser);
  router.push("/users"); // Redireciona para a lista de usuários após a edição
};
</script>
