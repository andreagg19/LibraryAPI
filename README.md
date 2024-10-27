# LibraryAPI


library-api/
│
├── .env
├── package.json
├── db.js
├── index.js
├── controllers/
│   ├── authorController.js
│   └── bookController.js
├── models/
│   ├── author.js
│   └── book.js
├── routes/
│   ├── authorRoutes.js
│   └── bookRoutes.js
└── middleware/
    └── errorHandler.js


Probar las Rutas de Autores:
Obtener Todos los Autores: GET http://localhost:3000/api/authors
Crear un Autor:
Método: POST
URL: http://localhost:3000/api/authors
Body (JSON):
json
Copiar código
{
    "name": "Nuevo Autor",
    "bio": "Biografía del nuevo autor."
}


Actualizar un Autor:
Método: PUT
URL: http://localhost:3000/api/authors/1 (cambia el 1 por el ID del autor)
Body (JSON):
json
Copiar código
{
    "name": "Autor Actualizado",
    "bio": "Biografía actualizada."
}


Eliminar un Autor: DELETE http://localhost:3000/api/authors/1
Probar las Rutas de Libros:
Obtener Todos los Libros: GET http://localhost:3000/api/books
Crear un Libro:
Método: POST
URL: http://localhost:3000/api/books
Body (JSON):
json
Copiar código
{
    "title": "Nuevo Libro",
    "genre": "Ficción",
    "published_year": 2023,
    "author_id": 1
}


Actualizar un Libro:
Método: PUT
URL: http://localhost:3000/api/books/1 (cambia el 1 por el ID del libro)
Body (JSON):
json
Copiar código
{
    "title": "Libro Actualizado",
    "genre": "No Ficción",
    "published_year": 2024,
    "author_id": 1
}


Eliminar un Libro: DELETE http://localhost:3000/api/books/1
