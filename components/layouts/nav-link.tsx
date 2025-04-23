'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { Link, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface NavLinkProps {
    href: string
    isActive?: boolean
    children?: ReactNode
    target?: string
    className?: string
}

const NavLink = ({ href, isActive, className, ...props }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className={composeRenderProps(className, (className, { isFocusVisible, isHovered }) =>
                cn(
                    'relative flex items-center gap-2 rounded-lg px-3 py-2 text-muted-fg text-sm outline-hidden transition-colors',
                    isFocusVisible && 'text-primary ring-2 ring-primary/50 ring-offset-2',
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
                    className='absolute inset-x-0 size-full rounded-lg bg-primary/10'
                />
            )}
        </Link>
    )
}

export { NavLink }
