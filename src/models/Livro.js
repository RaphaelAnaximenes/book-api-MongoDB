import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    publisher: {type: String, required: true},
    pages: {type: Number}
}
);

const livros = mongoose.model('livros', livroSchema);

export default livros;

