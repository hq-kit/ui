import type { RegistryItem } from "shadcn/schema"
import { promises as fs } from "node:fs"
import path from "node:path"
import { siteConfig } from "@/config/site"
import { checkHooks, getDeps, getUIComponents } from "./utils"

const samplesDir = path.join(process.cwd(), "components", "samples")

async function walk(dir: string): Promise<string[]> {
  const res: string[] = []
  const samples = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of samples) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      res.push(...(await walk(fullPath)))
    } else if (entry.name.endsWith(".tsx")) {
      res.push(fullPath)
    }
  }

  return res
}

const components = await walk(samplesDir).then((files) =>
  files
    .filter((file) => !file.includes("preview"))
    .map((file) => ({
      name: path.basename(file, ".tsx"),
      path: path.relative(samplesDir, file)
    }))
)

const samples: RegistryItem[] = []

for (const component of components) {
  const content = await fs.readFile(path.join(samplesDir, component.path), "utf-8")

  const regDeps = getUIComponents(content).map((c) => `${siteConfig.url}/r/${c}`)

  const deps = getDeps(content)

  if (checkHooks(content)) {
    regDeps.push(`${siteConfig.url}/r/use-mobile`)
  }

  samples.push({
    name: component.name,
    title: component.name,
    extends: "none",
    dependencies: deps ?? [],
    registryDependencies: regDeps,
    type: "registry:block",
    files: [
      {
        path: `components/samples/${component.path}`,
        type: "registry:component"
      }
    ]
  })
}

export { samples }
