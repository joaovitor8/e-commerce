/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"


export const Navbar = () => {
  return (
    <header className="h-20 bg-slate-300 flex"> 
      <div className="w-40 bg-white flex justify-center items-center">
        <h1>LOGO</h1>
      </div>

      <div className=" w-full flex items-center">
        <nav className="h-3/4 w-2/4 flex items-center">
          <ul className="flex items-center">
            <li className="mx-3 font-semibold"><Link href={'/'}>Home</Link></li>
            <li className="mx-3 font-semibold"><Link href={'/unisex'}>Unisex</Link></li>
            <li className="mx-3 font-semibold"><Link href={'#'}>Criança</Link></li>
            <li className="mx-3 font-semibold"><Link href={'#'}>Mulher</Link></li>
            <li className="mx-3 font-semibold"><Link href={'#'}>Homem</Link></li>
          </ul>
        </nav>

        <div className="h-3/4 w-2/4 flex justify-around items-center">
          <input type="text" className="h-3/5 w-1/2 bg-white"/>
          <Link href={'#'}><img src="/baggage-claim.png" alt="img" className="p-3 rounded-full bg-black"/></Link>
        </div>
      </div>
    </header>
  )
}
