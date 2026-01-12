import fs from 'node:fs'
import path from 'node:path'
import { libHook } from './registry-lib-hook'
import { uiComponents } from './registry-ui'
import {registryStyles} from "./registry-style";

const registryFilePath = path.resolve(__dirname, '../registry.json')

const registryContent = {
  name: 'hq-ui',
  homepage: process.env.NEXT_PUBLIC_APP_URL,
  items: [...libHook, ...uiComponents, ...registryStyles]
}

const registryContentJson = JSON.stringify(registryContent)
  .replaceAll(',"registryDependencies":[]', '')
  .replaceAll(',"dependencies":[]', '')

fs.writeFileSync(registryFilePath, registryContentJson)
