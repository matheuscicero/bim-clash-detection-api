import { Router } from 'express';
import { BimController } from '../controllers/BimController.js';

const router = Router();

router.post('/elementos', BimController.cadastrarElemento);
router.get('/elementos', BimController.listarElementos);
router.get('/clashes', BimController.listarConflitos);

// 👉 NOVO: Rota do DELETE mapeando o ID na URL
router.delete('/elementos/:id', BimController.removerElemento);

export default router;