import { exec } from 'node:child_process'
import path from 'node:path'
import chokidar from 'chokidar'

const contentDir = path.join(__dirname, 'content')
const componentsDir = path.join(__dirname, 'components/ui')
const docsDir = path.join(__dirname, 'components/docs')

const previewScript = path.join(__dirname, 'lib/scripts/list-docs.ts')
const componentListScript = path.join(__dirname, 'lib/scripts/list-component.ts')
const createPreviewsScript = path.join(__dirname, 'lib/scripts/create-previews.ts')

console.info(`Watching for changes in ${contentDir}, ${componentsDir}, and ${docsDir}`)

chokidar
    .watch(contentDir, {
        ignored: /(^|[\/\\])\../, // abaikan file tersembunyi
        persistent: true
    })
    .on('change', (path) => {
        console.info(`File ${path} has been changed, running list docs script...`)
        exec(`bun run ${previewScript}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`)
                return
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`)
                return
            }
            console.info(`stdout: ${stdout}`)
        })
    })

chokidar
    .watch(componentsDir, {
        ignored: /(^|[\/\\])\../, // abaikan file tersembunyi
        persistent: true
    })
    .on('change', (path) => {
        console.info(`File ${path} has been changed, running list components script...`)
        exec(`bun run ${componentListScript}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`)
                return
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`)
                return
            }
            console.info(`stdout: ${stdout}`)
        })
    })

chokidar
    .watch(docsDir, {
        ignored: /(^|[\/\\])\../, // abaikan file tersembunyi
        persistent: true
    })
    .on('change', (path) => {
        console.info(`File ${path} has been changed, running create preview script...`)
        exec(`bun run ${createPreviewsScript}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`)
                return
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`)
                return
            }
            console.info(`stdout: ${stdout}`)
        })
    })
