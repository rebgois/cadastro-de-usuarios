// <template>
//     <div class="min-h-screen bg-gradient-to-tr from-green-400 to-blue-500">
//       <!-- Menu Fixo no Topo -->
//       <nav class="bg-white shadow-md fixed top-0 left-0 w-full z-10">
//         <div class="container mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 class="text-xl font-bold text-gray-800">Meu Projeto</h1>
  
//           <!-- Botões de Navegação Condicional -->
//           <div class="flex gap-4">
//             <!-- Botão "Ver Usuários" (só aparece na página inicial) -->
//             <NuxtLink
//               v-if="isOnPage('/')"
//               to="/users"
//               class="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-md transition"
//             >
//               Ver Usuários <ArrowRightIcon class="w-5 h-5 ml-2" />
//             </NuxtLink>
  
//             <!-- Botão "Voltar ao Cadastro" (só aparece na página de usuários ou edição) -->
//             <NuxtLink
//               v-if="isOnPage('/users') || isOnEditPage"
//               to="/"
//               class="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-md transition"
//             >
//               <ArrowLeftIcon class="w-5 h-5 mr-2" /> Voltar ao Cadastro
//             </NuxtLink>
//           </div>
//         </div>
//       </nav>
  
//       <!-- Conteúdo da Página -->
//       <div class="pt-20">
//         <slot /> <!-- O conteúdo das páginas é inserido aqui -->
//       </div>
//     </div>
//   </template>
  
//   <script setup lang="ts">
//   import { useRoute } from 'vue-router'; // Importa o Vue Router
//   import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'; // Ícones de navegação
  
//   const route = useRoute(); // Acessa a rota atual
  
//   // Função para verificar se estamos em uma página específica pelo caminho
//   const isOnPage = (path: string) => route.path === path;
  
//   // Função para verificar se estamos na página de edição (rota dinâmica)
//   const isOnEditPage = route.path.startsWith('/edit');
//   </script>
  