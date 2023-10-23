import Link from "next/link"

export const FormRegister = () => {
  return (
    <form className="bg-slate-100 w-[700px] p-10 my-10 rounded-xl">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base text-center font-semibold leading-7 text-gray-900">Cadastra-se</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Nome de Usuario</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nome</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Sobrenome</label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">País</label>
              <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                  <option>Brasil</option>
                  <option>Portugal</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Endereço / nº</label>
              <div className="mt-2">
                <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Cidade</label>
              <div className="mt-2">
                <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Estado</label>
              <div className="mt-2">
                <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>

            <div>
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">CEP</label>
              <div className="mt-2">
                <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <p>Já tem conta? Faça login <Link href={"/login"} className="text-blue-700">aqui</Link></p>
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  )
}