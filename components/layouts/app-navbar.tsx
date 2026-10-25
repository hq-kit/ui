import { IconBrandGithub } from "@tabler/icons-react"
import Link from "next/link"
import { IconApp } from "../icons"
import { LinkButton } from "../ui/button"
import { CommandPalette } from "./command-palette"
import NavLink from "./nav-link"
import { ThemeSwitcher } from "./theme-switcher"

export default function AppNavbar() {
  return (
    <header className="bg-sidebar/20 sticky top-0 z-50 overflow-hidden border-b backdrop-blur-lg lg:block">
      <div className="container xl:border-x">
        <div className="relative flex items-center justify-between py-2.5">
          <div className="flex items-center gap-x-1.5">
            <Link className="mr-4 flex items-center gap-x-1.5" href="/">
              <IconApp className="text-foreground size-6" />
              <span className="ml-1 space-x-1">
                <strong className="text-foreground font-bold">HQ</strong>
                <span className="text-foreground/50">React UI</span>
              </span>
            </Link>
            <div className="hidden items-center gap-1.5 sm:flex">
              <NavLink href={"/docs"}>Docs</NavLink>
              <NavLink href={"/themes"}>Themes</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5">
            <CommandPalette />
            <LinkButton size={"icon"} variant={"outline"}>
              <IconBrandGithub />
            </LinkButton>
            <ThemeSwitcher size={"icon"} variant={"outline"} />
          </div>
        </div>
      </div>
    </header>
  )
}
