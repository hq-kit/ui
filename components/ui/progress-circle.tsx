'use client'

import { ProgressBar, type ProgressBarProps } from 'react-aria-components'

import { cn } from './utils'

interface ProgressCircleProps extends Omit<ProgressBarProps, 'className'> {
    className?: string
    ref?: React.RefObject<HTMLDivElement>
}

const ProgressCircle = ({ className, ref, ...props }: ProgressCircleProps) => {
    return (
        <ProgressBar {...props} ref={ref}>
            {({ percentage, isIndeterminate, valueText }) => (
                <svg
                    className={cn('size-20 shrink-0 text-primary', className)}
                    viewBox='0 0 32 32'
                    fill='none'
                >
                    <circle
                        cx='50%'
                        cy='50%'
                        r='calc(50% - 2px)'
                        strokeWidth={3}
                        stroke='currentColor'
                        strokeOpacity={0.25}
                    />
                    <circle
                        cx='50%'
                        cy='50%'
                        r='calc(50% - 2px)'
                        strokeWidth={3}
                        stroke='currentColor'
                        pathLength={100}
                        strokeDasharray='100 200'
                        strokeDashoffset={100 - (percentage ?? 30)}
                        strokeLinecap='round'
                        className={cn(
                            'origin-center',
                            isIndeterminate
                                ? 'animate-[spin_1s_cubic-bezier(0.4,_0,_0.2,_1)_infinite]'
                                : '-rotate-90'
                        )}
                    />
                    {!isIndeterminate && (
                        <text
                            x='50%'
                            y='50%'
                            textAnchor='middle'
                            dy='.35em'
                            fontSize='calc(50% + 1px)'
                            className='fill-current'
                        >
                            {valueText}
                        </text>
                    )}
                </svg>
            )}
        </ProgressBar>
    )
}

export { ProgressCircle }
export type { ProgressCircleProps }
