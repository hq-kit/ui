import {getPresetThemeStyles, presets} from "@/lib/themes/presets";

const registryStyle = []

const presetList = Object.keys(presets)

for (const preset of presetList) {
  registryStyle.push({
      name: preset,
      type: 'registry:style',
      cssVars: getPresetThemeStyles(preset),
      "css": {
          "@layer base": {
              "body": {
                  "letter-spacing": "var(--tracking-normal)"
              }
          }
      }
  })
}
export const registryStyles = registryStyle

