import type { ThemeStyleProps } from "@/lib/themes/presets"
import fs from "node:fs"
import path from "node:path"

const themesDir = path.resolve(__dirname, "../lib/themes/presets")
const outputFilePath = path.resolve(__dirname, "../lib/themes/generated-themes.ts") // Changed to .ts

export function getThemeFileNames() {
  const themes: string[] = []
  const files = fs.readdirSync(themesDir)
  for (const file of files) {
    if (file.endsWith(".css")) {
      themes.push(file)
    }
  }
  return themes
}

type ParsedTheme = {
  light: ThemeStyleProps
  dark: ThemeStyleProps
}

export function parseCssToThemeProps(cssString: string): ParsedTheme {
  const result: { light: Partial<ThemeStyleProps>; dark: Partial<ThemeStyleProps> } = {
    light: {},
    dark: {}
  }

  const blockRegex = /(:root|\.dark)\s*{([^}]+)}/g
  let blockMatch: RegExpExecArray | null

  // biome-ignore lint/suspicious/noAssignInExpressions: false-positive
  while ((blockMatch = blockRegex.exec(cssString)) !== null) {
    const selector = blockMatch[1]
    const blockContent = blockMatch[2]

    const themeTarget = selector === ":root" ? result.light : result.dark

    const variableRegex = /--([^:]+):\s*([^;]+);/g
    let varMatch: RegExpExecArray | null

    // biome-ignore lint/suspicious/noAssignInExpressions: false-positive
    while ((varMatch = variableRegex.exec(blockContent)) !== null) {
      const key = varMatch[1].trim() as keyof ThemeStyleProps

      themeTarget[key] = varMatch[2].trim()
    }
  }

  return result as ParsedTheme
}

type AllThemes = Record<string, ParsedTheme>

function generateThemes() {
  const themeFileNames = getThemeFileNames()
  const allThemes: AllThemes = {}

  for (const themeFileName of themeFileNames) {
    const themePath = path.join(themesDir, themeFileName)
    const cssString = fs.readFileSync(themePath, "utf8")
    const parsedTheme = parseCssToThemeProps(cssString)
    const themeName = themeFileName.replace(".css", "")
    allThemes[themeName] = parsedTheme
  }

  const tsContent = `import type { ThemeStyleProps } from "./presets";

export type ParsedTheme = {
  light: ThemeStyleProps;
  dark: ThemeStyleProps;
};

export const themes: Record<string, ParsedTheme> = ${JSON.stringify(allThemes, null, 2)};
`

  fs.writeFileSync(outputFilePath, tsContent, "utf8")
  console.info(`Generated ${Object.keys(allThemes).length} themes to ${outputFilePath}`)
}

generateThemes()
