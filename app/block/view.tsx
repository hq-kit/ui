'use client'

import type Raws from '@/components/samples/generated/previews.json'
import { previews } from '@/components/samples/generated/previews'

type Raw = keyof typeof Raws
export default function View({ component }: { component: Raw }) {
  const Component = previews[component]?.component
  if (!Component) return null
  return <Component />
}
