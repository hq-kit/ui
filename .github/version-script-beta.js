// ORIGINALLY FROM CLOUDFLARE WRANGLER:
// https://github.com/cloudflare/wrangler2/blob/main/.github/version-script.js

import { exec } from 'node:child_process'
import fs from 'node:fs'

const pkgJsonPath = 'packages/cli/package.json'
try {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath))
    exec('git rev-parse --short HEAD', (err, stdout) => {
        if (err) {
            process.exit(1)
        }
        pkg.version = `0.0.0-beta.${stdout.trim()}`
        fs.writeFileSync(pkgJsonPath, `${JSON.stringify(pkg, null, '\t')}\n`)
    })
} catch (error) {
    console.error(error)
    process.exit(1)
}
