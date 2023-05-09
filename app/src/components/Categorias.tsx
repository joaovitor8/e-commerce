

export const Categorias = () => {
  return (
    <div className="bg-white h-screen w-40 mt-5">
      <div>
        <p>Preço</p>
        <div>
          <input type="checkbox"/>
          <span>R$0 - R$250</span>
        </div>
        <div>
          <input type="checkbox"/>
          <span>R$250 - R$500</span>
        </div>
        <div>
          <input type="checkbox"/>
          <span>R$500 - R$750</span>
        </div>
        <div>
          <input type="checkbox"/>
          <span>R$750 - R$1000</span>
        </div>
      </div>

      <div>
        <p>Cor</p>
        <div>
          <input type="checkbox"/>
          <span>Verde</span>
        </div>
        <div>
          <input type="checkbox"/>
          <span>Vermelho</span>
        </div>
        <div>
          <input type="checkbox"/>
          <span>Azul</span>
        </div>
      </div>
    </div>
  )
}
