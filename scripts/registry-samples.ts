import type { RegistryItem } from 'shadcn/schema'
import fs from 'node:fs'
import path from 'node:path'
import { siteConfig } from '@/config/site'
import { checkHooks, checkUtils, getDeps } from '@/scripts/registry-ui'

const baseDir = path.resolve(__dirname, '../components')
const samplesDir = path.join(baseDir, 'samples')

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return walk(fullPath)
    }

    return fullPath.endsWith('.tsx') ? [fullPath] : []
  })
}

const components = walk(samplesDir)
  .filter((file) => !file.includes('preview'))
  .map((file) => {
    return {
      name: path.basename(file, '.tsx'),
      path: path.relative(samplesDir, file)
    }
  })

function getUIComponents(content: string) {
  const regex = /(?<=from\s+['"])([^'"]+)/g
  const components = content.match(regex)

  return Array.from(new Set(components?.filter((c) => c.includes('/ui')).map((c) => c.split('/').pop())))
}

const samplesList: RegistryItem[] = []

for (const component of components) {
  const content = fs.readFileSync(path.join(samplesDir, component.path), 'utf-8')
  const uiComponents = getUIComponents(content).map((c) => `${siteConfig.url}/r/${c}`)
  const deps = getDeps(content)

  if (checkUtils(content)) {
    uiComponents.push('utils')
  }
  if (checkHooks(content)) {
    uiComponents.push('use-mobile')
  }

  samplesList.push({
    name: component.name,
    title: component.name,
    extends: 'none',
    dependencies: deps ?? [],
    registryDependencies: uiComponents,
    type: 'registry:page',
    files: [
      {
        path: `components/samples/${component.path}`,
        type: 'registry:page',
        target: `app/${component.name}/page.tsx`
      }
    ]
  })
}

export const samples = samplesList.sort((a, b) => a.name.localeCompare(b.name)).map((c) => c)
