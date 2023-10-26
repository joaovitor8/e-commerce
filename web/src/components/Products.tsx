"use client"

import { useEffect, useState } from "react"
import axios from "axios"

interface ProdutosTipo {
  id: number
  nome: string
  preco: number
  tipo: string
}

export const Products = () => {
  const [produtos, setProdutos] = useState<ProdutosTipo[]>([])

  const GetProdutos = () => {
    try {
      axios.get("http://localhost:3333/products")
      .then(res => setProdutos(res.data))
    } catch (error) {
      console.error(error, "Algo deu errado")
    }
  }

  useEffect(() => {
    GetProdutos()
  }, [])

  console.log(produtos)

  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap justify-center">
        {produtos.map((p, key) => (
          <div key={key} className="bg-slate-300 h-[270px] w-[200px] m-1">
            <p className="bg-black h-48"></p>
            <div>
              <p className="text-center">{p.nome}</p>
              <div className="flex justify-between px-2">
                <p>R${p.preco}</p>
                <button>Ver</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
