'use client'

import { useState } from 'react'

import { IconChevronDown } from 'hq-icons'
import { AnimatePresence, motion } from 'motion/react'
import { Text, ToggleButton } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { buttonStyles } from './button'
import { cn } from './utils'

const showMoreStyles = tv({
    base: 'after:border-muted before:border-muted text-sm leading-6',
    variants: {
        orientation: {
            vertical: 'mx-1 h-auto self-stretch',
            horizontal: 'my-0.5 h-px w-full self-stretch'
        }
    },
    compoundVariants: [
        {
            orientation: 'vertical',
            className:
                'mx-2 flex flex-col items-center before:mb-2 before:flex-1 before:border-l after:mt-2 after:flex-1 after:border-r'
        },
        {
            orientation: 'horizontal',
            className:
                'my-2 flex items-center self-stretch before:mr-2 before:flex-1 before:border-t after:ml-2 after:flex-1 after:border-t'
        }
    ],
    defaultVariants: {
        orientation: 'horizontal'
    }
})

interface ShowMoreProps extends React.ComponentProps<typeof ToggleButton> {
    className?: string
    orientation?: 'horizontal' | 'vertical'
    as?: 'text' | 'button'
    text?: string
}

const ShowMore = ({
    as = 'button',
    orientation = 'horizontal',
    className,
    ...props
}: ShowMoreProps) => {
    return (
        <div className={showMoreStyles({ orientation, className })}>
            {as === 'button' ? (
                <ToggleButton
                    {...props}
                    className={buttonStyles({
                        variant: 'outline',
                        size: 'sm'
                    })}
                />
            ) : (
                <Text slot='description'>{props.text}</Text>
            )}
        </div>
    )
}

interface ContentRevealProps {
    initialHeight?: number
    initialOpacity?: number
    showMoreText?: string
    showLessText?: string
    gradientTransparency?: boolean
    children: React.ReactNode
    className?: string
}

function ContentReveal({
    children,
    initialHeight = 128,
    initialOpacity = 1,
    showMoreText = 'Show More',
    showLessText = 'Show Less',
    gradientTransparency = true,
    className
}: ContentRevealProps) {
    const [isExpanded, setIsExpanded] = useState(false)
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
                        'via-bg to-bg absolute inset-0 rounded-lg bg-gradient-to-b from-transparent',
                        isExpanded && 'hidden'
                    )}
                ></div>
            )}
            <ShowMore
                className={cn('absolute -bottom-2')}
                isSelected={isExpanded}
                onChange={setIsExpanded}
            >
                {isExpanded ? showLessText : showMoreText}
                <IconChevronDown
                    className={cn(isExpanded ? 'rotate-180' : '', 'size-4 transition')}
                />
            </ShowMore>
        </div>
    )
}

export { ContentReveal, ShowMore }
