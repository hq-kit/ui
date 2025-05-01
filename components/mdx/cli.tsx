'use client'

import { useState } from 'react'

import { Description, Menu, toast } from '@/components/ui'
import { cn } from '@/lib/utils'
import { CopyButton } from './copy-button'

interface CLIProps {
    items?: string | string[]
    command: 'init' | 'add' | 'install'
    message?: string
    noMessage?: boolean
    className?: string
}

export function CLI({ items, message, command = 'init', noMessage, className }: CLIProps) {
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
            default:
                return command === 'init'
                    ? 'npx hq-kit init'
                    : command === 'add'
                      ? `npx hq-kit add ${item}`
                      : `npm i ${item}`
        }
    }

    const [cli, setCli] = useState(getCommand('npm'))
    const [copied, setCopied] = useState(false)

    const handleCopy = (pm: string) => {
        setCli(getCommand(pm))
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(getCommand(pm)).then(() => setCopied(true))
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
                    '!font-mono mt-2 flex h-12 w-full items-center justify-between gap-4 rounded-lg border bg-[#0d1117] p-3 text-sm text-zinc-200 dark:bg-[#0d1117]',
                    className
                )}
            >
                {cli}
                <Menu>
                    <CopyButton isCopied={copied} />
                    <Menu.Content placement='bottom end' className='**:[svg]:mr-2'>
                        <Menu.Item onAction={() => handleCopy('npm')}>
                            <NPMIcon />
                            <Menu.Label className='!text-[#c12127]'>NPM</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('bun')}>
                            <BunIcon />
                            <Menu.Label className='!text-zinc-500'>Bun</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('yarn')}>
                            <YarnIcon />
                            <Menu.Label className='!text-[#2188b6]'>Yarn</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('pnpm')}>
                            <PNPMIcon />
                            <Menu.Label className='!text-[#f9ad00]'>PNPM</Menu.Label>
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </div>
        </section>
    )
}

const NPMIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <path fill='#c12127' d='M2 2h28v28H2' />
        <path fill='#fff' d='M7.25 7.25h17.5v17.5h-3.5v-14H16v14H7.25' />
    </svg>
)

const YarnIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <path
            fill='#2188b6'
            d='M28.208 24.409a10.5 10.5 0 0 0-3.959 1.822a23.7 23.7 0 0 1-5.835 2.642a1.63 1.63 0 0 1-.983.55a62 62 0 0 1-6.447.577c-1.163.009-1.876-.3-2.074-.776a1.573 1.573 0 0 1 .866-2.074a4 4 0 0 1-.514-.379c-.171-.171-.352-.514-.406-.388c-.225.55-.343 1.894-.947 2.5c-.83.839-2.4.559-3.328.072c-1.019-.541.072-1.813.072-1.813a.73.73 0 0 1-.992-.343a4.85 4.85 0 0 1-.667-2.949a5.37 5.37 0 0 1 1.749-2.895a9.3 9.3 0 0 1 .658-4.4a10.45 10.45 0 0 1 3.165-3.661S6.628 10.747 7.35 8.817c.469-1.262.658-1.253.812-1.308a3.6 3.6 0 0 0 1.452-.857a5.27 5.27 0 0 1 4.41-1.7S15.2 1.4 16.277 2.09a18.4 18.4 0 0 1 1.533 2.886s1.281-.748 1.425-.469a11.33 11.33 0 0 1 .523 6.132a14 14 0 0 1-2.6 5.411c-.135.225 1.551.938 2.615 3.887c.983 2.7.108 4.96.262 5.212c.027.045.036.063.036.063s1.127.09 3.391-1.308a8.5 8.5 0 0 1 4.277-1.604a1.081 1.081 0 0 1 .469 2.11Z'
        />
    </svg>
)
const BunIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <path
            fill='#fbf0df'
            d='M29 17c0 5.65-5.82 10.23-13 10.23S3 22.61 3 17c0-3.5 2.24-6.6 5.66-8.44S14.21 4.81 16 4.81s3.32 1.54 7.34 3.71C26.76 10.36 29 13.46 29 17'
        />
        <path
            fill='none'
            stroke='#000'
            d='M16 27.65c7.32 0 13.46-4.65 13.46-10.65c0-3.72-2.37-7-5.89-8.85c-1.39-.75-2.46-1.41-3.37-2l-1.13-.69A6.14 6.14 0 0 0 16 4.35a6.9 6.9 0 0 0-3.3 1.23c-.42.24-.86.51-1.32.8c-.87.54-1.83 1.13-3 1.73C4.91 10 2.54 13.24 2.54 17c0 6 6.14 10.65 13.46 10.65Z'
            strokeWidth={1}
        />
        <ellipse cx={21.65} cy={18.62} fill='#febbd0' rx={2.17} ry={1.28} />
        <ellipse cx={10.41} cy={18.62} fill='#febbd0' rx={2.17} ry={1.28} />
        <path
            fillRule='evenodd'
            d='M11.43 18.11a2 2 0 1 0-2-2.05a2.05 2.05 0 0 0 2 2.05m9.2 0a2 2 0 1 0-2-2.05a2 2 0 0 0 2 2.05'
        />
        <path
            fill='#fff'
            fillRule='evenodd'
            d='M10.79 16.19a.77.77 0 1 0-.76-.77a.76.76 0 0 0 .76.77m9.2 0a.77.77 0 1 0 0-1.53a.77.77 0 0 0 0 1.53'
        />
        <path
            fill='#b71422'
            stroke='#000'
            strokeWidth={0.75}
            d='M18.62 19.67a3.3 3.3 0 0 1-1.09 1.75a2.48 2.48 0 0 1-1.5.69a2.53 2.53 0 0 1-1.5-.69a3.28 3.28 0 0 1-1.08-1.75a.26.26 0 0 1 .29-.3h4.58a.27.27 0 0 1 .3.3Z'
        />
        <path
            fill='#ccbea7'
            fillRule='evenodd'
            d='M14.93 5.75a6.1 6.1 0 0 1-2.09 4.62c-.1.09 0 .27.11.22c1.25-.49 2.94-1.94 2.23-4.88c-.03-.15-.25-.11-.25.04m.85 0a6 6 0 0 1 .57 5c0 .13.12.24.21.13c.83-1 1.54-3.11-.59-5.31c-.1-.11-.27.04-.19.17Zm1-.06a6.1 6.1 0 0 1 2.53 4.38c0 .14.21.17.24 0c.34-1.3.15-3.51-2.66-4.66c-.12-.02-.21.18-.09.27ZM9.94 9.55a6.27 6.27 0 0 0 3.89-3.33c.07-.13.28-.08.25.07c-.64 3-2.79 3.59-4.13 3.51c-.14-.01-.14-.21-.01-.25'
        />
    </svg>
)

const PNPMIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <path
            fill='#f9ad00'
            d='M30 10.75h-8.749V2H30Zm-9.626 0h-8.75V2h8.75Zm-9.625 0H2V2h8.749ZM30 20.375h-8.749v-8.75H30Z'
        />
        <path
            fill='#4e4e4e'
            d='M20.374 20.375h-8.75v-8.75h8.75Zm0 9.625h-8.75v-8.75h8.75ZM30 30h-8.749v-8.75H30Zm-19.251 0H2v-8.75h8.749Z'
        />
    </svg>
)
