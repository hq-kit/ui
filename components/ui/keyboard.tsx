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
    slash: { symbol: '/', readable: 'Slash' },
    backslash: { symbol: '\\', readable: 'Backslash' },
    equals: { symbol: '=', readable: 'Equals' },
    minus: { symbol: '-', readable: 'Minus' },
    enter: { symbol: '↵', readable: 'Enter' },
    escape: { symbol: '⎋', readable: 'Escape' },
    fn: { symbol: 'Fn', readable: 'Fn' },
    win: { symbol: '⌘', readable: 'Win' }
}

const getShortcutKey = (key: string): ShortcutKeyResult =>
    shortcutKeyMap[key.toLowerCase()] || { symbol: key, readable: key }

const Keyboard = ({ keys, className, ...props }: React.ComponentProps<typeof RACKeyboard> & { keys: string[] }) => {
    if (!keys) return null
    return (
        <RACKeyboard
            className={cn(
                'hidden text-xs text-current/70 border rounded-sm px-1 py-0.5 font-mono group-hover:text-current group-focus:text-current group-disabled:opacity-50 sm:inline-flex',
                className
            )}
            {...props}
        >
            {keys.map((key) => (
                <span className='capitalize' key={key} aria-label={getShortcutKey(key).readable}>
                    {getShortcutKey(key).symbol}
                </span>
            ))}
        </RACKeyboard>
    )
}

export { Keyboard }
