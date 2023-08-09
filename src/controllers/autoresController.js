import autores from '../models/Autor.js';

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const AutorResultado = await autores.find();
            res.status(200).json(AutorResultado);
        } catch (error) {
            console.error('Error fetching Author:', error);
            res.status(500).json({ error: 'An error occurred while fetching Author' });
        }
    }

    static listarAutorPorId = async (req, res) => {
        const id = req.params.id;
        try {
            const foundAuthor = await autores.findById(id);
            if (foundAuthor) {
                res.status(200).send(foundAuthor);
            } else {
                res.status(404).send({ message: 'ID não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao buscar Autor por ID:', error);
            res.status(500).json({ error: 'Ocorreu um erro ao buscar o Autor por ID' });
        }
    }


    static cadastrarAutor = async (req, res) => {
        try {
            const Autor = new autores(req.body);
            await Autor.save();
            res.status(201).json(Autor.toJSON());
            console.log('\x1b[32mExito no cadastro:\x1b[0m\n', JSON.stringify(Autor, null, 2));
        } catch (error) {
            console.error('Erro ao cadastrar Autor:', error);
            res.status(500).json({ error: 'Ocorreu um erro ao cadastrar um novo Autor' });
        }
    }

    static atualizarAutor = async (req, res) => {
        const id = req.params.id;

        try {
            const updatedAutor = await autores.findByIdAndUpdate(id, req.body, { new: true });

            if (updatedAutor) {
                res.status(200).send({ message: 'Atualizado com sucesso', Autor: updatedAutor });
            } else {
                res.status(404).send({ message: 'Autor não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao atualizar Autor:', error);
            res.status(500).send({ message: 'Erro ao atualizar', error: error.message });
        }
    }

    static deletarAutor = async (req, res) => {
        const id = req.params.id;

        try {
            const result = await autores.findByIdAndDelete(id);
            if (result) {
                res.status(200).send({ message: 'O Autor foi removido' });
            } else {
                res.status(404).send({ message: 'ID não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao remover Autor:', error);
            res.status(500).json({ error: 'Ocorreu um erro ao remover o Autor' });
        }
    }

}

export default AutorController;