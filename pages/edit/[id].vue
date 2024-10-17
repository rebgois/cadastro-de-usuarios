<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
    <div v-if="user" class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Editar Usuário</h1>
      <userForm :user="user" @submit="handleSubmit" />
      <div class="mt-6 flex justify-between">
        <NuxtLink to="/" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-md">
          Voltar ao Cadastro
        </NuxtLink>
        <NuxtLink to="/users" class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md">
          Ver Usuários
        </NuxtLink>
      </div>
    </div>
    <div v-else class="text-white text-lg">Usuário não encontrado...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userForm from '~/components/userForm.vue';
import { useUserStore } from '~/stores/userStore';
import { useRouter, useRoute } from 'vue-router';

const userStore = useUserStore(); // Instancia a store de usuários
const router = useRouter(); // Instancia o roteador
const route = useRoute(); // Obtém a rota atual
const user = ref(null); // Armazena o usuário selecionado para edição

// Carrega o usuário com base no ID da rota
onMounted(() => {
  const id = route.params.id as string;
  const foundUser = userStore.users.find((u) => u.id === id);
  if (foundUser) {
    user.value = { ...foundUser }; // Faz uma cópia do usuário encontrado
  } else {
    console.error('Usuário não encontrado!');
    router.push('/users'); // Redireciona se o usuário não for encontrado
  }
});

// Função para lidar com a submissão do formulário de edição
const handleSubmit = (updatedUser) => {
  userStore.updateUser(route.params.id as string, updatedUser); // Atualiza o usuário
  router.push('/users'); // Redireciona para a lista de usuários
};
</script>
