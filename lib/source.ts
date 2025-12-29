import { loader } from 'fumadocs-core/source'
import { docs } from '#docs/server'

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource()
})
