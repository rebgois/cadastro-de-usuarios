<template>
  <!-- Contêiner principal que ocupa a tela inteira e centraliza o conteúdo -->
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
  >
    <!-- Caixa branca com padding, sombra e bordas arredondadas -->
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <!-- Título da página, estilizado e centralizado -->
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Adicionar Usuário
      </h1>
      <!-- Componente de formulário reutilizável, escuta o evento 'submit' -->
      <userForm @submit="handleSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import userForm from "~/components/userForm.vue"; // Importa o componente de formulário
import { useUserStore } from "~/stores/userStore"; // Importa a store Pinia para gerenciamento de estado
import { useRouter } from "vue-router"; // Importa o roteador Vue para navegação programática

// Instancia a store de usuários
const userStore = useUserStore();
// Instancia o roteador para redirecionamento
const router = useRouter();

// Função chamada ao submeter o formulário
const handleSubmit = async (user) => {
  // Adiciona o novo usuário à store
  await userStore.addUser(user);
  // Redireciona para a página inicial após adicionar o usuário
  router.push("/");
};
</script>
