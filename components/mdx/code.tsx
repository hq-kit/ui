'use client'

import { useEffect, useState } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { transform } from 'sucrase'
import { unified } from 'unified'
import { FileIcon } from '@/components/mdx/file-icon'
import { Button, CopyButton, Tooltip } from '@/components/ui'
import { cn } from '@/lib/utils'
import { copyToClipboard } from '@/lib/utils/modifiers'

export function Code({
    lang = 'tsx',
    code,
    filename,
    keepBackground = false,
    withoutSwitcher = false,
    className
}: {
    lang?: string
    code: string
    filename?: string
    keepBackground?: boolean
    withoutSwitcher?: boolean
    className?: string
}) {
    const [copied, setCopied] = useState<boolean>(false)

    const [isTs, setIsTs] = useState<boolean>(true)

    const copyCode = async () => {
        await copyToClipboard(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className={cn('relative overflow-hidden rounded-lg border', className)}>
            <div className={cn('flex items-center justify-between gap-1.5 bg-accent p-1 text-accent-foreground')}>
                <div className='flex items-center gap-2 pl-2'>
                    <FileIcon lang={lang} />
                    {filename && <span className='font-medium font-mono text-sm'>{filename}</span>}
                </div>
                <div className='flex items-center gap-1.5'>
                    {!withoutSwitcher && (
                        <Tooltip>
                            <Button icon onPress={() => setIsTs(!isTs)} size='sm' variant='ghost'>
                                <FileIcon lang={isTs ? 'ts' : 'js'} />
                            </Button>
                            <Tooltip.Content isInverse>
                                {isTs ? 'Switch to JavaScript' : 'Switch to TypeScript'}
                            </Tooltip.Content>
                        </Tooltip>
                    )}
                    <CopyButton copied={copied} onPress={copyCode} />
                </div>
            </div>
            <div className='no-scrollbar max-h-96 max-w-full overflow-auto bg-[#0d1117]'>
                <CodeHighlighter
                    code={
                        isTs
                            ? code
                            : transform(code, {
                                  transforms: ['typescript', 'jsx'],
                                  jsxRuntime: 'preserve',
                                  disableESTransforms: true
                              }).code
                    }
                    keepBackground={keepBackground}
                    lang={lang}
                />
            </div>
        </div>
    )
}

interface CodeProps {
    lang?: string
    code: string
    keepBackground?: boolean
}

export const CodeHighlighter = ({ lang = 'tsx', code, keepBackground = true }: CodeProps) => {
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
                        theme: 'github-dark-dimmed',
                        defaultLang: {
                            block: lang,
                            inline: 'javascript'
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
        processCode().then((r) => r)
    }, [code, lang, keepBackground])

    if (error) {
        return <p>Error: {error}</p>
    }

    return <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
}
