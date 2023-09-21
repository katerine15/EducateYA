import express from 'express';

const router = express.Router();

import { registrar, autenticar } from '../controllers/usuarioController.js';

//Autenticación, Registro y confrimación de usuarios

router.post('/', registrar); //creación de usuarios
router.post('/login', autenticar);



export default router;