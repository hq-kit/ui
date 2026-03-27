import { promises as fs } from 'node:fs'
import path from 'node:path'

export interface CollectionComponent {
  title: string
  slug: string
  order?: number
}

export interface Component {
  section: string
  children: {
    subsection: string
    children: CollectionComponent[]
  }[]
}

export type SubSection = {
  id: number
  subsection: string
  children: CollectionComponent[]
}

export type Grouped =
  | {
      id: number
      section: string
      children: CollectionComponent[]
    }
  | {
      id: number
      section: string
      children: SubSection[]
    }

const sectionOrder = ['getting-started', 'framework-guides', 'components']

async function getFrontmatterOrder(filePath: string): Promise<number> {
  const raw = await fs.readFile(filePath, 'utf-8')

  const match = raw.match(/---\n([\s\S]*?)\n---/)
  if (!match) return 999 // fallback kalau tidak ada order

  const yaml = match[1]

  for (const line of yaml.split('\n')) {
    const [key, value] = line.split(':').map((s) => s.trim())
    if (key === 'order') return Number(value)
  }

  return 999
}

async function walk(dir: string, basePath: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = await walk(fullPath, basePath)
      files.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(path.relative(basePath, fullPath))
    }
  }

  return files
}

const specialCases: Record<string, string> = {
  cli: 'CLI',
  'next-js': 'Next.js',
  'inertia-js': 'Inertia.js',
  'mcp-server': 'MCP Server',
  'input-otp': 'Input OTP'
}

function titleize(name: string): string {
  if (specialCases[name]) return specialCases[name]
  return name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

async function generate() {
  const basePath = path.join(process.cwd(), 'content/docs')
  const files = await walk(basePath, basePath)

  const normalGroups: Record<string, CollectionComponent[]> = {}
  const componentSubGroups: Record<string, CollectionComponent[]> = {}

  for (const file of files) {
    const parts = file.split(path.sep)
    const section = String(parts[0]).toLowerCase()
    const name = path.basename(file, '.mdx')
    const slug = `/docs/${file.replace(/\.mdx$/, '').replace(/\\/g, '/')}`
    const title = titleize(name)
    const fullPath = path.join(basePath, file)
    const order = await getFrontmatterOrder(fullPath)

    if (section === 'components') {
      const subsection = parts[1]
      const key = String(subsection).toLowerCase()
      if (!componentSubGroups[key]) componentSubGroups[key] = []

      componentSubGroups[key].push({ slug, title, order })
    } else {
      if (!normalGroups[section]) normalGroups[section] = []
      normalGroups[section].push({ slug, title, order })
    }
  }

  const result: Grouped[] = sectionOrder.map((section, index) => {
    if (section === 'components') {
      const children: SubSection[] = Object.entries(componentSubGroups)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([sub, items], subIndex) => ({
          id: subIndex + 1,
          subsection: titleize(sub),
          children: items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title))
        }))

      return {
        id: index + 1,
        section: titleize(section),
        children
      }
    }

    if (section === 'getting-started') {
      if (!normalGroups['getting-started']) normalGroups['getting-started'] = []
      normalGroups['getting-started'].push({
        slug: '/llms.txt',
        title: 'LLMs',
        order: 999
      })
    }

    return {
      id: index + 1,
      section: titleize(section),
      children: (normalGroups[section] ?? []).sort(
        (a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title)
      )
    }
  })

  await fs.writeFile('components-search.json', JSON.stringify(result, null, 2))
}

generate()
