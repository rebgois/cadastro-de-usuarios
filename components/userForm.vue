<template>
  <Form :validation-schema="schema" @submit="onSubmit" class="space-y-6 w-full">
    <!-- Campo Nome -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
      <Field
        name="name"
        v-model="formData.name"
        type="text"
        placeholder="Digite seu nome"
        class="w-full border border-gray-300 rounded-lg p-3"
        required
      />
      <ErrorMessage name="name" class="text-red-500 text-sm mt-1" />
    </div>

    <!-- Campo E-mail -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
      <Field
        name="email"
        v-model="formData.email"
        type="email"
        placeholder="Digite seu e-mail"
        class="w-full border border-gray-300 rounded-lg p-3"
        required
      />
      <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
    </div>

    <!-- Campo Senha -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
      <Field
        name="password"
        v-model="formData.password"
        type="password"
        placeholder="Digite sua senha"
        class="w-full border border-gray-300 rounded-lg p-3"
        required
      />
      <ErrorMessage name="password" class="text-red-500 text-sm mt-1" />
    </div>

    <!-- Botão de Salvar -->
    <button
      type="submit"
      class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
    >
      Salvar
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate"; // Importa os componentes do VeeValidate
import { object, string } from "yup"; // Importa Yup para validação
import { reactive } from "vue"; // Reactive para estado local
import { defineEmits, defineProps } from "vue"; // Para props e eventos

// Props recebidas do componente pai
const props = defineProps({
  user: {
    type: Object,
    default: () => ({ name: "", email: "", password: "" }), // Garante um estado inicial vazio
  },
});

// Evento de submit para enviar os dados ao componente pai
const emit = defineEmits(["submit"]);

// Esquema de validação com Yup
const schema = object({
  name: string().required("O nome é obrigatório"),
  email: string().email("E-mail inválido").required("O e-mail é obrigatório"),
  password: string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

// Estado reativo para armazenar os dados do formulário
const formData = reactive({
  name: props.user.name || "",
  email: props.user.email || "",
  password: props.user.password || "",
});

// Observa mudanças nas props e atualiza o estado local
watch(
  () => props.user,
  (newUser) => {
    formData.name = newUser.name || "";
    formData.email = newUser.email || "";
    formData.password = newUser.password || "";
  },
  { immediate: true }
);

// Função chamada ao enviar o formulário
const onSubmit = (values) => {
  console.log("Dados enviados:", values); // Verificação no console
  emit("submit", values); // Emite os valores para o componente pai
};
</script>
