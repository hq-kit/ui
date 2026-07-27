import { menus } from "@/components/layouts/menus"
import { MenuLink } from "./menu-link" // Import dari file Client Component

export function Aside() {
  return (
    <aside className="scrollbar-fade sticky top-7 max-h-screen w-64 overflow-y-auto overflow-x-hidden py-16 pr-8 transition xl:w-72">
      {menus().map((section) => (
        <nav aria-label="Navigation" className="flex flex-col" key={section.title}>
          <ul>
            <li className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 py-0 font-semibold text-base text-foreground">
              {section.title}
            </li>
            {section.items?.map((item) => (
              <MenuLink href={item.slug} key={item.slug}>
                {item.title}
              </MenuLink>
            ))}
          </ul>
          {section.sections?.map((section) => (
            <ul key={section.title}>
              <li className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 py-0 font-semibold text-base text-foreground">
                {section.title}
              </li>
              {section.items?.map((item) => (
                <MenuLink href={item.slug} key={item.slug}>
                  {item.title}
                </MenuLink>
              ))}
            </ul>
          ))}
        </nav>
      ))}
    </aside>
  )
}
