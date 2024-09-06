# Podcastr

Este projeto é uma aplicação Next.js que integra Convex, Clerk e OpenAI para criar e reproduzir podcasts. 
Os usuários podem gerar podcasts com base em conteúdo gerado por IA, incluindo áudio e imagens.

## Funcionalidades
- `Autenticação:` Login e cadastro utilizando Clerk.
- `Conteúdo Gerado por IA:` Utiliza a OpenAI para gerar roteiros de podcasts, conteúdo de áudio e capas de imagem dinamicamente.
- `Criação e reprodução:` Permite que os usuários gerem novos podcasts e podem ser reproduzidos diretamente na aplicação com o conteúdo de áudio gerado pela IA.

## Tecnologias
- `Next.js:` Framework principal da aplicação.
- `Convex:` Lida com o armazenamento de dados no backend e interações em tempo real.
- `Clerk:` Gerencia a autenticação de usuários e sessões.
- `OpenAI:` Fornece APIs para geração de áudio e imagens para o conteúdo dos podcasts.

## Instalação

```bash
# Clone o repositório
git clone https://github.com/JoaoHFaustino/nextjs-podcastr.git

# Entre no diretório do projeto
cd nextjs-podcastr

# Instale as dependências
npm install
```

## Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:
```bash
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'

OPENAI_API_KEY=
```

## Execute a aplicação:
```bash
npm run dev

# ou

yarn dev
```
A aplicação estará disponível em `http://localhost:3000`


## Configuração do Convex
Certifique-se de que você tem um projeto Convex configurado e vinculado ao seu projeto. Para mais informações, visite a [`documentação do Convex.`](https://docs.convex.dev/quickstart/nextjs)

## Configuração do Clerk
Garanta que você tenha o Clerk configurado para gerenciar a autenticação. Para mais informações, visite a [`documentação do Clerk.`](https://clerk.com/docs/quickstarts/nextjs)

## Configuração da API OpenAI
Certifique-se de criar uma conta na OpenAI e obter sua chave da API. Você precisará dela para gerar áudio e imagens dinâmicas. Mais informações podem ser encontradas na [`documentação da API OpenAI.`](https://platform.openai.com/docs/quickstart)