import { promises as fs } from "node:fs"
import path from "node:path"
import { PRESET_STYLES } from "shadcn/preset"
import { createStyleMap } from "shadcn/utils"

function getStyleFromStyleName(styleName: string) {
  const parts = styleName.split("-")
  return parts.length > 1 ? parts.slice(1).join("-") : styleName
}

const styleMapCache = new Map<string, Record<string, string>>()

async function getStyleMap(styleName: string) {
  const style = getStyleFromStyleName(styleName)

  if (styleMapCache.has(style)) {
    return styleMapCache.get(style)!
  }

  try {
    const cssPath = path.join(process.cwd(), `lib/styles/style-${style}.css`)
    const css = await fs.readFile(cssPath, "utf-8")
    const styleMap = createStyleMap(css)

    styleMapCache.set(style, styleMap)
    return styleMap
  } catch (error) {
    console.error(`Failed to load style: ${style}`, error)
    return {}
  }
}

await Promise.all(Object.values(PRESET_STYLES).map((style) => getStyleMap(style)))

await fs
  .writeFile(
    path.join(process.cwd(), "lib/styles/style-map.json"),
    JSON.stringify(Object.fromEntries(styleMapCache), null, 2)
  )
  .finally(() => console.info(`✓ Generated style-map`))
