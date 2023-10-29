import { FastifyInstance } from "fastify"
import { produtos } from "../db"

const data = produtos

export async function RouteProducts(app: FastifyInstance) {
  app.post("/products", async (request: any, reply) => {
    try {
      let aaa
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })

  app.get("/products", async (request: any, reply) => {
    try {
      const tipo = request.query.type

      const dataFiltrado = data.filter(objeto => objeto.tipo === tipo)

      console.log(dataFiltrado)

      reply.send(data)
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
