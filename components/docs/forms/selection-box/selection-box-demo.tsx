'use client'

import { SelectionBox } from '@/components/ui'

export default function SelectionBoxDemo() {
    return (
        <div className='space-y-4'>
            <SelectionBox label='Basic'>
                <SelectionBox.Item value='1'>Option 1</SelectionBox.Item>
                <SelectionBox.Item value='2'>Option 2</SelectionBox.Item>
            </SelectionBox>
            <SelectionBox isReadOnly label='Readonly'>
                <SelectionBox.Item value='1'>Option 1</SelectionBox.Item>
                <SelectionBox.Item value='2'>Option 2</SelectionBox.Item>
            </SelectionBox>
            <SelectionBox isInvalid label='Invalid'>
                <SelectionBox.Item value='1'>Option 1</SelectionBox.Item>
                <SelectionBox.Item value='2'>Option 2</SelectionBox.Item>
            </SelectionBox>
            <SelectionBox isDisabled label='Disabled'>
                <SelectionBox.Item value='1'>Option 1</SelectionBox.Item>
                <SelectionBox.Item value='2'>Option 2</SelectionBox.Item>
            </SelectionBox>
        </div>
    )
}
