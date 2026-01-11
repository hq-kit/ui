import fs from 'node:fs'
import path from 'node:path'

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

function getChildComponents(content: string) {
  const regex = /(?<=from\s+['"]\.\/)([^'"]+)/g
  const childrens = content.match(regex)

  return Array.from(new Set(childrens))
}

function getDeps(content: string) {
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
    'recharts/types/shape/Curve'
  ]
  const replacement = [{ from: 'motion/react', to: 'motion' }]
  const deps = content
    .match(regex)
    ?.filter((dep) => !excludes.includes(dep) && !dep.includes('./'))
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

function checkUtils(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  return content.match(regex)?.includes('@/lib/utils')
}

function checkHooks(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  return content.match(regex)?.includes('@/hooks/use-mobile')
}

const components = getComponents()

const componentsList = []
for (const component of components) {
  const content = fs.readFileSync(path.join(uiDir, component), 'utf8')
  const childComponents = getChildComponents(content)
  const deps = getDeps(content)

  if (checkUtils(content)) {
    childComponents.push('utils')
  }
  if (checkHooks(content)) {
    childComponents.push('use-mobile')
  }

  componentsList.push({
    name: component.replace('.tsx', ''),
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

export const uiComponents = componentsList.sort((a, b) => a.name.localeCompare(b.name)).map((c) => c)
