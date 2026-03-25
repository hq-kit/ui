'use client'

import type { Key } from 'react-aria-components'
import { useState } from 'react'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { Tabs } from '@/components/ui/tabs'

const commands = [
  {
    label: 'Codex',
    id: 'codex',
    code: 'shadcn@latest mcp init --client codex'
  },
  {
    label: 'Claude',
    id: 'claude',
    code: 'shadcn@latest mcp init --client claude'
  },
  {
    label: 'Cursor',
    id: 'cursor',
    code: 'shadcn@latest mcp init --client cursor'
  },
  {
    label: 'Gemini',
    id: 'gemini',
    code: 'gemini mcp add shadcn -- shadcn@latest mcp'
  },
  {
    label: 'VS Code',
    id: 'vscode',
    code: 'shadcn@latest mcp init --client vscode'
  }
]

export function McpTabs() {
  const [tab, setTab] = useState<Key>('codex')
  return (
    <div className='my-2'>
      <Tabs className='gap-0 overflow-hidden rounded-lg border bg-muted' onSelectionChange={setTab} selectedKey={tab}>
        <Tabs.List className='w-full bg-muted' items={commands} variant='line'>
          {(command) => <Tabs.Trigger key={command.label}>{command.label}</Tabs.Trigger>}
        </Tabs.List>
        <Tabs.Contents className='h-fit' items={commands}>
          {(command) => (
            <Tabs.Content className='p-0.5 *:mt-0.5'>
              <CLI command='execute' items={command.code} />
            </Tabs.Content>
          )}
        </Tabs.Contents>
      </Tabs>
      {tab === 'codex' && (
        <div className='mt-6'>
          <p>
            Add the following to <code>~/.codex/config.toml</code>:
          </p>
          <Code
            code={`[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]`}
            copy
            lang='toml'
          />
          {}
        </div>
      )}
    </div>
  )
}
