'use client'

import { IconChevronDown } from 'hq-icons'
import { type ReactNode, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from './button'

interface SpoilerProps {
    initialHeight?: number
    initialOpacity?: number
    showMoreText?: string
    showLessText?: string
    gradientTransparency?: boolean
    className?: string
    children: ReactNode
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
    const [isExpanded, setIsExpanded] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    return (
        <div className={cn('relative overflow-visible', className)}>
            <div
                ref={contentRef}
                className='overflow-hidden transition-all duration-300 ease-in-out'
                style={{
                    maxHeight: isExpanded ? contentRef.current?.scrollHeight : initialHeight,
                    opacity: isExpanded ? 1 : initialOpacity
                }}
            >
                {children}
            </div>
            {gradientTransparency && (
                <div
                    className={cn(
                        'absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-background',
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
