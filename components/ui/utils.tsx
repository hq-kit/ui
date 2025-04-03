'use client'

import React from 'react'

import { type ClassValue, clsx } from 'clsx'
import { useVisuallyHidden } from 'react-aria'
import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

function composeTailwindRenderProps<T>(
    className: string | ((v: T) => string) | undefined,
    tw: string | Array<string | undefined>
): string | ((v: T) => string) {
    return composeRenderProps(className, (className) => twMerge(tw, className))
}

const focusRing = tv({
    variants: {
        isFocused: { true: 'ring-primary/20 data-invalid:ring-danger/20 ring-4 outline-hidden' },
        isFocusVisible: { true: 'ring-primary/20 ring-4 outline-hidden' },
        isInvalid: { true: 'ring-danger/20 ring-4' }
    }
})

const focusStyles = tv({
    extend: focusRing,
    variants: {
        isFocused: { true: 'border-primary/70' },
        isInvalid: { true: 'border-danger/70' }
    }
})

const focusButtonStyles = tv({
    base: 'outline-primary outline outline-offset-2',
    variants: {
        isFocusVisible: {
            false: 'outline-0',
            true: 'outline-2'
        },
        isDisabled: {
            false: 'cursor-pointer',
            true: 'cursor-default opacity-50'
        },
        isHovered: {
            true: 'brightness-90'
        },
        isPressed: {
            true: 'brightness-95'
        }
    }
})

const useMediaQuery = (query: string) => {
    const [value, setValue] = React.useState(false)

    React.useEffect(() => {
        const onChange = (e: MediaQueryListEvent) => {
            setValue(e.matches)
        }

        const result = matchMedia(query)
        result.addEventListener('change', onChange)
        setValue(result.matches)

        return () => result.removeEventListener('change', onChange)
    }, [query])

    return value
}

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
    const { visuallyHiddenProps } = useVisuallyHidden()
    return <span {...visuallyHiddenProps}>{children}</span>
}

export {
    cn,
    composeTailwindRenderProps as compose,
    composeRenderProps as cr,
    composeTailwindRenderProps as ctr,
    focusButtonStyles,
    focusRing,
    focusStyles,
    useMediaQuery,
    VisuallyHidden
}
