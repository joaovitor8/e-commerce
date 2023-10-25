import { FastifyInstance } from "fastify"
import { produtos } from "../db"

export async function RouteProducts(app: FastifyInstance) {
  app.get("/products", async (request, reply) => {
    try {
      const data = produtos

      reply.send(data)
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
