import { execSync } from "node:child_process"
import { promises as fs } from "node:fs"
import path from "node:path"
import { PRESET_STYLES } from "shadcn/preset"
import { siteConfig } from "@/config/site"
import { blocks } from "@/scripts/registry-blocks"
import { registryCssUtils } from "@/scripts/registry-css-utils"
import { samples } from "@/scripts/registry-samples"
import { libHook } from "./registry-lib-hook"
import { registryStyles } from "./registry-style"
import { uiComponents } from "./registry-ui"

const registryContent = {
  name: "hq-ui",
  homepage: siteConfig.url,
  items: [...libHook, ...uiComponents, ...registryStyles, ...samples, ...registryCssUtils, ...blocks]
}

const registryContentJson = JSON.stringify(registryContent)
  .replaceAll(',"registryDependencies":[]', "")
  .replaceAll(',"dependencies":[]', "")

await fs.writeFile("registry.json", registryContentJson)

function replaceUrls<T>(data: T, style: string): T {
  const target = `${siteConfig.url}/r/`
  const replacer = `${siteConfig.url}/r/styles/${style}/`

  if (typeof data === "string") {
    return data.replaceAll(target, replacer).replaceAll("components/ui/", `registries/ui/${style}/`) as T
  }

  if (Array.isArray(data)) {
    return data.map((item) => replaceUrls(item, style)) as T
  }

  if (data !== null && typeof data === "object") {
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, replaceUrls(value, style)])) as T
  }

  return data
}

const sourceData = JSON.parse(await fs.readFile(path.join(__dirname, "../registry.json"), "utf-8"))

for (const style of PRESET_STYLES) {
  const updatedData = replaceUrls(sourceData, style)
  await fs.writeFile(path.join(__dirname, `../registry-${style}.json`), JSON.stringify(updatedData, null, 2), "utf-8")
  console.info(`Created ${style}.json`)
  execSync(`npx shadcn build registry-${style}.json --output ./public/r/styles/${style}`, {
    stdio: "inherit"
  })
}

for (const style of PRESET_STYLES) {
  await fs.rm(path.join(__dirname, `../registry-${style}.json`))
}
