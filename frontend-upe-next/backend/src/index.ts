import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from './prisma';


import postsRouter from './routes/posts'

dotenv.config();




async function connectToDb() {
    try {
        console.log("Tentando conectar ao banco de dados...");
        await prisma.$connect();
        console.log("SUCESSO: Conexão com o banco de dados estabelecida!");
    } catch (error) {
        console.error("FALHA CRÍTICA: Não foi possível conectar ao MySQL. Verifique o DATABASE_URL e o serviço MySQL.", error);
        // Opcional: Saia do processo para evitar problemas futuros
        // process.exit(1); 
    }
}

connectToDb()

const app = express();
const PORT = process.env.PORT || 4000;



app.use(cors({
  origin: 'http://localhost:3000', // Permite especificamente o seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true // Necessário se você usa cookies/sessões
}));
app.use(express.json());

app.use('/api/posts', postsRouter);



app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
