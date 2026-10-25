"use client"

import type { ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ className, ...props }: ComponentProps<typeof Link>) => {
  const pathname = usePathname()
  const isActive = pathname.startsWith(props?.href.toString())
  return (
    <Link
      className="relative flex items-center gap-x-2 rounded-lg px-2 text-muted-foreground text-sm transition hover:bg-primary/10 focus:outline-hidden focus:ring focus:ring-ring data-[active=true]:font-medium data-[active=true]:text-primary sm:py-1.5"
      data-active={isActive}
      {...props}
    />
  )
}
export default NavLink
