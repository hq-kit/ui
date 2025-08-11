import { Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupDescriptionDemo() {
    return (
        <RadioGroup description='Choose a plan that fits your needs and budget' label='Plan'>
            <Radio value='bronze'>Bronze</Radio>
            <Radio value='silver'>Silver</Radio>
            <Radio value='gold'>Gold</Radio>
            <Radio value='platinum'>Platinum</Radio>
        </RadioGroup>
    )
}
