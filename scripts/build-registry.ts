import { promises as fs } from 'node:fs'
import { siteConfig } from '@/config/site'
import { libHook } from './registry-lib-hook'
import { samples } from './registry-samples'
import { registryStyles } from './registry-style'
import { uiComponents } from './registry-ui'

const registryContent = {
  name: 'hq-ui',
  homepage: siteConfig.url,
  items: [...libHook, ...uiComponents, ...registryStyles, ...samples]
}

const registryContentJson = JSON.stringify(registryContent)
  .replaceAll(',"registryDependencies":[]', '')
  .replaceAll(',"dependencies":[]', '')

await fs.writeFile('registry.json', registryContentJson)
