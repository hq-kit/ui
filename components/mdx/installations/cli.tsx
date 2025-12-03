'use client'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { Tabs } from '@/components/ui/tabs'
import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from '../icons'

interface CLIProps {
  items?: string | string[]
  command: 'add' | 'install'
}

const url = `${process.env.NEXT_PUBLIC_APP_URL}/r`

export default function CLIInstall({ items, command = 'add' }: CLIProps) {
  const getCommandLine = (pm: string) => {
    if (command === 'add') {
      return Array.isArray(items) ? items.map((item) => `${url}/${item}`).join(' ') : `${url}/${items}`
    }
    return ` ${pm === 'npm' ? 'i' : 'add'} ${Array.isArray(items) ? items.join(' ') : items}`
  }

  const getPm = (pm: string) => {
    if (command === 'add') {
      switch (pm) {
        case 'npm':
          return 'npx shadcn@latest add'
        case 'pnpm':
          return 'pnpm dlx shadcn@latest add'
        case 'yarn':
          return 'yarn dlx shadcn@latest add'
        case 'bun':
          return 'bunx shadcn@latest add'
      }
    }
    return pm
  }

  return (
    <>
      <p className='mb-2'>First install the dependencies</p>
      <Tabs defaultSelectedKey='npm'>
        <Tabs.List>
          <Tabs.Trigger id='npm'>
            <IconBrandNpm className='size-3' />
            NPM
          </Tabs.Trigger>
          <Tabs.Trigger id='yarn'>
            <IconBrandYarn className='size-3' />
            Yarn
          </Tabs.Trigger>
          <Tabs.Trigger id='pnpm'>
            <IconBrandPnpm className='size-3' />
            PNPM
          </Tabs.Trigger>
          <Tabs.Trigger id='bun'>
            <IconBrandBun className='size-3' />
            Bun
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content id='npm'>
          <DynamicCodeBlock code={`${getPm('npm')} ${getCommandLine('npm')}`} lang='bash' />
        </Tabs.Content>
        <Tabs.Content id='yarn'>
          <DynamicCodeBlock code={`${getPm('yarn')} ${getCommandLine('yarn')}`} lang='bash' />
        </Tabs.Content>
        <Tabs.Content id='pnpm'>
          <DynamicCodeBlock code={`${getPm('pnpm')} ${getCommandLine('pnpm')}`} lang='bash' />
        </Tabs.Content>
        <Tabs.Content id='bun'>
          <DynamicCodeBlock code={`${getPm('bun')} ${getCommandLine('bun')}`} lang='bash' />
        </Tabs.Content>
      </Tabs>
    </>
  )
}
