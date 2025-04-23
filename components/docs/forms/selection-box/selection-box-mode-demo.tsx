import { SelectionBox } from '@/components/ui'

export default function CheckboxGroupDescriptionDemo() {
    return (
        <div className='space-y-6'>
            <SelectionBox selectionMode='single' label='Plan'>
                <SelectionBox.Item value='bronze'>Bronze</SelectionBox.Item>
                <SelectionBox.Item value='silver'>Silver</SelectionBox.Item>
                <SelectionBox.Item value='gold'>Gold</SelectionBox.Item>
                <SelectionBox.Item value='platinum'>Platinum</SelectionBox.Item>
            </SelectionBox>
            <SelectionBox selectionMode='multiple' label='Plan'>
                <SelectionBox.Item value='bronze'>Bronze</SelectionBox.Item>
                <SelectionBox.Item value='silver'>Silver</SelectionBox.Item>
                <SelectionBox.Item value='gold'>Gold</SelectionBox.Item>
                <SelectionBox.Item value='platinum'>Platinum</SelectionBox.Item>
            </SelectionBox>
        </div>
    )
}
