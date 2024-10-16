<template>
  <form @submit.prevent="onSubmit" class="space-y-6 w-full">
    <!-- Campo Nome -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
        required
      />
    </div>

    <!-- Campo E-mail -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
        required
      />
    </div>

    <!-- Campo Senha -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
      <input
        v-model="form.password"
        type="password"
        class="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
        required
      />
    </div>

    <!-- Botão de Envio -->
    <button
      type="submit"
      class="w-full bg-green-600 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-lg transition-all"
    >
      Salvar
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import { defineProps, defineEmits } from "vue";

// Define as propriedades recebidas pelo formulário
const props = defineProps({
  user: Object,
});

// Define os eventos emitidos pelo formulário
const emit = defineEmits(["submit"]);

// Cria um objeto reativo para os campos do formulário
const form = reactive({
  name: "",
  email: "",
  password: "",
});

// Sincroniza os campos do formulário com os dados do usuário fornecido (se houver)
watchEffect(() => {
  if (props.user) {
    form.name = props.user.name;
    form.email = props.user.email;
    form.password = props.user.password;
  }
});

// Função chamada ao submeter o formulário
const onSubmit = () => {
  emit("submit", { ...form });
};
</script>
