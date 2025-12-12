  Proyecto Backend – Node.js
Este es mi proyecto final de Backend para Talento Tech.
Acá hice una API con Node.js, Express, Firebase y JWT.
Permite hacer login y manejar productos (listar, crear y eliminar).


****Estructura del proyecto***

proyecto_node_backend/
├── src/
│ ├── routes/
│ │ ├── auth.routes.js
│ │ └── products.routes.js
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ └── products.controller.js
│ ├── services/
│ │ ├── auth.service.js
│ │ └── products.service.js
│ ├── models/
│ │ └── products.model.js
│ └── config/
│ └── firebase.js
├── index.js
├── package.json
├── vercel.json
└── .env (no se sube al repositorio)


Tecnologías usadas

° Node.js

° Express

°Firebase Firestore

°JWT

°CORS

°dotenv


Archivo .env

El .env guarda las claves de Firebase y la clave del JWT:

FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_APP_ID=...
JWT_SECRET=...



Cómo usar el proyecto

1°   Clonar el repositorio:
git clone https://github.com/Solema22/proyecto_node_backend.git
cd proyecto_node_backend


2° Instalar dependencias:
npm install

3°  Ejecutar:
npm start


4°   El servidor inicia en:

http://localhost:3000

Endpoints (probados con Postman)
(Login)

POST /api/login

Body:
{
  "email": "test@test.com",
  "password": "123456"
}
 (ESTO TE DEVUELVE UN TOKEN )


Productos

OBTENER TODO LOS PRODUCTOS 

GET /api/products


OBTENER UN PRODUCTO POR ID

GET /api/products/:id


CREAR  (requiere token)

POST /api/products/create


Body:

{
  "flores": "rosas",
  "precio": "100"
}


ELIMINAR (requiere token)

DELETE /api/products/:id


Para crear o eliminar se necesita token:

Authorization: Bearer TU_TOKEN
Y LUEGO PEGAS EL TOKEN QUE TE APARECIO ( SIN COMILLAS )


LUEGO PARA PROBARLO CON VERCEL 
URL del proyecto en Vercel (DOMINIO )














