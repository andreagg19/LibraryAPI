import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Book = db.define('books', {
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING
    },
    published_year: {
        type: DataTypes.INTEGER
    },
    author_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'authors', // Nombre de la tabla de autores
            key: 'author_id'
        }
    }
});

export default Book;
