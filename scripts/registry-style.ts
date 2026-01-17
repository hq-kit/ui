import { getPresetThemeStyles, presets } from '@/lib/themes/presets'

const registryStyle = []

const presetList = Object.keys(presets)
presetList.push('default')

for (const preset of presetList) {
  registryStyle.push({
    name: preset,
    extends: 'none',
    type: 'registry:style',
    cssVars: getPresetThemeStyles(preset),
    css: {
      '@layer base': {
        body: {
          'letter-spacing': 'var(--tracking-normal)'
        }
      }
    }
  })
}
export const registryStyles = registryStyle
