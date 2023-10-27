import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-20 px-5 flex items-center justify-between bg-blue-700">
      <h1 className="text-4xl"> <Link href={"/"}>DEV</Link> </h1>

      <div className="flex space-x-5">
        <Link href={"/products"}>Produtos</Link>
        <Link href={""}>Promoções</Link>
        <Link href={""}>Lançamentos</Link>
        <Link href={""}>Limitados</Link>
      </div>

      <div>
        <Link href={"/login"} className="underline hover:decoration-orange-500">Login</Link>
        <span> ou </span>
        <Link href={"/register"} className="underline hover:decoration-orange-500">Register</Link>
      </div>
    </header>
  )
}
