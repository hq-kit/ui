'use client'

import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { CodeCopy } from './code-copy'

export interface CodeClientProps {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

const cache = new Map<string, string>()

export const Code = ({ code, lang = 'tsx', className, copy = false, ...props }: CodeClientProps) => {
  const [formattedCode, setFormattedCode] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const cacheKey = useMemo(() => `${lang}::${code}`, [code, lang])

  useEffect(() => {
    const cached = cache.get(cacheKey)
    if (cached) {
      setFormattedCode(cached)
      return
    }

    let cancelled = false
    const run = async () => {
      setIsLoading(true)
      try {
        const { codeToHtml } = await import('shiki')
        const html = String(
          await codeToHtml(code, {
            lang,
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
        if (cancelled) return
        cache.set(cacheKey, html)
        setFormattedCode(html)
      } catch {
        if (cancelled) return
        setError('Failed to process code. Please check the configuration.')
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run)
      return () => {
        cancelled = true
        window.cancelIdleCallback(id)
      }
    }

    const id = window.setTimeout(run, 0)
    return () => {
      cancelled = true
      window.clearTimeout(id)
    }
  }, [cacheKey, code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className='relative w-full'>
      {isLoading && !formattedCode ? (
        <div className='h-12 w-full animate-pulse rounded-lg border bg-muted' />
      ) : (
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
      )}
      {copy && <CodeCopy className='absolute top-1.5 right-1.5 z-10 bg-card' code={code} />}
    </div>
  )
}
