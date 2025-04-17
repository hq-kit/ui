'use client'

import React from 'react'

import { IconChevronDown } from 'hq-icons'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

import { Button } from './button'

interface SpoilerProps {
    initialHeight?: number
    initialOpacity?: number
    showMoreText?: string
    showLessText?: string
    gradientTransparency?: boolean
    className?: string
    children: React.ReactNode
}

function Spoiler({
    children,
    initialHeight = 0,
    initialOpacity = 0,
    showMoreText = 'Show More',
    showLessText = 'Show Less',
    gradientTransparency = true,
    className
}: SpoilerProps) {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const animate = {
        transition: { type: 'tween' },
        height: isExpanded ? 'auto' : initialHeight,
        opacity: isExpanded ? 1 : initialOpacity
    }
    return (
        <div className={cn('relative overflow-visible', className)}>
            <AnimatePresence initial={false}>
                <div aria-expanded={isExpanded}>
                    <motion.div
                        style={{ overflow: 'hidden' }}
                        initial={{ height: initialHeight, opacity: initialOpacity }}
                        exit={{ height: initialHeight, opacity: initialOpacity }}
                        animate={animate}
                    >
                        {children}
                    </motion.div>
                </div>
            </AnimatePresence>
            {gradientTransparency && (
                <div
                    className={cn(
                        'absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-bg to-bg',
                        isExpanded && 'hidden'
                    )}
                />
            )}
            <Button
                variant='outline'
                size='sm'
                className={cn('-translate-x-1/2 -bottom-4 absolute left-1/2 w-fit')}
                onPress={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? showLessText : showMoreText}
                <IconChevronDown className={cn('size-4 transition', isExpanded && '-rotate-180')} />
            </Button>
        </div>
    )
}

export { Spoiler }
