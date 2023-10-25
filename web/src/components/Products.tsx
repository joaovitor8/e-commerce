"client"

import { useEffect, useState } from "react"
import axios from "axios"

export const Products = () => {
  const [produtos, setProdutos] = useState([])

  const GetProdutos = () => {
    try {
      axios.get("http://localhost:3000")
      .then(res => setProdutos(res.data))
    } catch (error) {
      console.error(error, "Algo deu errado")
    }
  }

  useEffect(() => {
    GetProdutos()
  }, [])

  // console.log(produtos)

  return (
    <div></div>
  )
}
