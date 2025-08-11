'use client'

import { useState } from 'react'
import { OTP } from '@/components/ui'

export default function InputOtpControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <OTP maxLength={6} onChange={setValue} value={value}>
                <OTP.Group>
                    {[...Array(6)].map((_, index) => (
                        <OTP.Slot index={index} key={index} />
                    ))}
                </OTP.Group>
            </OTP>

            <div className='text-center text-sm'>
                {value === '' ? 'Enter your one-time password.' : `You entered: ${value}`}
            </div>
        </div>
    )
}
