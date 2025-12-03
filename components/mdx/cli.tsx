'use client'

import { useState } from 'react'
import { Text } from 'react-aria-components'
import { toast } from 'sonner'
import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from '@/components/icons'
import { CopyButton, DropdownMenu } from '@/components/ui'
import { cn } from '@/lib/utils'

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
        <section className='relative my-2 space-y-2'>
            {!noMessage && (
                <Text className='max-w-none text-base'>
                    {message ? message : 'In the terminal, run the following command to begin:'}
                </Text>
            )}
            <div
                className={cn(
                    'no-scrollbar mt-2 flex h-10 w-full items-center justify-between gap-2 overflow-x-auto overflow-y-hidden rounded-lg border bg-[#0d1117] py-2 font-mono! text-sm text-zinc-200 **:whitespace-nowrap dark:bg-[#0d1117]',
                    className
                )}
            >
                <div>
                    <span className='ml-3 text-[#ffa657]'>{getPm(pm)}</span>
                    <span className='mr-12 text-[#a5d6ff]'>{getCommandLine(pm)}</span>
                </div>
                <div className='absolute right-1 z-10'>
                    <DropdownMenu>
                        <CopyButton copied={copied} />
                        <DropdownMenu.Content placement='left top'>
                            <DropdownMenu.Item onAction={() => handleCopy('npm')}>
                                <IconBrandNpm />
                                <DropdownMenu.Label>NPM</DropdownMenu.Label>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onAction={() => handleCopy('bun')}>
                                <IconBrandBun />
                                <DropdownMenu.Label>Bun</DropdownMenu.Label>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onAction={() => handleCopy('yarn')}>
                                <IconBrandYarn />
                                <DropdownMenu.Label>Yarn</DropdownMenu.Label>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item onAction={() => handleCopy('pnpm')}>
                                <IconBrandPnpm />
                                <DropdownMenu.Label>PNPM</DropdownMenu.Label>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                </div>
            </div>
        </section>
    )
}
