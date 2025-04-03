'use client'

import React from 'react'

import { motion } from 'motion/react'
import { composeRenderProps, Link } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface NavLinkProps {
    href: string
    isActive?: boolean
    children?: React.ReactNode
    target?: string
    className?: string
}

const NavLink = ({ href, isActive, className, ...props }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className={composeRenderProps(className, (className, { isFocusVisible, isHovered }) =>
                cn(
                    'relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-fg outline-hidden transition-colors',
                    isFocusVisible && 'text-primary ring-2 ring-offset-2 ring-primary/50',
                    isHovered && 'text-primary',
                    isActive && 'text-primary',
                    className
                )
            )}
            {...props}
        >
            {props.children}
            {isActive && (
                <motion.span
                    layoutId='active-indicator'
                    className='bg-primary/10 absolute inset-x-0 size-full rounded-lg'
                />
            )}
        </Link>
    )
}

export { NavLink }
