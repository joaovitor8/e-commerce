"use client"

import { useState } from "react"

export const HeaderNav = () => {
  const [ver, setVer] = useState(false)

  const ConsigoVer = () => {
    if (ver === false) {
      setVer(true)
    } else {
      setVer(false)
    }
  }

  return (
    <div className="flex space-x-5">
      <button>Produtos</button>
      <div>
        <button onClick={ConsigoVer}>Categorias</button>
        <nav className={ver ? "absolute bg-white p-3" : "hidden"}>
          <p>Masculino</p>
          <p>Feminino</p>
          <p>Crianças</p>
          <p>Roupas</p>
          <p>Calçados</p>
          <p>Acessorios</p>
        </nav>
      </div>
      <p>Oferta</p>
      <p>Em construção</p>
    </div>
  )
}