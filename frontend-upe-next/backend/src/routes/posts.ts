import { Router } from 'express';
import { z } from 'zod';

import { prisma } from '../prisma'
const router = Router();

// Zod schema for validation
const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
});

// POST / - Create a new post
router.post('/', async (req, res) => {
  console.log("Requisição POST recebida!");
  try {
    const validatedData = postSchema.parse(req.body);
    const newPost = await prisma.post.create({
      data: validatedData,
    });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error("ERRO NO POST /API/POSTS:", error);

    if (error.code === 'P1017' || error.code === 'P1001') {
        // Se for erro de conexão, retorne 503 Service Unavailable para clareza
        return res.status(503).json({ error: 'Database connection failed, please try again.' });
    }

    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.issues });
    } else {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' });
    }
  } finally {
    await prisma.$disconnect();
  }
});

// GET / - Retrieve all posts
router.get('/', async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
});

export default router;