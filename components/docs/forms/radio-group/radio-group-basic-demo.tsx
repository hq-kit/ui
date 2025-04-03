import { Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupBasicDemo() {
    return (
        <div className='space-y-4'>
            <RadioGroup label='Basic'>
                <Radio value='1'>Option 1</Radio>
                <Radio value='2'>Option 2</Radio>
            </RadioGroup>
            <RadioGroup isReadOnly label='Readonly'>
                <Radio value='1'>Option 1</Radio>
                <Radio value='2'>Option 2</Radio>
            </RadioGroup>
            <RadioGroup isInvalid label='Invalid'>
                <Radio value='1'>Option 1</Radio>
                <Radio value='2'>Option 2</Radio>
            </RadioGroup>
            <RadioGroup isDisabled label='Disabled'>
                <Radio value='1'>Option 1</Radio>
                <Radio value='2'>Option 2</Radio>
            </RadioGroup>
        </div>
    )
}
