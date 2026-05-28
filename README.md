# 📚 BookFlix — Biblioteca Online

O **BookFlix** é uma aplicação web fullstack inspirada na interface da Netflix, desenvolvida para explorar livros de forma moderna, dinâmica e interativa.

A plataforma permite pesquisar livros, visualizar detalhes completos, criar conta, fazer login, salvar favoritos e navegar por categorias estilizadas com uma experiência visual cinematográfica.

---

# 🚀 Tecnologias Utilizadas

## Frontend

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🔀 React Router DOM
* 📡 Axios

## Backend

* 🟢 Node.js
* 🚂 Express
* 🍃 MongoDB Atlas
* 🔐 JWT Authentication
* 🔑 bcryptjs
* 🌐 CORS

---

# 🎯 Funcionalidades

## 📚 Exploração de Livros

* Listagem dinâmica de livros
* Categorias organizadas por gênero
* Banner principal interativo
* Interface inspirada em plataformas de streaming
* Busca em tempo real

---

## 🔍 Pesquisa de Livros

* Sistema de busca integrado com OpenLibrary API
* Resultados dinâmicos
* Capas automáticas
* Navegação para detalhes completos

---

## 📖 Página de Detalhes

Cada livro possui:

* Capa em alta qualidade
* Sinopse tratada dinamicamente
* Hero section cinematográfica
* Link direto para OpenLibrary
* Botão de favoritar
* Layout responsivo

---

## ❤️ Sistema de Favoritos

Usuários autenticados podem:

* Adicionar livros aos favoritos
* Visualizar lista pessoal
* Persistência no banco MongoDB
* Integração completa frontend + backend

---

## 🔐 Autenticação Completa

Sistema funcional de:

* Cadastro de usuários
* Login
* Logout
* Proteção com JWT
* Persistência de sessão via LocalStorage

---

## 🎨 Interface Moderna

* Dark Mode
* Navbar fixa com blur
* Hover animations
* Transições suaves
* Layout responsivo
* Design inspirado na Netflix

---

# 🖥️ Preview

## Home

* Banner cinematográfico
* Categorias estilizadas
* Cards animados
* Busca inteligente

## Book Details

* Background dinâmico
* Informações detalhadas
* Favoritar livros
* Navegação fluida

## Favorites

* Biblioteca pessoal
* Cards responsivos
* Integração com backend

---

# 📂 Estrutura do Projeto

```txt
bookflix/
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BookRow.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Favorites.jsx
│   │   └── BookDetails.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── googleBooks.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── backend/
│   ├── src/
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── favoriteController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Favorite.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── favoriteRoutes.js
│   │
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# 🌐 APIs Utilizadas

## 📚 OpenLibrary API

Utilizada para:

* Buscar livros
* Buscar capas
* Buscar detalhes
* Pesquisar categorias

https://openlibrary.org/developers/api

---

# 🔐 Variáveis de Ambiente

## Backend `.env`

```env
PORT=5000

MONGO_URI=sua_string_do_mongodb_atlas

JWT_SECRET=seu_segredo_jwt
```

---

# ▶️ Como Rodar o Projeto

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

# 📌 Rotas Principais

## Frontend

| Rota         | Página            |
| ------------ | ----------------- |
| `/`          | Home              |
| `/login`     | Login             |
| `/register`  | Cadastro          |
| `/favorites` | Favoritos         |
| `/book/:id`  | Detalhes do Livro |

---

## Backend

| Método | Endpoint         | Função             |
| ------ | ---------------- | ------------------ |
| POST   | `/auth/register` | Criar usuário      |
| POST   | `/auth/login`    | Login              |
| GET    | `/favorites`     | Buscar favoritos   |
| POST   | `/favorites`     | Adicionar favorito |

---

# 📱 Responsividade

O projeto funciona em:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablets

---

# 👨‍💻 Autores

Desenvolvido por:

* Laura Zoffoli Silveira
* Rauhan Kniess de Moura
  
---

# 📄 Licença

Este projeto é livre para estudos, aprendizado e portfólio.
