import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const livrosResultado = await livros.find().populate('author').exec();
            res.status(200).json(livrosResultado);
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'An error occurred while fetching books' });
        }
    }

static listarLivrosPorId = async (req, res) => {
    const id = req.params.id;
    try {
        const foundBook = await livros.findById(id);
        if (foundBook) {
            res.status(200).send(foundBook);
        } else {
            res.status(404).send({ message: 'ID não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar livro por ID:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar o livro por ID' });
    }
}


static cadastrarLivro = async (req, res) => {
    try {
        const livro = new livros(req.body);
        await livro.save();
        res.status(201).json(livro.toJSON());
        console.log('\x1b[32mExito no cadastro:\x1b[0m\n', JSON.stringify(livro, null, 2));
    } catch (error) {
        console.error('Erro ao cadastrar livro:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao cadastrar um novo livro' });
    }
}

static atualizarLivro = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedLivro = await livros.findByIdAndUpdate(id, req.body, { new: true });

        if (updatedLivro) {
            res.status(200).send({ message: 'Atualizado com sucesso', livro: updatedLivro });
        } else {
            res.status(404).send({ message: 'Livro não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao atualizar livro:', error);
        res.status(500).send({ message: 'Erro ao atualizar', error: error.message });
    }
}

static deletarLivro = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await livros.findByIdAndDelete(id);
        if (result) {
            res.status(200).send({ message: 'O livro foi removido' });
        } else {
            res.status(404).send({ message: 'ID não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao remover livro:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao remover o livro' });
    }
}

}

export default LivroController;