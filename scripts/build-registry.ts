import fs from 'node:fs'
import path from 'node:path'
import { samples } from '@/scripts/registry-samples'
import { libHook } from './registry-lib-hook'
import { registryStyles } from './registry-style'
import { uiComponents } from './registry-ui'

const registryFilePath = path.resolve(__dirname, '../registry.json')

const registryContent = {
  name: 'hq-ui',
  homepage: process.env.NEXT_PUBLIC_APP_URL,
  items: [...libHook, ...uiComponents, ...registryStyles, ...samples]
}

const registryContentJson = JSON.stringify(registryContent)
  .replaceAll(',"registryDependencies":[]', '')
  .replaceAll(',"dependencies":[]', '')

fs.writeFileSync(registryFilePath, registryContentJson)
