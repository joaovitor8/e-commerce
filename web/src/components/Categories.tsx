"use client"

import { useState, useEffect } from "react"
import axios from "axios"

export const Categories = () => {
  const [roupasChack, setRoupasChack] = useState(false)
  const [calcadosChack, setCalcadosChack] = useState(false)
  const [acessoriosChack, setAcessoriosChack] = useState(false)

  let type = "roupas"

  const SendCategory = () => {
    try {
      axios.post(`http://localhost:3333/products?type=${type}`)
    } catch (error) {
      console.error(error, "Deu erro!!!")
    }
  }

  const CheckCategories = (e: string) => {
    if (e === "roupas") {
      if (roupasChack === false) {
        setRoupasChack(true)
        console.log("roupas")
      } else {
        setRoupasChack(false)
      }
    } else if (e === "calcados") {
      if (calcadosChack === false) {
        setCalcadosChack(true)
        console.log("calcados")
      } else {
        setCalcadosChack(false)
      }
    } else if (e === "acessorios") {
      if (acessoriosChack === false) {
        setAcessoriosChack(true)
        console.log("acessorios")
      } else {
        setAcessoriosChack(false)
      }
    }
  }

  useEffect(() => {
    SendCategory()
  }, [])

  return (
    <div className="bg-slate-300 max-h-screen w-[200px] space-y-5 pl-3 pt-3">
      <div>
        <p>Sexo</p>
        <ul>
          <li className="flex"><input type="checkbox" name="unissex" id="unissex"  />Unissex</li>
          <li className="flex"><input type="checkbox" name="infantil" id="infantil" />Infantil</li>
          <li className="flex"><input type="checkbox" name="feminino" id="feminino" />Feminino</li>
          <li className="flex"><input type="checkbox" name="masculino" id="masculino" />Masculino</li>
        </ul>
      </div>

      <div>
        <p>Categorias</p>
        <ul>
          <li className="flex"><input type="checkbox" name="roupas" id="roupas" onClick={(e) => CheckCategories(e.currentTarget.name)} />Roupas</li>
          <li className="flex"><input type="checkbox" name="calcados" id="calcados" onClick={(e) => CheckCategories(e.currentTarget.name)} />Calçados</li>
          <li className="flex"><input type="checkbox" name="acessorios" id="acessorios" onClick={(e) => CheckCategories(e.currentTarget.name)} />Acessórios</li>
        </ul>
      </div>
    </div>
  )
}
