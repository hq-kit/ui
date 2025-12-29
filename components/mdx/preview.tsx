'use client'

import { previews } from '@/components/samples/generated/previews'

export function Preview({ component }: { component: string }) {
  const Component = previews[component].component
  return (
    <div className='group/demo relative my-6 rounded-lg border bg-card shadow-sm'>
      <Component />
    </div>
  )
}
