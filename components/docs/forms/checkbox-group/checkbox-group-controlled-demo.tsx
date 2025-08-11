'use client'

import { useState } from 'react'
import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupControlledDemo() {
    const [values, setValues] = useState<string[]>([])
    return (
        <div className='space-y-2'>
            <CheckboxGroup label='Agreement' onChange={setValues} value={values}>
                <Checkbox value='terms-conditions'>Terms and conditions</Checkbox>
                <Checkbox value='privacy-policy'>Privacy policy</Checkbox>
                <Checkbox value='cookie-policy'>Cookie policy</Checkbox>
            </CheckboxGroup>
            <code>selected: {JSON.stringify(values)}</code>
        </div>
    )
}
