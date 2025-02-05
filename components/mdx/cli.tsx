'use client'

import React from 'react'

import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from 'hq-icons'
import { toast } from 'sonner'

import { CopyButton } from '@/components/mdx/copy-button'
import { Description, Menu, cn } from '@/components/ui'
import { wait } from '@/lib/utils'

interface CLIProps {
    items?: string | string[]
    command: 'init' | 'add' | 'install'
    message?: string
    noMessage?: boolean
    className?: string
}

export default function CLI({ items, message, command = 'init', noMessage, className }: CLIProps) {
    const getCommand = (pm: string) => {
        const item = typeof items === 'string' ? items : items?.join(' ')
        switch (pm) {
            case 'bun':
                return command === 'init'
                    ? 'bunx hq-kit init'
                    : command === 'add'
                      ? `bunx hq-kit add ${item}`
                      : `bun add ${item}`
            case 'yarn':
                return command === 'init'
                    ? 'npx hq-kit init'
                    : command === 'add'
                      ? `npx hq-kit add ${item}`
                      : `yarn add ${item}`
            case 'pnpm':
                return command === 'init'
                    ? 'pnpm dlx hq-kit init'
                    : command === 'add'
                      ? `pnpm dlx hq-kit add ${item}`
                      : `pnpm add ${item}`
            case 'npm':
            default:
                return command === 'init'
                    ? 'npx hq-kit init'
                    : command === 'add'
                      ? `npx hq-kit add ${item}`
                      : `npm i ${item}`
        }
    }

    const [cli, setCli] = React.useState(getCommand('npm'))
    const [copied, setCopied] = React.useState(false)

    const handleCopy = (pm: string) => {
        setCli(getCommand(pm))
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(getCommand(pm))
            setCopied(true)
            wait(2000).then(() => setCopied(false))
        } else {
            toast.error('Failed to copy to clipboard')
        }
    }

    return (
        <section className='space-y-2'>
            {!noMessage && (
                <Description className='max-w-none text-base'>
                    {message ? message : 'In the terminal, run the following command to begin:'}
                </Description>
            )}
            <div
                className={cn(
                    'text-fg bg-bg flex h-12 w-full items-center justify-between gap-4 rounded-lg border p-3 font-mono text-sm',
                    className
                )}
            >
                {cli}
                <Menu>
                    <CopyButton isCopied={copied} />
                    <Menu.Content showArrow placement='bottom end'>
                        <Menu.Item onAction={() => handleCopy('npm')}>
                            <IconBrandNpm />
                            <Menu.Label>NPM</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('bun')}>
                            <IconBrandBun />
                            <Menu.Label>Bun</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('yarn')}>
                            <IconBrandYarn />
                            <Menu.Label>Yarn</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('pnpm')}>
                            <IconBrandPnpm />
                            <Menu.Label>PNPM</Menu.Label>
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </div>
        </section>
    )
}
