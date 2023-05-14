

export const Categorias = () => {
  return (
    <div className="bg-white h-screen w-56 mt-5 flex flex-col items-center">
      <div>
        <div>
          <p className="mb-2">Preço</p>
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

        <hr className="my-5 w-full"/>

        <div>
          <p className="mb-2">Cor</p>
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

        <hr className="my-5 w-full"/>

        <div>
          <p className="mb-2">Tipo de Roupa</p>
          <div>
            <input type="checkbox"/>
            <span>Tenis</span>
          </div>
          <div>
            <input type="checkbox"/>
            <span>Bluzas</span>
          </div>
          <div>
            <input type="checkbox"/>
            <span>Calças</span>
          </div>
        </div>
      </div>
    </div>
  )
}
