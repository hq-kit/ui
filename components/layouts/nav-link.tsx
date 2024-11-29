'use client'

import React from 'react'

import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { Link as LinkPrimitive } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const navLinkStyles = tv({
    base: 'relative flex focus-visible:text-foreground items-center gap-x-3 tracking-tight py-2 text-sm text-muted-foreground transition-colors focus:outline-none sm:py-3',
    variants: {
        isActive: {
            false: 'text-foreground hover:text-primary forced-colors:text-[Gray]',
            true: 'text-primary forced-colors:text-[Highlight]'
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
                        className='absolute inset-x-0 bottom-[-0.550rem] h-0.5 w-full rounded bg-primary'
                    />
                )}
            </>
        </El>
    )
}

export { NavLink }
