<template>
  <Form :validation-schema="schema" @submit="onSubmit" class="space-y-6 w-full">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
      <Field
        name="name"
        v-model="formData.name"
        type="text"
        placeholder="Digite seu nome"
        class="w-full border border-gray-300 rounded-lg p-3"
      />
      <ErrorMessage name="name" class="text-red-500 text-sm mt-1" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
      <Field
        name="email"
        v-model="formData.email"
        type="email"
        placeholder="Digite seu e-mail"
        class="w-full border border-gray-300 rounded-lg p-3"
      />
      <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
      <Field
        name="password"
        v-model="formData.password"
        type="password"
        placeholder="Digite sua senha"
        class="w-full border border-gray-300 rounded-lg p-3"
      />
      <ErrorMessage name="password" class="text-red-500 text-sm mt-1" />
    </div>

    <button
      type="submit"
      class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
    >
      Salvar
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup';
import { reactive, watch } from 'vue';
import { defineEmits, defineProps } from 'vue';

// Define as props para edição de usuários
const props = defineProps({
  user: {
    type: Object,
    default: () => ({ name: '', email: '', password: '' }),
  },
});

// Emite o evento 'submit' para o componente pai
const emit = defineEmits(['submit']);

// Esquema de validação usando Yup
const schema = object({
  name: string().required('O nome é obrigatório'),
  email: string().email('E-mail inválido').required('O e-mail é obrigatório'),
  password: string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
});

// Dados reativos do formulário
const formData = reactive({
  name: props.user.name,
  email: props.user.email,
  password: props.user.password,
});

// Observa mudanças nas props e atualiza os dados do formulário
watch(
  () => props.user,
  (newUser) => {
    formData.name = newUser.name;
    formData.email = newUser.email;
    formData.password = newUser.password;
  },
  { immediate: true }
);

// Função chamada ao submeter o formulário
const onSubmit = (values) => {
  emit('submit', values); // Emite os valores para o componente pai
};
</script>
