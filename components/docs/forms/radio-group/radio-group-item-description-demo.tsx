import { Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupChildrenDescriptionDemo() {
    return (
        <RadioGroup label='Plan'>
            <Radio value='bronze' description='Weekly subscription'>
                Bronze
            </Radio>
            <Radio value='silver' description='Monthly subscription'>
                Silver
            </Radio>
            <Radio value='gold' description='Yearly subscription'>
                Gold
            </Radio>
            <Radio value='platinum' description='Lifetime subscription'>
                Platinum
            </Radio>
        </RadioGroup>
    )
}
