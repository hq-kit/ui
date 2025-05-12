'use client'

import { useEffect, useState } from 'react'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import { CopyButton } from '@/components/mdx/copy-button'
import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/lib/utils/modifiers'

export function Code({
    lang = 'tsx',
    code,
    keepBackground = true,
    className
}: {
    lang?: string
    code: string
    keepBackground?: boolean
    className?: string
}) {
    const [copied, setCopied] = useState<boolean>(false)

    const copyCode = async () => {
        await copyToClipboard(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className={cn('relative overflow-hidden rounded-lg border', className)}>
            <div className={cn('not-prose absolute top-2 right-2 bottom-auto z-20 flex gap-1.5')}>
                <CopyButton isCopied={copied} onPress={copyCode} />
            </div>
            <div className='no-scrollbar [&_pre]:no-scrollbar [&_pre]:!my-0 [&_pre]:!border-0 [&_pre]:max-h-[32rem] [&_pre]:overflow-auto [&_pre]:pb-[100px]'>
                <CodeHighlighter keepBackground={keepBackground} lang={lang} code={code} />
            </div>
        </div>
    )
}

interface CodeProps {
    lang?: string
    code: string
    keepBackground?: boolean
}

export const CodeHighlighter = ({ lang = 'tsx', code, keepBackground }: CodeProps) => {
    const [formattedCode, setFormattedCode] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const processCode = async () => {
            try {
                const file = await unified()
                    .use(remarkParse)
                    .use(remarkRehype, { allowDangerousHtml: true })
                    .use(rehypePrettyCode, {
                        keepBackground: keepBackground,
                        theme: 'github-dark-default',
                        defaultLang: {
                            block: lang,
                            inline: 'plaintext'
                        }
                    })
                    .use(rehypeStringify, { allowDangerousHtml: true })
                    .process(`\`\`\`${lang}\n${code}\n\`\`\``)
                setFormattedCode(String(file))
            } catch (err) {
                setError('Failed to process code. Please check the configuration.')
                console.error(err)
            }
        }
        processCode()
    }, [code, lang, keepBackground])

    if (error) {
        return <p>Error: {error}</p>
    }

    return <div className='!font-mono' dangerouslySetInnerHTML={{ __html: formattedCode }} />
}
