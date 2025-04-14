'use client'

import { composeRenderProps, Link as RACLink, type LinkProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const Link = (props: LinkProps) => {
    return (
        <RACLink
            {...props}
            className={composeRenderProps(props.className, (className, { isDisabled, isFocusVisible }) =>
                cn(
                    'relative text-sm cursor-pointer rounded-lg transition',
                    isFocusVisible && 'ring-2 ring-offset-2 ring-primary',
                    isDisabled && 'cursor-default opacity-50',
                    className
                )
            )}
        />
    )
}

export { Link }
