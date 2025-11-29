import { Router } from 'express';

const router = Router();

const motions = [
  { id: 'm1', type: 'moção', title: 'Moção de Apoio - Projeto X', date: '2023-05-12' },
  { id: 'r1', type: 'resolução', title: 'Resolução 10/2022 - Funcionamento', date: '2022-11-02' },
];

router.get('/', (_req, res) => {
  res.json(motions);
});

router.get('/:id', (req, res) => {
  const item = motions.find((m) => m.id === req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

export default router;
