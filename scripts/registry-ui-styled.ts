import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { PRESET_STYLES } from "shadcn/preset"
import { siteConfig } from "@/config/site"

function replaceUrls<T>(data: T, style: string): T {
  const target = `${siteConfig.url}/r/`
  const replacer = `${siteConfig.url}/r/${style}/`

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

const sourcePath = path.join(__dirname, "../registry.json")

const sourceData = JSON.parse(fs.readFileSync(sourcePath, "utf-8"))

for (const style of PRESET_STYLES) {
  const updatedData = replaceUrls(sourceData, style)

  fs.writeFileSync(path.join(__dirname, `../components-${style}.json`), JSON.stringify(updatedData, null, 2), "utf-8")

  console.info(`Created ${style}.json`)

  execSync(`npx shadcn build components-${style}.json --output ./public/r/${style}`, { stdio: "inherit" })
}
