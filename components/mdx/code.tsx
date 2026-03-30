import { codeToHtml } from 'shiki'
import { cn } from '@/lib/utils'
import { CodeCopy } from './code-copy'

export interface CodeProps {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

export const Code = async ({ lang = 'tsx', code, className, copy = false, ...props }: CodeProps) => {
  let formattedCode = ''
  let error: string | null = null

  try {
    formattedCode = String(
      await codeToHtml(code, {
        lang: lang,
        themes: { light: 'catppuccin-latte', dark: 'catppuccin-mocha' },
        transformers: [
          {
            line(node, line) {
              node.properties['data-line'] = line
            },
            span(node, line, col) {
              node.properties['data-token'] = `token:${line}:${col}`
            }
          }
        ]
      })
    )
  } catch {
    error = 'Failed to process code. Please check the configuration.'
  }

  if (error) {
    return <p>Error: {error}</p>
  }

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
