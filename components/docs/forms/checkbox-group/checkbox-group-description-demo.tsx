import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupDescriptionDemo() {
    return (
        <CheckboxGroup description='Please read and agree before continuing' label='Agreement'>
            <Checkbox value='terms-conditions'>Terms and conditions</Checkbox>
            <Checkbox value='privacy-policy'>Privacy policy</Checkbox>
            <Checkbox value='cookie-policy'>Cookie policy</Checkbox>
        </CheckboxGroup>
    )
}
