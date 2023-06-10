export const Categorias = () => {
  return (
    <div className="mt-5 flex h-screen w-56 flex-col items-center bg-white">
      <div>
        <div>
          <p className="mb-2">Preço</p>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>R$0 - R$250</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>R$250 - R$500</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>R$500 - R$750</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>R$750 - R$1000</span>
          </div>
        </div>

        <hr className="my-5 w-full" />

        <div>
          <p className="mb-2">Cor</p>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>Verde</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>Vermelho</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>Azul</span>
          </div>
        </div>

        <hr className="my-5 w-full" />

        <div>
          <p className="mb-2">Tipo de Roupa</p>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>Tenis</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>Bluzas</span>
          </div>
          <div className="space-x-1">
            <input type="checkbox" />
            <span>Calças</span>
          </div>
        </div>
      </div>
    </div>
  )
}
