import fs from 'node:fs'
import { libHook } from './registry-lib-hook'
import { samples } from './registry-samples'
import { registryStyles } from './registry-style'
import { uiComponents } from './registry-ui'

const registryContent = {
  name: 'hq-ui',
  homepage: process.env.NEXT_PUBLIC_APP_URL,
  items: [...libHook, ...uiComponents, ...registryStyles, ...samples]
}

const registryContentJson = JSON.stringify(registryContent)
  .replaceAll(',"registryDependencies":[]', '')
  .replaceAll(',"dependencies":[]', '')

fs.writeFileSync('registry.json', registryContentJson)
