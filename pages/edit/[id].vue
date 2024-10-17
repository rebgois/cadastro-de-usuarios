<template>
  <!-- Verifica se o usuário está carregado -->
  <div v-if="user" class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Editar Usuário</h1>

      <!-- Formulário de Edição -->
      <userForm :user="user" @submit="handleSubmit" />

      <div class="mt-6 flex justify-between">
        <NuxtLink
          to="/"
          class="flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded shadow-md"
        >
          <ArrowLeftIcon class="w-5 h-5 mr-2" /> Voltar ao Cadastro
        </NuxtLink>

        <NuxtLink
          to="/users"
          class="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md"
        >
          Ver Usuários <ArrowRightIcon class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Mensagem de carregamento ou erro caso o usuário não seja encontrado -->
  <div v-else class="text-white text-lg text-center">
    Carregando usuário ou usuário não encontrado...
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userForm from '~/components/userForm.vue'; // Importa o formulário de usuário
import { useUserStore } from '~/stores/userStore'; // Importa a store de usuários
import { useRouter, useRoute } from 'vue-router'; // Importa o roteador e a rota
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'; // Ícones de navegação

const userStore = useUserStore(); // Inicializa a store
const router = useRouter(); // Inicializa o roteador
const route = useRoute(); // Obtém a rota atual
const user = ref(null); // Armazena o usuário para edição

// Função para carregar o usuário
const loadUser = () => {
  const id = route.params.id as string;
  const foundUser = userStore.users.find((u) => u.id === id); // Busca o usuário pelo ID

  if (foundUser) {
    user.value = { ...foundUser }; // Faz uma cópia do usuário encontrado
  } else {
    console.error('Usuário não encontrado!');
    router.push('/users'); // Redireciona se o usuário não for encontrado
  }
};

// Garante que o usuário seja carregado quando o componente for montado
onMounted(loadUser);

// Função para lidar com a submissão do formulário
const handleSubmit = async (updatedUser) => {
  userStore.updateUser(route.params.id as string, updatedUser); // Atualiza o usuário
  router.push('/users'); // Redireciona para a lista de usuários
};
</script>
