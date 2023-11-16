import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import requestLogger from "../middlewares/requestHandlers.js";
import fetch from "node-fetch";

const routes = (app) => {

app.use(requestLogger);
app.route('/').get(async (req, res) => {
    try {
      // Fazer a requisição à rota /livros para obter os dados dos livros
      const response = await fetch('http://localhost:3000/livros/');
      const livrosData = await response.json();
  
      // Construir uma string com os dados dos livros formatados como itens de uma lista
      const listaLivrosHTML = `<ul>${livrosData.map(livro => `<li>${livro.title} - ${livro.author}</li>`).join('')}</ul>`;
  
      // Enviar uma resposta HTML que inclui a lista de livros
      res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lista de Livros</title>
        </head>
        <body>
          <h1>Lista de Livros</h1>
          ${listaLivrosHTML}
        </body>
        </html>
      `);
    } catch (error) {
      console.error("Erro ao obter dados dos livros:", error);
      res.status(500).send({ error: "Erro interno do servidor" });
    }
  });

app.use(
    express.json(),
    livros,
    autores
    
)
}

export default routes;