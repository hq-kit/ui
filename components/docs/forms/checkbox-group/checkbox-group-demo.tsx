import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupDemo() {
    return (
        <div className='space-y-4'>
            <CheckboxGroup label='Basic'>
                <Checkbox value='1'>Option 1</Checkbox>
                <Checkbox value='2'>Option 2</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup isReadOnly label='Readonly'>
                <Checkbox value='1'>Option 1</Checkbox>
                <Checkbox value='2'>Option 2</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup isInvalid label='Invalid'>
                <Checkbox value='1'>Option 1</Checkbox>
                <Checkbox value='2'>Option 2</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup isDisabled label='Disabled'>
                <Checkbox value='1'>Option 1</Checkbox>
                <Checkbox value='2'>Option 2</Checkbox>
            </CheckboxGroup>
        </div>
    )
}
