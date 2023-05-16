/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
// import Image from 'next/image'

export const Navbar = () => {
  return (
    <header className="flex h-24 bg-slate-300">
      <div className="flex w-56 items-center justify-center bg-white">
        <h1>LOGO</h1>
      </div>

      <div className=" flex w-full items-center">
        <nav className="flex h-3/4 w-2/4 items-center">
          <ul className="flex items-center">
            <li className="mx-3 font-semibold">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="mx-3 font-semibold">
              <Link href={'/unisex'}>Unisex</Link>
            </li>
            <li className="mx-3 font-semibold">
              <Link href={'#'}>Criança</Link>
            </li>
            <li className="mx-3 font-semibold">
              <Link href={'#'}>Mulher</Link>
            </li>
            <li className="mx-3 font-semibold">
              <Link href={'#'}>Homem</Link>
            </li>
          </ul>
        </nav>

        <div className="flex h-3/4 w-2/4 items-center justify-around">
          <input type="text" className="h-3/5 w-1/2 bg-white" />
          <div className="flex">
            <Link href={'#'}>
              <img
                src="/baggage-claim.png"
                alt="img"
                className="mr-1 rounded-full bg-black p-3"
              />
            </Link>
            <Link href={'#'}>
              <img
                src="/user.png"
                alt="img"
                className="ml-1 rounded-full bg-black p-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
