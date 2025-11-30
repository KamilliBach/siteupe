

import { PrismaClient } from '@prisma/client'

// O TypeScript não sabe que o globalThis possui a propriedade "prisma", 
// então a definimos
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// 1. Reutilize a instância global se ela existir
export const prisma = globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'], // Útil para ver as queries
    // Defina o número máximo de conexões se necessário, embora o padrão seja 10
    // datasources: {...} se não estiver no .env

  })

// 2. Se não estiver em produção, anexe a instância ao globalThis
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma