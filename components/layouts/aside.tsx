import { Badge } from "@/components/ui/badge"
import { AsideLink } from "./aside-link"
import { menus } from "./menus"

export default function Aside() {
  return (
    <aside
      className="scrollbar-fade sticky top-10 max-h-dvh w-64 overflow-x-hidden overflow-y-auto py-8 pr-8 transition xl:w-72"
      data-docs-sidebar-scroll
    >
      {menus().map((section) => (
        <nav aria-label="Navigation" className="flex flex-col px-4" key={section.title}>
          <ul className="space-y-1">
            <li className="text-foreground pointer-events-none mt-6 mb-2 px-2 py-0 font-mono text-xs font-medium uppercase">
              {section.title}
            </li>
            {section.items?.map((item) => (
              <AsideLink href={item.slug} key={item.slug}>
                {item.title}
              </AsideLink>
            ))}
          </ul>
          {section.sections?.map((section) => (
            <ul className="space-y-0" key={section.title}>
              <li className="text-foreground pointer-events-none mt-6 mb-2 px-2 py-0 font-mono text-xs font-medium uppercase">
                {section.title}
              </li>
              {section.items?.map((item) => (
                <AsideLink href={item.slug} key={item.slug}>
                  {item.title}
                  {item.status !== "stable" && (
                    <Badge
                      variant={item.status === "new" ? "success" : item.status === "alpha" ? "destructive" : "warning"}
                    >
                      {item.status}
                    </Badge>
                  )}
                </AsideLink>
              ))}
            </ul>
          ))}
        </nav>
      ))}
    </aside>
  )
}
