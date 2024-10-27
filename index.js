import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import authorRoutes from './routes/authorRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

// Manejo de errores
app.use(errorHandler);

// Conectar a la base de datos y arrancar el servidor
db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });