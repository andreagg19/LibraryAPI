import Book from '../models/book.js';

// Obtener todos los libros
export const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo libro
export const createBook = async (req, res) => {
    try {
        const { title, genre, published_year, author_id } = req.body;
        const newBook = await Book.create({ title, genre, published_year, author_id });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un libro
export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, genre, published_year, author_id } = req.body;
    try {
        const book = await Book.findByPk(id);
        if (book) {
            book.title = title;
            book.genre = genre;
            book.published_year = published_year;
            book.author_id = author_id;
            await book.save();
            res.json(book);
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un libro
export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (book) {
            await book.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
