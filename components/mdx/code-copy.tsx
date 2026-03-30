'use client'

import { useState } from 'react'
import { copyToClipboard } from '@/lib/modifiers'
import { CopyButton } from './copy-button'

interface CodeCopyProps {
  code: string
  className?: string
}

export const CodeCopy = ({ code, className }: CodeCopyProps) => {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await copyToClipboard(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return <CopyButton className={className} isCopied={copied} onPress={copyCode} />
}
