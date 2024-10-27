import Author from '../models/author.js';

// Obtener todos los autores
export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo autor
export const createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const newAuthor = await Author.create({ name, bio });
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un autor
export const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { name, bio } = req.body;
    try {
        const author = await Author.findByPk(id);
        if (author) {
            author.name = name;
            author.bio = bio;
            await author.save();
            res.json(author);
        } else {
            res.status(404).json({ error: 'Autor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un autor
export const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    try {
        const author = await Author.findByPk(id);
        if (author) {
            await author.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Autor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
