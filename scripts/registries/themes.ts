import type { RegistryItem } from "shadcn/schema"
import { promises as fs } from "node:fs"
import path from "node:path"
import { parseCssToThemeProps } from "../generate-theme-presets"

const themesDir = path.join(process.cwd(), "lib", "themes", "presets")

async function getThemes() {
  const themes: string[] = []
  const files = await fs.readdir(themesDir)
  for (const file of files) {
    if (file.endsWith(".css")) {
      themes.push(file)
    }
  }
  return themes
}

const themeRegistries: RegistryItem[] = []

const themes = await getThemes()

for (const theme of themes) {
  const content = await fs.readFile(path.join(themesDir, theme), "utf8").then(parseCssToThemeProps)

  themeRegistries.push({
    name: theme.replace(".css", ""),
    title: theme.replace(".css", ""),
    cssVars: content,
    type: "registry:theme"
  })
}

export { themeRegistries }
