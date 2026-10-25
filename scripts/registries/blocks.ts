import type { RegistryItem } from "shadcn/schema"
import { promises as fs } from "node:fs"
import path from "node:path"
import { siteConfig } from "@/config/site"
import { checkHooks, getDeps, getUIComponents } from "./utils"

const blocksDir = path.join(process.cwd(), "components", "blocks")

async function getBlocks(): Promise<string[]> {
  try {
    const directories = await fs.readdir(blocksDir, { withFileTypes: true })
    return directories.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name)
  } catch {
    return []
  }
}

async function getPageFiles(block: string): Promise<string[]> {
  try {
    const files = await fs.readdir(path.join(blocksDir, block))
    return files.filter((file) => file.endsWith(".tsx"))
  } catch {
    return []
  }
}

async function getComponents(block: string): Promise<string[]> {
  try {
    const compDir = path.join(blocksDir, block, "components")
    const files = await fs.readdir(compDir)
    return files.filter((file) => file.endsWith(".tsx"))
  } catch {
    return []
  }
}

export async function generateBlocks(): Promise<RegistryItem[]> {
  const blocks: RegistryItem[] = []
  const list = await getBlocks()

  for (const block of list) {
    const regDeps: string[] = []
    const deps: string[] = []
    const files: NonNullable<RegistryItem["files"]> = []

    const pageFiles = await getPageFiles(block)
    for (const file of pageFiles) {
      const filePath = path.join(blocksDir, block, file)
      const content = await fs.readFile(filePath, "utf8")

      deps.push(...getDeps(content))

      for (const c of getUIComponents(content)) {
        regDeps.push(`${siteConfig.url}/r/${c}`)
        await fs.readFile(path.join(process.cwd(), `components/ui/${c}.tsx`), "utf8").then(async (uiContent) => {
          deps.push(...getDeps(uiContent))
        })
      }

      if (checkHooks(content)) {
        regDeps.push(`${siteConfig.url}/r/use-mobile`)
      }

      files.push({
        path: `components/blocks/${block}/${file}`,
        content,
        type: "registry:page",
        target: `app/dashboard/${file}`
      })
    }

    const componentFiles = await getComponents(block)
    for (const file of componentFiles) {
      const filePath = path.join(blocksDir, block, "components", file)
      const content = await fs.readFile(filePath, "utf8")

      deps.push(...getDeps(content))

      getUIComponents(content).forEach((c) => {
        regDeps.push(`${siteConfig.url}/r/${c}`)
      })

      if (checkHooks(content)) {
        regDeps.push(`${siteConfig.url}/r/use-mobile`)
      }

      files.push({
        path: `components/blocks/${block}/components/${file}`,
        content,
        type: "registry:component"
      })
    }

    blocks.push({
      name: block,
      type: "registry:block",
      dependencies: Array.from(new Set(deps)),
      registryDependencies: Array.from(new Set(regDeps)),
      files
    })
  }

  return blocks
}

const blocks = await generateBlocks()

export { blocks }
