'use client'

import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupDescriptionDemo() {
    return (
        <CheckboxGroup label='Agreement' description='Please read and agree before continuing'>
            <Checkbox value='terms-conditions'>Terms and conditions</Checkbox>
            <Checkbox value='privacy-policy'>Privacy policy</Checkbox>
            <Checkbox value='cookie-policy'>Cookie policy</Checkbox>
        </CheckboxGroup>
    )
}
