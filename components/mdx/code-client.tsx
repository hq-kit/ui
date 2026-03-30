'use client'

import { cn } from '@/lib/utils'
import { CodeCopy } from './code-copy'

export interface CodeClientProps {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const Code = ({ code, className, copy = false, ...props }: CodeClientProps) => {
  const formattedCode = `<pre><code>${escapeHtml(code)}</code></pre>`
  return (
    <div className='relative w-full'>
      <div
        {...props}
        className={cn(
          'not-prose relative my-4 w-full max-w-none overflow-hidden rounded-lg text-sm/6 shadow-sm',
          '*:[pre]:rounded-lg *:[pre]:py-2',
          '**:[pre]:max-h-96 **:[pre]:overflow-auto',
          'scrollbar-fade',
          className
        )}
        dangerouslySetInnerHTML={{ __html: formattedCode }}
      />
      {copy && <CodeCopy className='absolute top-1.5 right-1.5 z-10 bg-card' code={code} />}
    </div>
  )
}
