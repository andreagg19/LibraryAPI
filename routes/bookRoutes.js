import express from 'express';
import {
    getBooks,
    createBook,
    updateBook,
    deleteBook
} from '../controllers/bookController.js';

const bookRoutes = express.Router(); // Definición de la constante bookRoutes

bookRoutes.get('/', getBooks);
bookRoutes.post('/', createBook);
bookRoutes.put('/:id', updateBook);
bookRoutes.delete('/:id', deleteBook);

export default bookRoutes; // Exportación de bookRoutes


