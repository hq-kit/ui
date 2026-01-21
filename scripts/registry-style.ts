import type { RegistryItem } from 'shadcn/schema'
import { getPresetThemeStyles, presets } from '@/lib/themes/presets'

const registryStyle: RegistryItem[] = []

const presetList = Object.keys(presets)
presetList.push('default')

for (const preset of presetList) {
  registryStyle.push({
    name: preset,
    title: preset,
    extends: 'none',
    type: 'registry:style',
    dependencies: ['tw-animate-css'],
    cssVars: getPresetThemeStyles(preset),
    css: {
      '@import "tw-animate-css"': {},
      '@layer base': {
        body: {
          'letter-spacing': 'var(--tracking-normal)'
        }
      }
    }
  })
}

export const registryStyles = registryStyle
