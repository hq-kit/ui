import { Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupOrientationDemo() {
    return (
        <RadioGroup orientation='horizontal' label='Plan'>
            <Radio value='bronze'>Bronze</Radio>
            <Radio value='silver'>Silver</Radio>
            <Radio value='gold'>Gold</Radio>
            <Radio value='platinum'>Platinum</Radio>
        </RadioGroup>
    )
}
