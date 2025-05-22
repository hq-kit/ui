'use client'

import { useState } from 'react'
import type { Key } from 'react-aria-components'
import type { Theme } from 'rehype-pretty-code'

import { Code, Select } from '@/components/ui'

const themes = [
    'andromeeda',
    'aurora-x',
    'ayu-dark',
    'catppuccin-frappe',
    'catppuccin-latte',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'dark-plus',
    'dracula',
    'dracula-soft',
    'everforest-dark',
    'everforest-light',
    'github-dark',
    'github-dark-default',
    'github-dark-dimmed',
    'github-dark-high-contrast',
    'github-light',
    'github-light-default',
    'github-light-high-contrast',
    'gruvbox-dark-hard',
    'gruvbox-dark-medium',
    'gruvbox-dark-soft',
    'gruvbox-light-hard',
    'gruvbox-light-medium',
    'gruvbox-light-soft',
    'houston',
    'kanagawa-dragon',
    'kanagawa-lotus',
    'kanagawa-wave',
    'laserwave',
    'light-plus',
    'material-theme',
    'material-theme-darker',
    'material-theme-lighter',
    'material-theme-ocean',
    'material-theme-palenight',
    'min-dark',
    'min-light',
    'monokai',
    'night-owl',
    'nord',
    'one-dark-pro',
    'one-light',
    'plastic',
    'poimandres',
    'red',
    'rose-pine',
    'rose-pine-dawn',
    'rose-pine-moon',
    'slack-dark',
    'slack-ochin',
    'snazzy-light',
    'solarized-dark',
    'solarized-light',
    'synthwave-84',
    'tokyo-night',
    'vesper',
    'vitesse-black',
    'vitesse-dark',
    'vitesse-light'
].map((t) => ({ id: t, name: t }))

const code = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )`

export default function CodeThemeDemo() {
    const [theme, setTheme] = useState<Key | null>('dracula')
    return (
        <div className='space-y-4'>
            <Select label='Theme' searchable selectedKey={theme} onSelectionChange={setTheme} items={themes}>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
            <Code code={code} theme={theme as Theme} />
        </div>
    )
}
