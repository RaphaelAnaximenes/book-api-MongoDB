import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import requestLogger from "../middlewares/requestHandlers.js";

const routes = (app) => {

app.use(requestLogger);
app.route('/').get((req, res) => {
    res.status(200).send({title: "Book Api - Anx Dev"});
})

app.use(
    express.json(),
    livros,
    autores
    
)
}

export default routes;