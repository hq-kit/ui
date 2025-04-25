import fs from 'node:fs'
import path from 'node:path'

const baseDir = path.resolve(__dirname, '../../components')
const docsDir = path.join(baseDir, 'docs')
const uiDir = path.join(baseDir, 'ui')
const componentListFilePathTs = path.resolve(docsDir, 'generated/components.ts')
const componentListFilePathJson = path.resolve(docsDir, 'generated/components.json')

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
        'react-aria-components',
        'hq-icons',
        'tailwind-variants',
        '@/lib/hooks',
        '@/lib/utils',
        '@internationalized/date',
        '@react-aria/collections',
        '@react-aria/i18n',
        '@react-types/overlays'
    ]
    const replacement = [
        { from: 'motion/react', to: 'motion' },
        { from: '@lexical', to: '@lexical/react' }
    ]
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

const components = getComponents()

const componentsList = []
for (const component of components) {
    const content = fs.readFileSync(path.join(uiDir, component), 'utf8')
    const childComponents = getChildComponents(content)
    const deps = getDeps(content)

    componentsList.push({
        name: component.replace('.tsx', ''),
        children: childComponents.map((c) => ({ name: c })) ?? [],
        deps: deps ?? []
    })
}

const writeContent = componentsList
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => JSON.stringify(c))
    .join(',\n    ')
    .replaceAll(',"children":[]', '')
    .replaceAll(',"deps":[]', '')

const writeContentTs = `type Component = {
    name: string;
    deps?: string[];
    children?: Component[];
};

export const components: Component[] = [
    ${writeContent}
]`

const writeContentJson = `[
    ${writeContent}
]`

fs.writeFileSync(componentListFilePathTs, writeContentTs)
fs.writeFileSync(componentListFilePathJson, writeContentJson)
