import { Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupChildrenDescriptionDemo() {
    return (
        <RadioGroup label='Plan'>
            <Radio description='Weekly subscription' value='bronze'>
                Bronze
            </Radio>
            <Radio description='Monthly subscription' value='silver'>
                Silver
            </Radio>
            <Radio description='Yearly subscription' value='gold'>
                Gold
            </Radio>
            <Radio description='Lifetime subscription' value='platinum'>
                Platinum
            </Radio>
        </RadioGroup>
    )
}
