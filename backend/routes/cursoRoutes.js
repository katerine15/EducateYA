import express from 'express';
import {
    obtenerCursos,
    nuevoCurso,
    obtenerCurso,
    editarCurso,
    eliminarCurso
} from '../controllers/cursoCrontroller.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
  .route('/')
  .get(checkAuth, obtenerCursos)
  .post(checkAuth, nuevoCurso)

router
 .route('/:id')
 .get(checkAuth, obtenerCurso)
 .put(checkAuth, editarCurso)
 .delete(checkAuth, eliminarCurso)


export default router