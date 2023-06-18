import Link from 'next/link'
import Image from 'next/image'

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
              <Link href={'/kid'}>Criança</Link>
            </li>
            <li className="mx-3 font-semibold">
              <Link href={'/women'}>Mulher</Link>
            </li>
            <li className="mx-3 font-semibold">
              <Link href={'/men'}>Homem</Link>
            </li>
          </ul>
        </nav>

        <div className="flex h-3/4 w-2/4 items-center justify-around">
          <input type="text" className="h-3/5 w-1/2 bg-white" />
          <div className="flex space-x-5">
            <Link href={'#'}>
              <Image src={'/shopping.png'} alt={''} height={35} width={35} />
            </Link>
            <Link href={'#'}>
              <Image src={'/account.png'} alt={''} height={35} width={35} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
