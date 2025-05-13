import fs from 'node:fs'
import path from 'node:path'

const baseDir = path.resolve(__dirname, '../../components')
const docsDir = path.join(baseDir, 'docs')
const blocksDir = path.join(docsDir, 'block/examples')
const uiDir = path.join(baseDir, 'ui')

const blocksOutputFilePath = path.resolve(docsDir, 'generated/blocks.ts')

function getBlocks(): string[] {
    const blocks: string[] = []
    const files = fs.readdirSync(blocksDir)
    for (const file of files) {
        blocks.push(file)
    }
    return blocks
}

function getComponentsUsed(content: string): string[] {
    const regex = /'components\/(.*?[^'])'/g
    const components = content.match(regex)

    return Array.from(new Set(components))
}

function getDeps(content: string): string[] {
    const regex = /(?<=from\s+['"])([^'"]+)/g
    const excludes = [
        'react',
        'react-aria-components',
        'hq-icons',
        'tailwind-variants',
        '@/lib/hooks',
        '@/lib/utils',
        '@internationalized/date',
        '@react-aria/collections',
        '@react-aria/i18n',
        '@react-types/overlays',
        '@/components/ui'
    ]
    const replacement = [{ from: 'motion/react', to: 'motion' }]
    const deps = content
        .match(regex)
        ?.filter((dep) => !excludes.includes(dep) && !dep.includes('./') && !dep.includes('layouts'))
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

const blocks = getBlocks()
const components = []

for (const block of blocks) {
    const content = fs.readFileSync(path.join(blocksDir, block), 'utf8')
    const componentsUsed = getComponentsUsed(content)
    const deps = getDeps(content)

    components.push({
        name: block.replace('.tsx', ''),
        components: componentsUsed.map((c) => ({ name: c })) ?? [],
        deps: deps ?? []
    })
}

const writeContent = components
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => JSON.stringify(c))
    .join(',\n    ')
    .replaceAll(',"components":[]', '')
    .replaceAll(',"deps":[]', '')

const writeContentTs = `type Block = {
    name: string;
    deps?: string[];
    components?: Block[];
};

export const blocks: Block[] = [
    ${writeContent}
]`

fs.writeFileSync(blocksOutputFilePath, writeContentTs)
