'use client'
import { Description, Menu, toast } from '@/components/ui'
import { cn } from '@/lib/utils'
import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from 'hq-icons'
import { useState } from 'react'
import { CopyButton } from './copy-button'

interface CLIProps {
    items?: string | string[]
    command: 'init' | 'add' | 'install'
    message?: string
    noMessage?: boolean
    className?: string
}

export function CLI({ items, message, command = 'init', noMessage, className }: CLIProps) {
    const getCommandLine = (pm: string) => {
        if (command === 'add') {
            return ` hq-kit add ${Array.isArray(items) ? items.join(' ') : items}`
        }
        if (command === 'install') {
            return ` ${pm === 'npm' ? 'i' : 'add'} ${Array.isArray(items) ? items.join(' ') : items}`
        }
        return ' hq-kit init'
    }

    const getPm = (pm: string) => {
        if (command === 'init' || command === 'add') {
            switch (pm) {
                case 'npm':
                    return 'npx'
                case 'pnpm':
                    return 'pnpm dlx'
                case 'yarn':
                    return 'yarn'
                case 'bun':
                    return 'bunx'
            }
        }
        return pm
    }

    const [pm, setPm] = useState('npm')

    const [copied, setCopied] = useState(false)

    const handleCopy = (pm: string) => {
        setPm(pm)
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(`${getPm(pm)} ${getCommandLine(pm)}`).then(() => setCopied(true))
            setTimeout(() => setCopied(false), 2000)
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
                    '!font-mono mt-2 flex h-10 w-full items-center justify-between gap-4 rounded-lg border bg-[#0d1117] p-2 text-sm text-zinc-200 dark:bg-[#0d1117]',
                    className
                )}
            >
                <div>
                    <span className='ml-1 text-[#ffa657]'>{getPm(pm)}</span>
                    <span className='text-[#a5d6ff]'>{getCommandLine(pm)}</span>
                </div>
                <Menu>
                    <CopyButton isCopied={copied} />
                    <Menu.Content placement='bottom end'>
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
