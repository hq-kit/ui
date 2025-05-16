import fs from 'node:fs'
import path from 'node:path'

const blocksDir = path.join(__dirname, '../../app/block')
const uiDir = path.join(__dirname, '../../components/ui')
const docsDir = path.join(__dirname, '../../components/docs')
const libDir = path.join(__dirname, '../../lib')

const blocksOutputFilePath = path.resolve(docsDir, 'generated/blocks.ts')
const blocksOutputFilePathJson = path.resolve(docsDir, 'generated/blocks.json')
const blockListOutputFilePath = path.resolve(docsDir, 'generated/list-blocks.ts')

const slugify = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
const titleCase = (str: string) =>
    str
        .replace(/-/g, ' ')
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

function getBlocks(): string[] {
    const blocks: string[] = []
    const files = fs.readdirSync(blocksDir)
    for (const file of files) {
        const filesInFolder = fs.readdirSync(path.join(blocksDir, file))
        for (const folderFile of filesInFolder) {
            if (folderFile === 'page.tsx') {
                blocks.push(path.join(file, folderFile))
            } else {
                const filesInSubFolder = fs.readdirSync(path.join(blocksDir, file, folderFile))
                for (const subFolderFile of filesInSubFolder) {
                    if (subFolderFile === 'page.tsx') {
                        blocks.push(path.join(file, folderFile, subFolderFile))
                    } else {
                        const filesInSubSubFolder = fs.readdirSync(
                            path.join(blocksDir, file, folderFile, subFolderFile)
                        )
                        for (const subSubFolderFile of filesInSubSubFolder) {
                            if (subSubFolderFile === 'page.tsx') {
                                blocks.push(path.join(file, folderFile, subFolderFile, subSubFolderFile))
                            }
                        }
                    }
                }
            }
        }
    }
    return blocks.filter((b) => !b.includes('...'))
}

function extractBlockContent(block: string) {
    const blockPath = path.join(blocksDir, block)
    return fs.readFileSync(blockPath, 'utf-8')
}

function getUIComponentsUsed(block: string): (string | undefined)[] {
    const content = extractBlockContent(block)
    const regex = /import\s+{([^}]+)}\s+from\s+'@\/components\/ui'/g
    const uiComponents = Array.from(
        new Set(
            (content.match(regex) || []).flatMap((match: string) =>
                match
                    ?.match(/{([^}]+)}/)?.[1]
                    .split(',')
                    .map(
                        (comp: string) =>
                            `${slugify(comp.trim()).replaceAll('-style', '').replaceAll('-content', '')}.tsx`
                    )
            )
        )
    )
    return uiComponents.filter((c) => fs.existsSync(path.join(uiDir, c!)))
}

const blocks = getBlocks()

type ListBlock = {
    slug: string
    uiComponents: (string | undefined)[]
    components: (string | undefined)[]
}

type RawFiles = { [key: string]: string }

const listBlocks: ListBlock[] = []
const rawFiles: RawFiles = {}

for (const block of blocks) {
    const slug = block.replace('/page.tsx', '')

    listBlocks.push({
        slug,
        uiComponents: [],
        components: []
    })

    const blockDir = path.join(blocksDir, slug)
    const UIComponents: (string | undefined)[] = []
    if (fs.existsSync(blockDir)) {
        const files = fs.readdirSync(blockDir)
        for (const file of files) {
            if (file !== 'page.tsx' && file !== 'layout.tsx') {
                listBlocks.find((b) => b.slug === slug)?.components.push(file)
            }
            rawFiles[`${slug}/${file}`] = fs
                .readFileSync(path.join(blockDir, file), 'utf-8')
                .replaceAll('./', '@/components/')

            UIComponents.push(...getUIComponentsUsed(`${slug}/${file}`))
        }
    }
    listBlocks.find((b) => b.slug === slug)?.uiComponents.push(...Array.from(new Set(UIComponents)))
}

rawFiles['utils.ts'] = fs.readFileSync(path.join(libDir, 'utils/index.ts'), 'utf-8')
rawFiles['hooks.ts'] = fs.readFileSync(path.join(libDir, 'hooks/index.ts'), 'utf-8')
rawFiles['globals.css'] = fs.readFileSync(path.join(libDir, 'styles/default.css'), 'utf-8')

type List = {
    section: string
    category: string
    blocks: ListBlock[]
}

const list: List[] = []
for (const block of listBlocks) {
    const section = block.slug.split('/')[0]
    const category = block.slug.split('/')[1]
    if (!list.find((l) => l.section === section && l.category === category)) {
        list.push({
            section,
            category,
            blocks: []
        })
    }
    list.find((l) => l.section === section && l.category === category)?.blocks.push(block)
}

fs.writeFileSync(blocksOutputFilePath, `export const blocks = ${JSON.stringify(listBlocks, null, 2)}`)
fs.writeFileSync(blocksOutputFilePathJson, JSON.stringify(rawFiles, null, 2))
fs.writeFileSync(blockListOutputFilePath, `export const listBlocks = ${JSON.stringify(list, null, 2)}`)
