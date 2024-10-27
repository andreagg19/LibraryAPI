import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Author = db.define('authors', {
    author_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT
    }
});

export default Author;



