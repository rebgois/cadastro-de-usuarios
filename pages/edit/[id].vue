<template>
  <!-- Contêiner principal, ocupa toda a altura da tela e centraliza o conteúdo -->
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6"
  >
    <!-- Caixa branca com sombra e borda arredondada para destacar o formulário -->
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <!-- Título do formulário de edição, centralizado -->
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Editar Usuário
      </h1>
      <!-- Componente de formulário reutilizável, recebe o usuário como prop -->
      <userForm :user="user" @submit="handleSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  // Importa as funções e objetos necessários do Vue e de outros módulos
  import { ref, onMounted } from "vue"; // 'ref' cria uma referência reativa, 'onMounted' executa ao montar o componente
  import userForm from "~/components/userForm.vue"; // Importa o componente de formulário reutilizável
  import { useUserStore } from "~/stores/userStore"; // Importa a store do Pinia para gerenciamento de estado global
  import { useRouter, useRoute } from "vue-router"; // Importa objetos para manipular rotas e navegação

  // Instancia a store de usuários para acessar e atualizar dados
  const userStore = useUserStore();
  // Instancia o roteador para navegação programática
  const router = useRouter();
  // Acessa a rota atual para obter parâmetros
  const route = useRoute();
  // Cria uma referência reativa para armazenar o usuário que será editado
  const user = ref(null);

  // Executa ao montar o componente para buscar o usuário pelo ID
  onMounted(() => {
    const id = route.params.id as string; // Obtém o ID do usuário a partir da rota
    user.value = userStore.users.find((u) => u.id === id); // Encontra o usuário na store e armazena na referência
  });

  // Função chamada ao submeter o formulário de edição
  const handleSubmit = async (updatedUser) => {
    // Atualiza o usuário na store com os novos dados fornecidos
    await userStore.updateUser(route.params.id as string, updatedUser);
    // Redireciona para a página inicial após a edição
    router.push("/");
  };
</script>
