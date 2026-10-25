import type { RegistryItem } from "shadcn/schema"
import { promises as fs } from "node:fs"
import path from "node:path"
import { blocks } from "@/scripts/registries/blocks"
import { cssUtils } from "@/scripts/registries/css-utils"
import { samples } from "@/scripts/registries/samples"
import { uiComponents } from "@/scripts/registries/ui"

const registries: RegistryItem[] = [...uiComponents, ...samples, ...cssUtils, ...blocks]

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "hq",
  homepage: "https://hq-ui.vercel.app",
  items: registries
}

await fs.writeFile(path.join(process.cwd(), "registry.json"), JSON.stringify(registry, null, 2))

console.info(`  - UI Components: ${uiComponents.length}`)
console.info(`  - Samples: ${samples.length}`)
console.info(`  - Blocks: ${blocks.length}`)
console.info(`  - CSS Utils: ${cssUtils.length}`)
