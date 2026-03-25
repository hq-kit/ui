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
    code: 'codex mcp add react-aria -- npx @react-aria/mcp@latest'
  },
  {
    label: 'Claude',
    id: 'claude',
    code: 'claude mcp add react-aria -- npx @react-aria/mcp@latest'
  },
  {
    label: 'Cursor',
    id: 'cursor',
    code: 'cursor mcp add react-aria -- npx @react-aria/mcp@latest'
  },
  {
    label: 'Gemini',
    id: 'gemini',
    code: 'gemini mcp add react-aria -- npx @react-aria/mcp@latest'
  },
  {
    label: 'VS Code',
    id: 'vscode',
    code: 'code --add-mcp \'{"name":"React Aria","command":"npx","args":["@react-aria/mcp@latest"]}\''
  }
]

export function McpRacTabs() {
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
            code={`[mcp_servers.react-aria]
command = "npx"
args = ["@react-aria/mcp@latest"]`}
            copy
            lang='toml'
          />

          <p className='mt-4'>If you use both MCP servers, your config should look like this:</p>

          <Code
            code={`[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]

[mcp_servers.react-aria]
command = "npx"
args = ["@react-aria/mcp@latest"]`}
            copy
            lang='toml'
          />
        </div>
      )}
    </div>
  )
}
