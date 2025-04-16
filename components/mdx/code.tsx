'use client'

import React from 'react'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { copyToClipboard } from 'usemods'

import { CopyButton } from '@/components/mdx/copy-button'
import { cn } from '@/lib/utils'

export default function Code({
    lang = 'tsx',
    code,
    copyButton,
    className
}: {
    lang?: string
    code: string
    copyButton?: boolean
    className?: string
}) {
    const [copied, setCopied] = React.useState<boolean>(false)

    const copyCode = () => {
        copyToClipboard(code)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
            .catch((err: Error) => {
                console.error('Copy failed: ', err)
            })
    }

    return (
        <div className={cn('relative overflow-hidden rounded-lg border', className)}>
            {copyButton && (
                <div className={cn('not-prose absolute top-2 right-2 bottom-auto z-20 flex gap-1.5')}>
                    <CopyButton isCopied={copied} onPress={copyCode} />
                </div>
            )}
            <div className='no-scrollbar [&_pre]:no-scrollbar [&_pre]:!my-0 [&_pre]:max-h-[32rem] [&_pre]:overflow-auto [&_pre]:!border-0 [&_pre]:pb-[100px]'>
                <CodeHighlighter lang={lang} code={code} />
            </div>
        </div>
    )
}

interface CodeProps {
    lang?: string
    code: string
}

export const CodeHighlighter = ({ lang = 'tsx', code }: CodeProps) => {
    const [formattedCode, setFormattedCode] = React.useState('')
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const processCode = async () => {
            try {
                const file = await unified()
                    .use(remarkParse)
                    .use(remarkRehype, { allowDangerousHtml: true })
                    .use(rehypePrettyCode, {
                        keepBackground: true,
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
    }, [code, lang])

    if (error) {
        return <p>Error: {error}</p>
    }

    return <div className='!font-mono bg-gradient-dark' dangerouslySetInnerHTML={{ __html: formattedCode }} />
}
