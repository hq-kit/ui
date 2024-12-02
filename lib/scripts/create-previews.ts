import * as fs from 'fs'
import * as path from 'path'

const baseDir = path.resolve(__dirname, '../../components')
const docsDir = path.join(baseDir, 'docs')
const uiDir = path.join(baseDir, 'ui')
const outputMapFilePath = path.resolve(docsDir, 'generated/previews.ts')
const jsonOutputFilePath = path.resolve(docsDir, 'generated/previews.json')

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    // Exclude directories: 'outside' in base directory
    // if (dirPath.endsWith('outside')) {
    //     return arrayOfFiles // Skip these directories and their contents
    // }

    const files = fs.readdirSync(dirPath)
    files.forEach((file) => {
        const filePath = path.join(dirPath, file)
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
        } else if (file.endsWith('.tsx')) {
            arrayOfFiles.push(filePath)
        }
    })
    return arrayOfFiles
}

const components = [...getAllFiles(docsDir), ...getAllFiles(uiDir)]
    .filter((filePath) => !filePath.includes('/how') && !filePath.includes('/props')) // Exclude specific components
    .reduce(
        (acc, filePath) => {
            const content = fs.readFileSync(filePath, 'utf8') // Read the file content
            const relativePath = path
                .relative(baseDir, filePath)
                .replace(/\\/g, '/')
                .replace('.tsx', '')
            const importPath = `@/components/${relativePath}`
            const key = relativePath.split('/').slice(1).join('/')
            const type = filePath.startsWith(docsDir) ? 'docs' : 'ui' // Determine type based on folder path

            if (
                type === 'docs' &&
                !filePath.includes('layouts') &&
                !filePath.includes('block/components')
            ) {
                // @ts-expect-error no-type
                acc.tsComponents[key] = {
                    component: importPath
                }
            }

            // @ts-expect-error no-type
            acc.jsonComponents[key] = {
                component: importPath,
                raw: content
            }

            return acc
        },
        { tsComponents: {}, jsonComponents: {} }
    )

const previewsContent = `// This file is autogenerated by scripts/create-previews.ts.
// Do not edit this file directly.
import React from 'react';

export const previews: Record<string, { component: React.LazyExoticComponent<() => React.ReactElement> }> = {
${Object.keys(components.tsComponents)
    .map((key) => `"${key}": { component: React.lazy(() => import("@/components/docs/${key}")) },`)
    .join('\n')}
};
`

fs.writeFileSync(outputMapFilePath, previewsContent)
console.log(`Component map generated into ${outputMapFilePath}`)

fs.writeFileSync(jsonOutputFilePath, JSON.stringify(components.jsonComponents, null, 2))
console.log(`Component JSON generated into ${jsonOutputFilePath}`)
