'use client'

import React from 'react'

import { Select, Switch } from '@/components/ui'

const items = ['primary', 'secondary', 'success', 'danger', 'warning', 'muted']
export default function SwitchVariantDemo() {
    const [variant, setVariant] = React.useState<string>('primary')

    return (
        <>
            <div className='absolute left-4 top-4 inline-flex min-w-32 flex-col gap-1'>
                <Select
                    selectedKey={variant}
                    onSelectionChange={(v) => setVariant(v as string)}
                    items={items.map((item) => ({ value: item, label: item }))}
                >
                    {(item) => (
                        <Select.Item id={item.value} textValue={item.value}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </div>
            <Switch defaultSelected variant={variant as keyof typeof Switch}>
                Label
            </Switch>
        </>
    )
}
