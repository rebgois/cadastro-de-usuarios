<template>
  <!-- Container principal com margem automática e padding -->
  <div class="container mx-auto p-4">
    <!-- Título da página -->
    <h1 class="text-2xl font-bold mb-4">Adicionar Usuário</h1>
    <!-- Componente de formulário de usuário, escuta o evento 'submit' -->
    <userForm @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import userForm from "~/components/userForm.vue"; // Importa o componente de formulário de usuário
import { useUserStore } from "~/stores/userStore"; // Importa a store de usuários do Pinia
import { useRouter } from "vue-router"; // Importa o roteador para navegação

// Instancia a store de usuários para acessar as ações e o estado
const userStore = useUserStore();
// Instancia o roteador para navegação programática
const router = useRouter();

// Função para lidar com a submissão do formulário
const handleSubmit = async (user) => {
  await userStore.addUser(user); // Chama a ação 'addUser' da store para adicionar o novo usuário
  router.push("/"); // Redireciona para a página inicial após adicionar o usuário
};
</script>
