'use client'

import React from 'react'

import { Checkbox, CheckboxGroup, Description } from '@/components/ui'

export default function CheckboxGroupControlledDemo() {
    const [values, setValues] = React.useState<string[]>([])
    return (
        <>
            <CheckboxGroup value={values} onChange={setValues} label='Options'>
                <Checkbox value='sound'>Sound</Checkbox>
                <Checkbox value='wifi'>Wi-Fi</Checkbox>
                <Checkbox value='sync'>Sync</Checkbox>
            </CheckboxGroup>

            <Description className='flex flex-col gap-y-1 h-10 mt-2 [&>strong]:text-foreground [&>strong]:font-medium'>
                {values.length > 0 ? (
                    <>
                        Selected values <strong className='font-medium'>{values.join(', ')}</strong>
                    </>
                ) : (
                    'No values selected'
                )}
            </Description>
        </>
    )
}
