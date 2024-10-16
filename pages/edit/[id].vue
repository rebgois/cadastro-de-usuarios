<template>
    <!-- Container principal com margem automática e padding -->
    <div class="container mx-auto p-4">
      <!-- Título da página -->
      <h1 class="text-2xl font-bold mb-4">Editar Usuário</h1>
      <!-- Componente de formulário para editar o usuário, passando o usuário como prop -->
      <userForm :user="user" @submit="handleSubmit" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue"; // Importa funções do Vue para reatividade e ciclo de vida
  import userForm from "~/components/userForm.vue"; // Importa o componente de formulário reutilizável
  import { useUserStore } from "~/stores/userStore"; // Importa a store de usuários do Pinia
  import { useRouter, useRoute } from "vue-router"; // Importa o roteador Vue e o objeto de rota
  
  // Instancia a store de usuários para acessar as ações e o estado global
  const userStore = useUserStore();
  // Instancia o roteador para navegação programática
  const router = useRouter();
  // Obtém a rota atual para acessar parâmetros da URL
  const route = useRoute();
  // Define uma referência reativa para armazenar o usuário atual
  const user = ref(null);
  
  // Função executada quando o componente é montado
  onMounted(() => {
    // Obtém o ID do usuário a partir dos parâmetros da URL
    const id = route.params.id as string;
    // Busca o usuário correspondente na store e armazena na referência 'user'
    user.value = userStore.users.find((u) => u.id === id);
  });
  
  // Função para tratar a submissão do formulário
  const handleSubmit = async (updatedUser) => {
    // Atualiza o usuário na store com os novos dados
    await userStore.updateUser(route.params.id as string, updatedUser);
    // Redireciona o usuário para a página inicial após a edição
    router.push("/");
  };
  </script>
  