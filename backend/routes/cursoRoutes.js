import express from 'express';
import {
    obtenerOfertaCursos,
    nuevoCurso,
    obtenerCurso,
    editarCurso,
    eliminarCurso
} from '../controllers/cursoCrontroller.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
  .route('/')
  .get(checkAuth, obtenerOfertaCursos)
  .post(checkAuth, nuevoCurso)

router
 .route('/:id')
 .get(checkAuth, obtenerCurso)
 .put(checkAuth, editarCurso)
 .delete(checkAuth, eliminarCurso)


export default router