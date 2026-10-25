import type { RegistryItem } from "shadcn/schema"
import { promises as fs } from "node:fs"
import path from "node:path"
import { siteConfig } from "@/config/site"
import { checkHooks, getChildComponents, getDeps } from "./utils"

const uiDir = path.join(process.cwd(), "components", "ui")

async function getComponents() {
  const components: string[] = []
  const files = await fs.readdir(uiDir)
  for (const file of files) {
    if (file.endsWith(".tsx")) {
      components.push(file)
    }
  }
  return components
}

const uiComponents: RegistryItem[] = []

const components = await getComponents()

for (const component of components) {
  const content = await fs.readFile(path.join(uiDir, component), "utf8")
  const regDeps = getChildComponents(content).map((c) => `${siteConfig.url}/r/${c}`)
  const deps = getDeps(content)

  if (checkHooks(content)) {
    regDeps.push(`${siteConfig.url}/r/use-mobile`)
  }

  uiComponents.push({
    name: component.replace(".tsx", ""),
    title: component.replace(".tsx", ""),
    dependencies: deps ?? [],
    registryDependencies: regDeps ?? [],
    files: [
      {
        path: `components/ui/${component}`,
        type: "registry:ui"
      }
    ],
    type: "registry:ui"
  })
}

uiComponents.push({
  name: "all",
  extends: "none",
  type: "registry:ui",
  title: "All UI Components",
  dependencies: [],
  registryDependencies: components.map((c) => `${siteConfig.url}/r/${c.replace(".tsx", "")}`)
})

export { uiComponents }
