import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
// import { RouteApod } from "./routes/apod"

const app = fastify()

app.register(fastifyCors, {
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "PUT", "DELETE"],
})

// app.register(RouteApod)

app.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando na porta: http://localhost:3333")
})
