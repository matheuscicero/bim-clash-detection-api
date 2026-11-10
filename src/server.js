import express from 'express';
import bimRoutes from './routes/bim.routes.js';

const app = express();

// 👉 VOCÊ PRECISA DESTA LINHA AQUI PARA O EXPRESS LER JSON!
app.use(express.json()); 

app.use('/api', bimRoutes);

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`🚀 Servidor BIM Lite rodando na porta ${PORTA}`);
});