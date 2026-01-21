import type { RegistryItem } from 'shadcn/schema'
import fs from 'node:fs'
import path from 'node:path'
import { siteConfig } from '@/config/site'

const baseDir = path.resolve(__dirname, '../components')
const uiDir = path.join(baseDir, 'ui')

function getComponents() {
  const components: string[] = []
  const files = fs.readdirSync(uiDir)
  for (const file of files) {
    if (file.endsWith('.tsx')) {
      components.push(file)
    }
  }
  return components
}

export function getChildComponents(content: string) {
  const regex = /(?<=from\s+['"]\.\/)([^'"]+)/g
  const childrens = content.match(regex)

  return Array.from(new Set(childrens))
}

export function getDeps(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  const excludes = [
    'react',
    '@/hooks/use-mobile',
    '@/lib/utils',
    '@internationalized/date',
    '@react-aria/collections',
    '@react-aria/i18n',
    '@react-types/overlays',
    'recharts/types/component/DefaultLegendContent',
    'recharts/types/component/DefaultTooltipContent',
    'recharts/types/component/Tooltip',
    'recharts/types/shape/Curve',
    'next/navigation'
  ]
  const replacement = [{ from: 'motion/react', to: 'motion' }]
  const deps = content
    .match(regex)
    ?.filter((dep) => !excludes.includes(dep) && !dep.includes('./') && !dep.includes('@/components/'))
    .map((dep) => {
      for (const { from, to } of replacement) {
        if (dep.startsWith(from)) {
          return to
        }
      }
      return dep
    })

  return Array.from(new Set(deps))
}

export function checkUtils(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  return content.match(regex)?.includes('@/lib/utils')
}

export function checkHooks(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  return content.match(regex)?.includes('@/hooks/use-mobile')
}

const components = getComponents()

const componentsList: RegistryItem[] = []

for (const component of components) {
  const content = fs.readFileSync(path.join(uiDir, component), 'utf8')
  const childComponents = getChildComponents(content).map((c) => `${siteConfig.url}/r/${c}`)
  const deps = getDeps(content)

  if (checkUtils(content)) {
    childComponents.push('utils')
  }
  if (checkHooks(content)) {
    childComponents.push('use-mobile')
  }

  componentsList.push({
    name: component.replace('.tsx', ''),
    extends: 'none',
    title: component.replace('.tsx', ''),
    type: 'registry:ui',
    dependencies: deps ?? [],
    registryDependencies: childComponents ?? [],
    files: [
      {
        path: `components/ui/${component}`,
        type: 'registry:ui'
      }
    ]
  })
}

componentsList.push({
  name: 'all',
  extends: 'none',
  type: 'registry:ui',
  title: 'All UI Components',
  dependencies: [],
  registryDependencies: components.map((c) => `${siteConfig.url}/r/${c}`)
})

export const uiComponents = componentsList.sort((a, b) => a.name.localeCompare(b.name)).map((c) => c)
