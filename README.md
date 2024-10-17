### Cadastro de Usuários - Nuxt 3

Esta aplicação permite realizar o **cadastro, listagem, edição e exclusão** de usuários. O projeto é desenvolvido com **Nuxt 3**, utilizando **Pinia** para gerenciamento de estado global e **MirageJS** para simulação de API.

## Deploy na Vercel
A aplicação está disponível em: [Link do Deploy](https://vercel.live/link/cadastro-de-usuarios-versao20-xi.vercel.app?via=project-dashboard-alias-list&p=1)

## Tecnologias Utilizadas
- **Nuxt 3**: Framework Vue.js para desenvolvimento frontend.
- **Pinia**: Gerenciamento de estado global.
- **MirageJS**: Simulação de API.
- **Tailwind CSS**: Estilização da interface.
- **VeeValidate**: Validação de formulários.
- **Vitest**: Testes unitários.
- **Cypress**: Testes E2E.

## Como Configurar o Projeto

### Instalar Dependências
Execute um dos comandos abaixo para instalar as dependências do projeto:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```
## Executando o Servidor de Desenvolvimento
Inicie o servidor localmente em http://localhost:3000:
```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```
## Build de Produção
Para gerar a versão de produção da aplicação:
```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```
Pré-visualize localmente a build de produção:
```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```
## Testes
 Executar Testes Unitários com Vitest:
```bash
npx vitest
```
 Executar Testes E2E com Cypress
Abrir a interface do Cypress:
```bash
npx cypress open
```
Rodar os testes no terminal:
```bash
npx cypress run
```
## Fluxo de Desenvolvimento com Gitflow
Crie uma branch para cada funcionalidade ou correção:\
```bash
git checkout -b feature/nome-da-feature
```
Abra um Pull Request para mesclar com a branch develop.

Após a revisão e aprovação, faça o merge na branch main para deploy.


## Contribuindo
Crie uma branch com a sua feature:
```bash
git checkout -b feature/nome-da-feature
```
Realize commits claros e descritivos.
Abra um Pull Request explicando suas alterações.

## Checklist do Projeto
 CRUD completo de usuários (Cadastro, Listagem, Edição e Exclusão).
 Uso de Pinia para estado global.
 MirageJS para API mock.
 Estilização com Tailwind CSS.
 Validação de formulários com VeeValidate.
 Testes unitários e E2E com Vitest e Cypress.
 Deploy contínuo na Vercel.

## Links de Documentação

- [Documentação Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Documentação Pinia](https://pinia.vuejs.org/)
- [Documentação Cypress](https://docs.cypress.io/)
- [Documentação MirageJS](https://miragejs.com/docs/getting-started/introduction/)

