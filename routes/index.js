import express from 'express'
import { 
            paginaInicio, 
            paginaNosotros, 
            paginaUsuarios,
            paginaUpdateUsuario,
            paginaDeleteUsuario
        } 
from '../controllers/paginasController.js';

import {
            guardarUsuario
} from '../controllers/usuarioController.js'

const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/usuarios', paginaUsuarios)
router.post('/usuarios', guardarUsuario)
router.get('/usuarios/:usuario', paginaUpdateUsuario)
// router.delete('/usuarios/:usuario', paginaDeleteUsuario)

export default router;