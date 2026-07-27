"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentProps, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const MenuLink = ({ href, className, ...props }: ComponentProps<typeof Link>) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const ref = useRef<HTMLLIElement>(null) // Ubah ke HTMLLIElement karena di-attach ke <li>

  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }, [isActive])

  return (
    <li ref={ref}>
      <Link
        className={cn(
          "cn-sidebar-menu-button relative ml-1 flex w-full items-center font-normal text-muted-foreground text-sm outline-hidden transition hover:z-10 hover:font-semibold",
          isActive && "bg-accent font-semibold text-accent-foreground",
          className
        )}
        href={href}
        prefetch={true}
        {...props}
      />
    </li>
  )
}
