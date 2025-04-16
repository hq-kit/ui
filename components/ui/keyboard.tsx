'use client'

import React from 'react'

import { Keyboard as RACKeyboard } from 'react-aria-components'

import { cn } from '@/lib/utils'

type ShortcutKeyResult = {
    symbol: string
    readable: string
}

const shortcutKeyMap: Record<string, ShortcutKeyResult> = {
    mod: { symbol: '⌘', readable: 'Command/Control' },
    win: { symbol: '⌘', readable: 'Win' },
    meta: { symbol: '⌘', readable: 'Meta' },
    alt: { symbol: '⌥', readable: 'Option/Alt' },
    shift: { symbol: '⇧', readable: 'Shift' },
    space: { symbol: '␣', readable: 'Space' },
    tab: { symbol: '⇥', readable: 'Tab' },
    delete: { symbol: '⌫', readable: 'Delete' },
    capslock: { symbol: '⇪', readable: 'Caps Lock' },
    up: { symbol: '↑', readable: 'Up' },
    right: { symbol: '→', readable: 'Right' },
    down: { symbol: '↓', readable: 'Down' },
    left: { symbol: '←', readable: 'Left' },
    pageup: { symbol: '⇞', readable: 'Page Up' },
    pagedown: { symbol: '⇟', readable: 'Page Down' },
    home: { symbol: '↖', readable: 'Home' },
    end: { symbol: '↘', readable: 'End' },
    enter: { symbol: '↵', readable: 'Enter' },
    esc: { symbol: '⎋', readable: 'Escape' },
    fn: { symbol: 'Fn', readable: 'Function' }
}

const getShortcutKey = (key: string): ShortcutKeyResult =>
    shortcutKeyMap[key.toLowerCase()] || { symbol: key, readable: key }

const Keyboard = ({ keys, className, ...props }: React.ComponentProps<typeof RACKeyboard> & { keys: string[] }) => {
    if (!keys) return null
    return (
        <RACKeyboard
            className={cn(
                'hidden justify-self-end w-fit space-x-0.5 shadow rtl:space-x-reverse text-xs text-current/70 !font-sans border rounded-sm px-1.5 py-0.5 group-hover:text-current group-focus:text-current group-disabled:opacity-50 sm:inline-flex',
                className
            )}
            {...props}
        >
            {keys.map((key) => (
                <abbr className='capitalize' key={key} aria-label={getShortcutKey(key).readable}>
                    {getShortcutKey(key).symbol}
                </abbr>
            ))}
        </RACKeyboard>
    )
}

export { Keyboard }
