import express from 'express';
import cors from 'cors';
import presidentsRouter from './routes/presidents';
import motionsRouter from './routes/motions';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/presidents', presidentsRouter);
app.use('/api/motions', motionsRouter);

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on http://localhost:${PORT}`);
});
