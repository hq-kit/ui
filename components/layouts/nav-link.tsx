'use client'

import React from 'react'

import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { Link as LinkPrimitive } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const navLinkStyles = tv({
    base: 'data-focus-visible:text-fg text-muted-fg relative flex items-center gap-x-3 py-2 text-sm tracking-tight transition-colors data-focused:outline-none sm:py-3',
    variants: {
        isActive: {
            false: 'text-fg hover:text-primary',
            true: 'text-primary'
        }
    }
})

interface NavLinkProps {
    href: string
    isActive?: boolean
    isNextLink?: boolean
    children?: React.ReactNode
    target?: string
    className?: string
}

const NavLink = ({ href, isActive, className, isNextLink, ...props }: NavLinkProps) => {
    const El = isNextLink ? NextLink : LinkPrimitive
    return (
        <El href={href} className={navLinkStyles({ isActive, className })} {...props}>
            <>
                {props.children}
                {isActive && (
                    <motion.span
                        layoutId='current-indicator-navlink'
                        className='bg-primary absolute inset-x-0 bottom-[-0.550rem] h-0.5 w-full rounded'
                    />
                )}
            </>
        </El>
    )
}

export { NavLink }
