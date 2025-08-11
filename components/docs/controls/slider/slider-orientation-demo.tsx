'use client'

import { useState } from 'react'
import { Card, Description, Slider } from '@/components/ui'

export default function SliderOrientationDemo() {
    const [equalizer, setEqualizer] = useState({
        subBass: 40,
        bass: 50,
        lowMid: 60,
        mid: 70,
        highMid: 65,
        presence: 75,
        brilliance: 80
    })

    const handleSliderChange = (name: string, value: number) => {
        setEqualizer((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <Card className='p-4'>
            <div className='flex justify-center gap-4 [&>*]:w-6'>
                <Slider
                    aria-label='Sub Bass'
                    onChange={(newValue) => handleSliderChange('subBass', newValue as number)}
                    orientation='vertical'
                    value={equalizer.subBass}
                />
                <Slider
                    aria-label='Bass'
                    onChange={(newValue) => handleSliderChange('bass', newValue as number)}
                    orientation='vertical'
                    value={equalizer.bass}
                />
                <Slider
                    aria-label='Low Mid'
                    onChange={(newValue) => handleSliderChange('lowMid', newValue as number)}
                    orientation='vertical'
                    value={equalizer.lowMid}
                />
                <Slider
                    aria-label='Mid'
                    onChange={(newValue) => handleSliderChange('mid', newValue as number)}
                    orientation='vertical'
                    value={equalizer.mid}
                />
                <Slider
                    aria-label='High Mid'
                    onChange={(newValue) => handleSliderChange('highMid', newValue as number)}
                    orientation='vertical'
                    value={equalizer.highMid}
                />
                <Slider
                    aria-label='Presence'
                    onChange={(newValue) => handleSliderChange('presence', newValue as number)}
                    orientation='vertical'
                    value={equalizer.presence}
                />
                <Slider
                    aria-label='Brilliance'
                    onChange={(newValue) => handleSliderChange('brilliance', newValue as number)}
                    orientation='vertical'
                    value={equalizer.brilliance}
                />
            </div>
            <Description className='mt-6 block text-center'>Equilizer</Description>
        </Card>
    )
}
