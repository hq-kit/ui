'use client'

import { IconCircleAlert } from 'hq-icons'
import { motion } from 'motion/react'
import {
    Meter as MeterPrimitive,
    type MeterProps as MeterPrimitiveProps
} from 'react-aria-components'

import { Label } from './field'
import { ctr } from './utils'

interface MeterProps extends MeterPrimitiveProps {
    label?: string
}

const Meter = ({ label, ...props }: MeterProps) => {
    return (
        <MeterPrimitive {...props} className={ctr(props.className, 'flex flex-col gap-1')}>
            {({ percentage, valueText }) => (
                <>
                    <div className='flex w-full justify-between gap-2'>
                        <Label>{label}</Label>
                        <span
                            className={`text-sm tabular-nums ${percentage >= 80 ? 'text-danger' : 'text-muted-fg'}`}
                        >
                            {percentage >= 80 && (
                                <IconCircleAlert
                                    aria-label='Alert'
                                    className='fill-danger/20 text-danger inline-block size-4 align-text-bottom'
                                />
                            )}
                            {` ${valueText}`}
                        </span>
                    </div>
                    <div className='bg-muted relative h-2 min-w-64 rounded-full outline -outline-offset-1 outline-transparent'>
                        <motion.div
                            className='absolute top-0 left-0 h-full rounded-full'
                            initial={{ width: '0%', backgroundColor: getColor(0) }}
                            animate={{
                                width: `${percentage}%`,
                                backgroundColor: getColor(percentage)
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </>
            )}
        </MeterPrimitive>
    )
}

const getColor = (percentage: number) => {
    if (percentage < 30) {
        return 'var(--primary)'
    }

    if (percentage < 50) {
        return 'var(--success)'
    }

    if (percentage < 70) {
        return '#eab308'
    }

    if (percentage < 80) {
        return 'var(--warning)'
    }

    return 'var(--danger)'
}

export { Meter }
export type { MeterProps }
