/* eslint-disable @next/next/no-img-element */

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"
import { ArchiveIcon, AvatarIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-20 px-10 flex items-center justify-between border-b">
      <h1><Link href={"/"} className="text-4xl">EC</Link></h1>

      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="space-x-5">
            <Link href={"/"}><NavigationMenuLink>Masculino</NavigationMenuLink></Link>
            <Link href={"/"}><NavigationMenuLink>Feminino</NavigationMenuLink></Link>
            <Link href={"/"}><NavigationMenuLink>Infantil</NavigationMenuLink></Link>
            <Link href={"/"}><NavigationMenuLink>Novo</NavigationMenuLink></Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}

      <div className="flex space-x-3">
        <Link href={"/"}> <ArchiveIcon/> </Link>
        <Link href={"/"}> <AvatarIcon/> </Link>
      </div>
    </header>
  )
}
