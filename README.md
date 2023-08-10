# book-api-MongoDB

Este é um projeto em Node.js que implementa uma API de livros utilizando o MongoDB como provedor de banco de dados. O projeto utiliza a sintaxe moderna async/await para os controladores.

## Visão Geral

O objetivo deste projeto é criar uma API RESTful para gerenciar livros, usando o MongoDB como banco de dados backend. A API disponibiliza endpoints para adicionar, recuperar, atualizar e deletar livros.

## Tecnologias Utilizadas

- "express": "^4.18.2",
- "mongoose": "^7.4.2",
- "nodemon": "^3.0.1"

## Estrutura do Projeto

- `app.js`: O ponto de entrada principal da aplicação, configura o servidor Express e as rotas.
- `config/dbConnect.js`: Estabelece a conexão com o MongoDB.
- `routes/index.js`: Define as rotas da API e as conecta aos métodos do controlador.
- `controllers/bookController.js`: Contém os métodos para lidar com diversas ações relacionadas aos livros.
- ...

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-nome-de-usuario/book-api-MongoDB.git`
2. Instale as dependências: `npm install`

## Uso

1. Certifique-se de que o MongoDB está em execução.
2. Inicie o servidor: `npm start`
3. Acesse a API em: `http://localhost:3000`

## Endpoints

- `GET /books`: Recupera a lista de todos os livros.
- `GET /books/:id`: Recupera um livro pelo seu ID.
- `POST /books`: Adiciona um novo livro.
- `PUT /books/:id`: Atualiza um livro.
- `DELETE /books/:id`: Deleta um livro.

## Exemplo

* GET /books/12345 retorna o padrão...
```http



{
  "_id": "12345",
  "title": "Livro de Exemplo",
  "author": "Fulano de Tal",
  "publisher": "Empresa tal",
  ...
}
```

