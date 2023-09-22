// configuración del servidor
// const express = require("express")
import  express  from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import cursoRoutes from './routes/cursoRoutes.js';
// import tareaRoutes from './routes/tareaRoutes.js'

const app = express();

//permite el manejo de solicitudes
app.use(express.json());


dotenv.config();
conectarDB();

//Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/cursos', cursoRoutes )

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})