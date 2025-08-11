'use client'

import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import rehypePrettyCode, { type Theme } from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeProps {
    lang?: string | { block?: string; inline?: string }
    code: string
    theme?: Theme | { light: Theme; dark: Theme }
    className?: string
    highlight?: number[] | string[]
    lineNumbers?: boolean
    filename?: string
}

const Code = ({
    lang = 'ts',
    code,
    theme = 'github-dark',
    highlight,
    lineNumbers = true,
    filename,
    className
}: CodeProps) => {
    const [copied, setCopied] = useState<boolean>(false)

    const highlightLine = highlight?.join(',').replaceAll(' ', '')

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    const copyCode = async () => {
        await copyToClipboard(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    const [formattedCode, setFormattedCode] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const processCode = async () => {
            try {
                const file = await unified()
                    .use(remarkParse)
                    .use(remarkRehype, { allowDangerousHtml: true })
                    .use(rehypePrettyCode, {
                        keepBackground: true,
                        theme,
                        defaultLang: lang
                    })
                    .use(rehypeStringify, { allowDangerousHtml: true })
                    .process(
                        `\`\`\`${lang} ${lineNumbers && 'showLineNumbers'} ${filename ? `title="${filename}"` : ''} \{${highlightLine}\}\n${code}\n\`\`\``
                    )
                setFormattedCode(String(file))
            } catch (err) {
                setError('Failed to process code. Please check the configuration.')
                console.error(err)
            }
        }
        processCode().catch(console.error)
    }, [code, theme, lang, highlightLine, filename, lineNumbers])

    if (error) {
        setFormattedCode(error)
    }

    return (
        <div className={cn('relative overflow-hidden rounded-lg', className)}>
            <CopyButton className='absolute top-1 right-1' copied={copied} onPress={copyCode} />
            <style>
                {`pre code[data-line-numbers] { counter-reset: line; } pre code[data-line-numbers] > [data-line]::before { counter-increment: line; content: counter(line); margin-right: 2rem; color: #71717b; display: inline-block; text-align: right; width: 1rem; } pre code[data-line-numbers-max-digits="2"] > [data-line]::before { width: 2rem; } pre code[data-line-numbers-max-digits="3"] > [data-line]::before { width: 3rem; } code, code span { color: var(--shiki-light); background-color: var(--shiki-light-background); } .dark { code, code span { color: var(--shiki-dark); background-color: var(--shiki-dark-background); } } [data-highlighted-line] { background: rgba(200, 200, 255, 0.2) !important; border-left-color: color-mix(in oklab, var(--primary) 80%, transparent) !important; }`}
            </style>
            <section
                className='text-sm **:[code]:*:pr-12 **:[code]:*:pl-3 **:[code]:py-2.5 **:[code]:leading-relaxed **:[figcaption]:bg-foreground **:[figcaption]:p-3 **:[figcaption]:text-muted-foreground **:[pre]:overflow-auto'
                dangerouslySetInnerHTML={{ __html: formattedCode }}
            />
        </div>
    )
}

const CopyButton = ({ copied, className, onPress }: { copied: boolean; className?: string; onPress?: () => void }) => (
    <Button
        aria-label={copied ? 'Copied' : 'Copy'}
        className={className}
        icon
        onPress={onPress}
        size='sm'
        variant='outline'
    >
        <IconCopy
            className={cn('size-4 rotate-0 scale-100 transition-all duration-200', copied && 'rotate-90 scale-0')}
        />
        <IconCheck
            className={cn(
                'absolute size-4 rotate-90 scale-0 transition-all duration-200',
                copied && 'rotate-0 scale-100'
            )}
        />
    </Button>
)

export { Code, CopyButton }
