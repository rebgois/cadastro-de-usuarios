<template>
  <!-- Formulário que captura os dados do usuário e impede o comportamento padrão de submit -->
  <form @submit.prevent="onSubmit">
    <!-- Campo de entrada para o nome do usuário -->
    <div class="mb-4">
      <label class="block text-gray-700">Nome</label>
      <input v-model="form.name"
      <!-- Ligação bidirecional com o campo 'name' do objeto 'form' -->
      type="text" class="w-full px-3 py-2 border rounded" required />
    </div>
    <!-- Campo de entrada para o e-mail do usuário -->
    <div class="mb-4">
      <label class="block text-gray-700">E-mail</label>
      <input v-model="form.email"
      <!-- Ligação bidirecional com o campo 'email' do objeto 'form' -->
      type="email" class="w-full px-3 py-2 border rounded" required />
    </div>
    <!-- Campo de entrada para a senha do usuário -->
    <div class="mb-4">
      <label class="block text-gray-700">Senha</label>
      <input v-model="form.password"
      <!-- Ligação bidirecional com o campo 'password' do objeto 'form' -->
      type="password" class="w-full px-3 py-2 border rounded" required />
    </div>
    <!-- Botão para submeter o formulário -->
    <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">
      Salvar
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue"; // Importa funções reativas do Vue
import { defineProps, defineEmits } from "vue"; // Importa funções para definir props e eventos

// Define as propriedades que o componente aceita
const props = defineProps({
  user: {
    type: Object, // Espera um objeto como prop
    default: null, // Valor padrão é null caso nenhuma prop seja passada
  },
});

// Define os eventos que o componente pode emitir
const emit = defineEmits(["submit"]);

// Cria um objeto reativo 'form' para armazenar os dados do formulário
const form = reactive({
  name: "", // Campo para o nome do usuário
  email: "", // Campo para o e-mail do usuário
  password: "", // Campo para a senha do usuário
});

// Observa mudanças na prop 'user' e atualiza o formulário se houver um usuário fornecido
watchEffect(() => {
  if (props.user) {
    form.name = props.user.name; // Atualiza o campo 'name' com o valor de 'props.user.name'
    form.email = props.user.email; // Atualiza o campo 'email' com o valor de 'props.user.email'
    form.password = props.user.password; // Atualiza o campo 'password' com o valor de 'props.user.password'
  }
});

// Função chamada ao submeter o formulário
const onSubmit = () => {
  emit("submit", { ...form }); // Emite o evento 'submit' passando os dados do formulário
};
</script>
