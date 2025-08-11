'use client'

import { ColorPicker } from '@/components/ui'

export default function ColorPickerDemo() {
    return (
        <div className='flex gap-6'>
            <ColorPicker label='Default' />
            <ColorPicker isDisabled label='Disabled' />
        </div>
    )
}
