'use client'

import { IconCircleAlert } from 'hq-icons'
import { motion } from 'motion/react'
import { Meter as RACMeter, type MeterProps as RACMeterProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Label } from './field'

interface MeterProps extends RACMeterProps {
    label?: string
}

const Meter = ({ label, className, ...props }: MeterProps) => {
    return (
        <RACMeter {...props} className={cn('flex flex-col gap-y-1.5', className)}>
            {({ percentage, valueText }) => (
                <>
                    <div className='flex w-full justify-between gap-2'>
                        {label && <Label>{label}</Label>}
                        <span
                            className={`text-sm flex items-center tabular-nums ${percentage >= 80 ? 'text-danger' : 'text-muted-fg'}`}
                        >
                            {percentage >= 80 && (
                                <IconCircleAlert
                                    aria-label='Alert'
                                    className='fill-danger/20 inline text-danger size-4 mr-1'
                                />
                            )}
                            {valueText}
                        </span>
                    </div>
                    <div className='bg-muted relative h-2 min-w-64 rounded-lg outline-hidden'>
                        <motion.div
                            className='absolute top-0 left-0 h-full rounded-full'
                            initial={{ width: '0%', backgroundColor: 'transparent' }}
                            animate={{
                                width: `${percentage}%`,
                                backgroundColor: getColor(percentage)
                            }}
                            transition={{ duration: 1.5 }}
                        />
                    </div>
                </>
            )}
        </RACMeter>
    )
}

const getColor = (percentage: number) => {
    if (percentage < 25) {
        return 'var(--info)'
    } else if (percentage < 50) {
        return 'var(--success)'
    } else if (percentage < 75) {
        return 'var(--warning)'
    } else return 'var(--danger)'
}

export { Meter }
