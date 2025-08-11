'use client'

import { OTP } from '@/components/ui'

export default function InputOtpDemo() {
    return (
        <div>
            <OTP maxLength={6}>
                <OTP.Group>
                    {[...Array(6)].map((_, index) => (
                        <OTP.Slot index={index} key={index} />
                    ))}
                </OTP.Group>
            </OTP>
        </div>
    )
}
