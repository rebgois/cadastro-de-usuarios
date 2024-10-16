<template>
  <!-- Formulário que captura os dados do usuário e impede o comportamento padrão de submit -->
  <form @submit.prevent="onSubmit">
    <!-- Campo de entrada para o nome do usuário -->
    <!-- Ligação bidirecional com o campo 'name' do objeto 'form' -->
    <div class="mb-4">
      <label class="block text-gray-700">Nome</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
    <!-- Campo de entrada para o e-mail do usuário -->
    <!-- Ligação bidirecional com o campo 'email' do objeto 'form' -->
    <div class="mb-4">
      <label class="block text-gray-700">E-mail</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
    <!-- Campo de entrada para a senha do usuário -->
    <!-- Ligação bidirecional com o campo 'password' do objeto 'form' -->
    <div class="mb-4">
      <label class="block text-gray-700">Senha</label>
      <input
        v-model="form.password"
        type="password"
        class="w-full px-3 py-2 border rounded"
        required
      />
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

// Define a interface User
interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

// Define as propriedades que o componente aceita
const props = defineProps<{
  user: User | null;
}>();

// Define os eventos que o componente pode emitir
const emit = defineEmits<{
  (e: "submit", user: User): void;
}>();

// Cria um objeto reativo 'form' para armazenar os dados do formulário
const form = reactive<User>({
  name: "", // Campo para o nome do usuário
  email: "", // Campo para o e-mail do usuário
  password: "", // Campo para a senha do usuário
});

// Observa mudanças na prop 'user' e atualiza o formulário se houver um usuário fornecido
watchEffect(() => {
  if (props.user) {
    form.name = props.user.name; // Atualiza o campo 'name'
    form.email = props.user.email; // Atualiza o campo 'email'
    form.password = props.user.password; // Atualiza o campo 'password'
  }
});

// Função chamada ao submeter o formulário
const onSubmit = () => {
  emit("submit", { ...form }); // Emite o evento 'submit' passando os dados do formulário
};
</script>
