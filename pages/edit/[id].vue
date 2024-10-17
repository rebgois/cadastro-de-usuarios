<template>
  <div v-if="user" class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Editar Usuário</h1>

      <userForm :user="user" @submit="handleSubmit" />

      <div class="mt-6 flex justify-between">
        <NuxtLink to="/" class="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded shadow-md">
          <ArrowLeftIcon class="w-5 h-5 mr-2" /> Voltar ao Cadastro
        </NuxtLink>

        <NuxtLink to="/users" class="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-md">
          Ver Usuários <ArrowRightIcon class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-else class="text-white text-lg text-center">Carregando usuário ou usuário não encontrado...</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userForm from '~/components/userForm.vue';
import { useUserStore } from '~/stores/userStore';
import { useRouter, useRoute } from 'vue-router';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const user = ref(null);

// Função para carregar o usuário
const loadUser = () => {
  const id = route.params.id as string;
  const foundUser = userStore.users.find((u) => u.id === id);

  if (foundUser) {
    user.value = { ...foundUser }; // Garante que os dados sejam copiados
  } else {
    console.error('Usuário não encontrado!');
    router.push('/users'); // Redireciona se o usuário não for encontrado
  }
};

onMounted(loadUser);

// Função para lidar com a submissão
const handleSubmit = (updatedUser) => {
  console.log('Atualizando usuário:', updatedUser); // Verifica os dados no console
  userStore.updateUser(route.params.id as string, updatedUser);
  router.push('/users'); // Redireciona após a atualização
};
</script>
