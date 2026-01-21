'use client'

import React, { useState } from 'react'
import { codeToHtml } from 'shiki'
import { copyToClipboard } from '@/lib/modifiers'
import { cn } from '@/lib/utils'
import { CopyButton } from './copy-button'

export interface CodeProps {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

export const Code = ({ lang = 'tsx', code, className, copy = false, ...props }: CodeProps) => {
  const [loading, setLoading] = useState(false)
  const [formattedCode, setFormattedCode] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<boolean>(false)

  const copyCode = async () => {
    await copyToClipboard(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  React.useEffect(() => {
    setLoading(true)
    const processCode = async () => {
      try {
        const file = await codeToHtml(code, {
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
        }).then((r) => r)
        setFormattedCode(String(file))
      } catch (err) {
        setError('Failed to process code. Please check the configuration.')
        console.error(err)
      }
    }
    processCode().then(() => setLoading(false))
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return loading ? (
    <div className='h-12 w-full animate-pulse rounded-lg bg-muted' />
  ) : (
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
      {copy && <CopyButton className='absolute top-1.5 right-1.5 z-10 bg-card' isCopied={copied} onPress={copyCode} />}
    </div>
  )
}
