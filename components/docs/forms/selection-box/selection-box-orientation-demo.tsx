import { SelectionBox } from '@/components/ui'

export default function SelectionBoxDemo() {
    return (
        <div className='space-y-6'>
            <SelectionBox orientation='horizontal' label='Plan'>
                <SelectionBox.Item value='bronze'>Bronze</SelectionBox.Item>
                <SelectionBox.Item value='silver'>Silver</SelectionBox.Item>
                <SelectionBox.Item value='gold'>Gold</SelectionBox.Item>
                <SelectionBox.Item value='platinum'>Platinum</SelectionBox.Item>
            </SelectionBox>
            <SelectionBox orientation='vertical' label='Plan'>
                <SelectionBox.Item value='bronze'>Bronze</SelectionBox.Item>
                <SelectionBox.Item value='silver'>Silver</SelectionBox.Item>
                <SelectionBox.Item value='gold'>Gold</SelectionBox.Item>
                <SelectionBox.Item value='platinum'>Platinum</SelectionBox.Item>
            </SelectionBox>
        </div>
    )
}
