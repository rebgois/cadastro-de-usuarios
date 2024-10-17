<template>
  <!-- Main container -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
    <!-- Form container -->
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <!-- Title -->
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Cadastro de Usuário</h1>
      <!-- User form -->
      <userForm @submit="handleSubmit" />
      <!-- Link to users list -->
      <div class="mt-6 flex justify-center">
        <NuxtLink
          to="/users"
          class="bg-transparent hover:text-gray-800  text-gray-600 font-semibold px-6 py-2 rounded shadow-md transition-all"
        >
          Ver Usuários Cadastrados
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userForm from '~/components/userForm.vue'; // Import user form component
import { useUserStore } from '~/stores/userStore'; // Import user store
import { useRouter } from 'vue-router'; // Import router for navigation

const userStore = useUserStore(); // Initialize user store
const router = useRouter(); // Initialize router

// Function to handle form submission
const handleSubmit = (user) => {
  console.log('Usuário recebido para cadastro:', user); // Log received user data
  userStore.addUser(user); // Add user to store
  router.push('/users'); // Navigate to users list
};
</script>
