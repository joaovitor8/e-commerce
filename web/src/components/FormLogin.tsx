import Link from "next/link"

export const FormLogin = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-6 py-12 bg-slate-100 w-[500px] rounded-xl">
        <div>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entre em sua conta</h2>
        </div>

        <div className="mt-10 ">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">Não Tem login? <Link href={"/cadastro"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Cadastre-se aqui</Link></p>
      </div>
    </>
  )
}
