"use client"

import { IconExternalLink } from "@tabler/icons-react"
import { cn } from "cn"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentProps, useEffect, useRef } from "react"

export function AsideLink({ href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname()
  const isActive = pathname === href
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    if (isActive && ref.current) {
      const scrollContainer = ref.current.closest<HTMLElement>("[data-docs-sidebar-scroll]")
      if (!scrollContainer) return

      const linkRect = ref.current.getBoundingClientRect()
      const containerRect = scrollContainer.getBoundingClientRect()
      const visibleTop = Math.max(containerRect.top, 0)
      const visibleBottom = Math.min(containerRect.bottom, window.innerHeight)
      const edgePadding = 32
      const isWithinVisibleArea =
        linkRect.top >= visibleTop + edgePadding && linkRect.bottom <= visibleBottom - edgePadding

      if (isWithinVisibleArea) return

      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + (linkRect.top + linkRect.bottom) / 2 - (visibleTop + visibleBottom) / 2,
        behavior: "instant"
      })
    }
  }, [isActive])

  return (
    <li className="relative">
      {isActive && (
        <motion.span
          className="bg-primary absolute top-1/2 -left-4 hidden h-6 w-0.5 -translate-y-1/2 rounded-full md:block"
          layoutId="currentIndicator"
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
            mass: 0.8
          }}
        />
      )}
      <Link
        prefetch
        {...props}
        className={cn(
          "group text-muted-foreground relative flex items-center gap-x-2 rounded-lg px-2 py-1 text-sm transition",
          "hover:text-primary focus:outline-hidden",
          "*:[svg]:size-4.5",
          "data-[active=true]:text-primary data-[active=true]:font-medium"
        )}
        data-active={isActive}
        href={href}
        ref={ref}
      >
        {props.children}
        {props.target === "_blank" && (
          <IconExternalLink
            className="text-muted-foreground -mr-1 ml-auto block lg:hidden lg:group-hover:block"
            style={{
              width: "16px",
              height: "16px"
            }}
          />
        )}
      </Link>
    </li>
  )
}
