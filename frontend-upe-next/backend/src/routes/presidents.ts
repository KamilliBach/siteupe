import { Router } from 'express';

const router = Router();

// Sample in-memory data. Replace with DB integration as needed.
const presidents = [
  { id: '1', name: 'Ana Silva', termStart: '2018-01-01', termEnd: '2019-12-31' },
  { id: '2', name: 'João Pereira', termStart: '2020-01-01', termEnd: '2020-12-31' },
  { id: '3', name: 'Mariana Costa', termStart: '2021-01-01', termEnd: '2022-12-31' },
];

// GET /api/presidents
router.get('/', (_req, res) => {
  res.json(presidents);
});

// GET /api/presidents/:id
router.get('/:id', (req, res) => {
  const p = presidents.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
});

export default router;
