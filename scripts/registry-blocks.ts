import type { RegistryItem } from "shadcn/schema"
import fs from "node:fs"
import path from "node:path"
import { siteConfig } from "@/config/site"
import { checkHooks, checkUtils, getDeps } from "@/scripts/registry-ui"

const baseDir = path.resolve(__dirname, "../components")
const blocksDir = path.join(baseDir, "blocks")

function getBlocks() {
  const blocks: string[] = []
  const directories = fs.readdirSync(blocksDir)
  for (const directory of directories) blocks.push(directory)
  return blocks
}

function getPageFiles(block: string) {
  const files: string[] = []
  fs.readdirSync(path.join(blocksDir, block)).forEach((file) => {
    if (file.endsWith(".tsx")) files.push(file)
  })
  return files
}

function getComponents(block: string) {
  const files: string[] = []
  fs.readdirSync(path.join(blocksDir, block, "components")).forEach((file) => {
    files.push(path.join(file))
  })
  return files
}

// Get UI Components each Block
export function getUiComponents(content: string) {
  const regex = /@\/components\/ui\/([a-zA-Z0-9_-]+)/g
  const childrens = [...content.matchAll(regex)].map((match) => match[1])
  return Array.from(new Set(childrens))
}

const blocksList: RegistryItem[] = []

for (const block of getBlocks()) {
  const regDeps: string[] = []
  const deps: string[] = []
  const files: RegistryItem["files"] = []

  getPageFiles(block).forEach((file) => {
    const content = fs.readFileSync(path.join(blocksDir, block, file), "utf8")
    regDeps.push(...getUiComponents(content).map((c) => `${siteConfig.url}/r/${c}`))
    deps.push(...getDeps(content))
    if (checkUtils(content)) {
      regDeps.push(`${siteConfig.url}/r/utils`)
    }
    if (checkHooks(content)) {
      regDeps.push(`${siteConfig.url}/r/use-mobile`)
    }

    files.push({
      path: `components/blocks/${block}/${file}`,
      type: "registry:page",
      target: `app/dashboard/${file}`
    })
  })

  getComponents(block).forEach((file) => {
    const content = fs.readFileSync(path.join(blocksDir, block, "components", file), "utf8")
    regDeps.push(...getUiComponents(content).map((c) => `${siteConfig.url}/r/${c}`))
    deps.push(...getDeps(content))
    if (checkUtils(content)) {
      regDeps.push(`${siteConfig.url}/r/utils`)
    }
    if (checkHooks(content)) {
      regDeps.push(`${siteConfig.url}/r/use-mobile`)
    }

    files.push({
      path: `components/blocks/${block}/components/${file}`,
      type: "registry:component"
    })
  })

  blocksList.push({
    name: block,
    type: "registry:block",
    dependencies: Array.from(new Set(deps)) ?? [],
    registryDependencies: Array.from(new Set(regDeps)) ?? [],
    files
  })
}

export const blocks = blocksList.sort((a, b) => a.name.localeCompare(b.name)).map((c) => c)
