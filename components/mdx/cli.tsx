'use client'

import { useState } from 'react'
import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from '@/components/icons'
import { CopyButton } from '@/components/mdx/copy-button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { copyToClipboard } from '@/lib/modifiers'

interface CLIProps {
  items?: string | string[]
  command: 'add' | 'install' | 'init'
}

const url = `${process.env.NEXT_PUBLIC_APP_URL}/r`

export function CLI({ items, command = 'add' }: CLIProps) {
  const [pm, setPm] = useState<'npm' | 'yarn' | 'pnpm' | 'bun'>('npm')
  const [copied, setCopied] = useState(false)

  const getCommandLine = (p: 'npm' | 'yarn' | 'pnpm' | 'bun') => {
    if (command === 'add') {
      return Array.isArray(items) ? items.map((item) => ` ${url}/${item}`).join(' ') : ` ${url}/${items}`
    }
    if (command === 'install') {
      return ` ${p === 'npm' ? 'i' : 'add'} ${Array.isArray(items) ? items.join(' ') : items}`
    }
    return ` ${process.env.NEXT_PUBLIC_APP_URL}/r/theme-default`
  }

  const getPm = (p: 'npm' | 'yarn' | 'pnpm' | 'bun') => {
    if (command === 'add') {
      switch (p) {
        case 'npm':
          return 'npx shadcn@latest add'
        case 'pnpm':
          return 'pnpm dlx shadcn@latest add'
        case 'yarn':
          return 'yarn dlx shadcn@latest add'
        case 'bun':
          return 'bunx --bun shadcn@latest add'
      }
    }
    if (command === 'init') {
      switch (p) {
        case 'npm':
          return 'npx shadcn@latest init'
        case 'pnpm':
          return 'pnpm dlx shadcn@latest init'
        case 'yarn':
          return 'yarn dlx shadcn@latest init'
        case 'bun':
          return 'bunx --bun shadcn@latest init'
      }
    }
    return p
  }

  const onAction = async (p: 'npm' | 'yarn' | 'pnpm' | 'bun') => {
    setPm(p)
    await copyToClipboard(`${getPm(p)} ${getCommandLine(p)}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='no-scrollbar relative mt-4 flex h-11 w-full items-center justify-between gap-2 overflow-x-auto overflow-y-hidden rounded-lg border bg-[#eff1f5] py-2 text-sm **:whitespace-nowrap dark:bg-[#1e1e2e]'>
      <div className='px-3 font-mono!'>
        <span className='text-[#1e66f5] dark:text-[#89B4FA]'>{getPm(pm)}</span>
        <span className='text-[#40A02B] dark:text-[#A6E3A1]'>{getCommandLine(pm)}</span>
      </div>
      <DropdownMenu>
        <CopyButton className='absolute top-1.5 right-1.5 bg-card' isCopied={copied} />
        <DropdownMenuContent offset={0} placement='left top'>
          <DropdownMenuItem onPress={() => onAction('npm')}>
            <IconBrandNpm className='size-3.5' />
            NPM
          </DropdownMenuItem>
          <DropdownMenuItem onPress={() => onAction('yarn')}>
            <IconBrandYarn className='size-3.5' />
            Yarn
          </DropdownMenuItem>
          <DropdownMenuItem onPress={() => onAction('pnpm')}>
            <IconBrandPnpm className='size-3.5' />
            PNPM
          </DropdownMenuItem>
          <DropdownMenuItem onPress={() => onAction('bun')}>
            <IconBrandBun className='size-3.5' />
            Bun
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
