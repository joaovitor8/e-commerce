import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { RouteProducts } from "./routes/products"

const app = fastify()

app.register(fastifyCors, {
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "DELETE"],
})

app.register(RouteProducts)

app.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando na porta: http://localhost:3333")
})
