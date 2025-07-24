'use client'

import { cn } from '@/lib/utils'
import { IconCircleAlert } from 'hq-icons'
import { Meter as RACMeter, type MeterProps as RACMeterProps } from 'react-aria-components'
import { Label } from './form'

interface MeterProps extends RACMeterProps {
    label?: string
}

const Meter = ({ label, className, ...props }: MeterProps) => {
    return (
        <RACMeter
            aria-label={props['aria-label'] ?? 'Meter'}
            {...props}
            className={cn('flex flex-col gap-y-1.5', className)}
        >
            {({ percentage, valueText }) => (
                <>
                    <div className='flex w-full justify-between gap-2'>
                        {label && <Label>{label}</Label>}
                        <span
                            className={`flex items-center text-sm tabular-nums ${percentage >= 80 ? 'text-destructive' : 'text-muted-foreground'}`}
                        >
                            {percentage >= 80 && (
                                <IconCircleAlert
                                    aria-label='Alert'
                                    className='mr-1 inline size-4 fill-invalid text-destructive'
                                />
                            )}
                            {valueText}
                        </span>
                    </div>
                    <div className='relative h-2 min-w-64 rounded-lg bg-muted outline-hidden'>
                        <div
                            className='absolute top-0 left-0 h-full rounded-full transition-[width,background-color]'
                            style={{
                                width: `${percentage}%`,
                                backgroundColor: getColor(percentage)
                            }}
                        />
                    </div>
                </>
            )}
        </RACMeter>
    )
}

const getColor = (percentage: number) => {
    if (percentage < 25) {
        return 'blue'
    }
    if (percentage < 50) {
        return 'green'
    }
    if (percentage < 75) {
        return 'orange'
    }
    return 'var(--destructive)'
}

export { Meter }
