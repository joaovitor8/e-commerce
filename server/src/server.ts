import fastify from 'fastify' // Importando o Fastify
import { PrismaClient } from '@prisma/client' // Importando o Prisma

const app = fastify() // Configurando o Fastify em app
const prisma = new PrismaClient() // Criando um DB

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// Iniciando o servidor
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor rodando na porta: http://localhost:3333')
  })
