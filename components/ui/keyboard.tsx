'use client'

import React from 'react'

import { Keyboard as RACKeyboard } from 'react-aria-components'

import { cn } from '@/lib/utils'

const Keyboard = ({
    keys,
    className,
    ...props
}: React.ComponentProps<typeof RACKeyboard> & { keys: string | string[] }) => {
    return (
        <RACKeyboard
            className={cn(
                'hidden text-current/70 group-hover:text-fg group-focus:text-fg group-focus:opacity-90 group-disabled:opacity-50 sm:inline-flex',
                className
            )}
            {...props}
        >
            {(Array.isArray(keys) ? keys : keys.split('')).map((char, index) => (
                <kbd
                    key={index}
                    className='inline-grid min-h-5 w-fit place-content-center rounded-lg text-center font-sans text-xs uppercase'
                >
                    {char}
                </kbd>
            ))}
        </RACKeyboard>
    )
}

export { Keyboard }
