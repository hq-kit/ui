import { Checkbox } from '@/components/ui'

export default function CheckboxDemo() {
    return (
        <div className='space-y-2'>
            <Checkbox>Basic</Checkbox>
            <Checkbox isIndeterminate>Indeterminate</Checkbox>
            <Checkbox isReadOnly>Readonly</Checkbox>
            <Checkbox isInvalid>Invalid</Checkbox>
            <Checkbox isDisabled>Disabled</Checkbox>
        </div>
    )
}
