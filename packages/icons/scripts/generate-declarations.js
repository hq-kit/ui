const fs = require('fs')
const path = require('path')

const svgIconsDir = path.join(__dirname, '../svgs')
const iconsDir = path.join(__dirname, '../src')
const outputDir = path.join(__dirname, '../dist')
const outputFile = path.join(outputDir, 'index.d.ts')

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Error reading icons directory:', err)
    return
  }

  const exports = files
    .filter((file) => file.endsWith('.js'))
    .filter((file) => file !== 'index.js')
    .map((file) => {
      const iconName = path.basename(file, '.js')
      const svgName =
        iconName
          .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
          .replace(/([A-Z])([A-Z])/g, '$1-$2') // insert hyphen between uppercase letters
          .replace(/([a-zA-Z])(\d)/g, '$1-$2') // Insert hyphen between letters and numbers
          .toLowerCase() + '.svg'

      const fileContent = fs.readFileSync(path.join(svgIconsDir, svgName), 'utf8').replace(/<svg/, `<svg style="background-color: #fff; border-radius: 2px;"`)

      return `
            /**
             * @preview ![img](data:image/svg+xml;base64,${Buffer.from(fileContent).toString('base64')})
             */
            export declare const ${iconName}: React.FC<React.SVGProps<SVGSVGElement>>;
            /**
             * @preview ![img](data:image/svg+xml;base64,${Buffer.from(fileContent).toString('base64')})
            */
            export declare const Icon${iconName}: React.FC<React.SVGProps<SVGSVGElement>>;`
    })

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const content = ["import React from 'react';", ...exports, 'export declare const index: React.FC<React.SVGProps<SVGSVGElement>>;'].join('\n')

  fs.writeFileSync(outputFile, content, 'utf8')
  console.log(`Generated TypeScript declarations in ${outputFile}`)
})
