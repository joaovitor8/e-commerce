const fastify = require('fastify')() // Instanciando o fastify
const cors = require('@fastify/cors') // Autorização para o Fron-end ter acesso

// -----------------------------------------------

// Registrando a autorização
fastify.register(cors, {
  origin: '*',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
})

// Registando o DB
fastify.register(require(''), {})

// -----------------------------------------------

// Criar um usuário
fastify.post('/produto', async (request: any, reply: any) => {})

// Pegar todos os usuários
fastify.get('/produto', async (request: any, reply: any) => {})

// Pegar um usuário
fastify.get('/produto/:id', async (request: any, reply: any) => {})

// Atualizar um usuário
fastify.put('/produto/:id', async (request: any, reply: any) => {})

// Deletar um usuário
fastify.delete('/produto/:id', async (request: any, reply: any) => {})

// -----------------------------------------------

// Iniciar Servidor
fastify.listen({ port: 3333 }).then(() => {
  console.log('Servidor rodando na porta: http://localhost:3333')
})
