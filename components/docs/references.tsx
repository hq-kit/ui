import type { FC, SVGProps } from "react"
import {
  type Icon,
  IconBell,
  IconBrandAdobe,
  IconBrandAstro,
  IconBrandGithub,
  IconBrandInertia,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVite,
  IconChartBar,
  IconCommand,
  IconForms
} from "@tabler/icons-react"
import { IconApp, IconBrandEmbla, IconBrandMotion, IconBrandRemix } from "@/components/icons"
import { LinkButton } from "../ui/button"

function getComponentName(url: string): string {
  const lastSegment = url.split("/").pop()
  // biome-ignore lint/suspicious/noNonNullAssertedOptionalChain: no-problem
  return lastSegment?.split("#")[0]!.replace(".html", "") || ""
}

export function DocRefs({ references }: { references: string[] }) {
  const urls = references.map((url: string) => {
    let title = ""
    let icon: FC<SVGProps<SVGSVGElement>> | Icon

    switch (true) {
      case url.includes("react-spectrum"):
        title = getComponentName(url)
        icon = IconBrandAdobe
        break
      case url.includes("adobe"):
        title = getComponentName(url)
        icon = IconBrandAdobe
        break
      case url.includes("laravel"):
        title = "Laravel"
        icon = IconBrandLaravel
        break
      case url.includes("vite"):
        title = "Vite"
        icon = IconBrandVite
        break
      case url.includes("inertia"):
        title = "Inertia.Js"
        icon = IconBrandInertia
        break
      case url.includes("recharts"):
        title = "Recharts"
        icon = IconChartBar
        break
      case url.includes("remix.run"):
        title = "Remix"
        icon = IconBrandRemix
        break
      case url.includes("nextjs"):
        title = "Next.Js"
        icon = IconBrandNextjs
        break
      case url.includes("astro"):
        title = "Astro"
        icon = IconBrandAstro
        break
      case url.includes("hq"):
        title = "HQ Icons"
        icon = IconApp
        break
      case url.includes("motion"):
        title = "Motion"
        icon = IconBrandMotion
        break
      case url.includes("tailwind"):
        title = "Tailwind CSS"
        icon = IconBrandTailwind
        break
      case url.includes("github"):
        title = "Github"
        icon = IconBrandGithub
        break
      case url.includes("cmdk"):
        title = "CMDK"
        icon = IconCommand
        break
      case url.includes("embla"):
        title = "Embla Carousel"
        icon = IconBrandEmbla
        break
      case url.includes("lexical"):
        title = "Lexical"
        icon = IconForms
        break
      case url.includes("sonner"):
        title = "Sonner"
        icon = IconBell
        break
      default:
        icon = IconApp
    }

    return {
      url,
      title,
      icon
    }
  })

  return (
    <div className="flex flex-wrap gap-2">
      {urls.map((item, index) => (
        <LinkButton href={item?.url} key={index} size={"sm"} target="_blank" variant={"outline"}>
          <item.icon />
          {item.title === "Props Reference" ? (
            <span>
              Props <span className="hidden sm:inline">Reference</span>
            </span>
          ) : (
            <span>{item.title}</span>
          )}
        </LinkButton>
      ))}
    </div>
  )
}
