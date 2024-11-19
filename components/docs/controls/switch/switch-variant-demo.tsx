'use client'

import React from 'react'

import OptionPreview from 'components/option-preview'

import { Select, Switch } from '@/components/ui'

const items = ['primary', 'secondary', 'success', 'danger', 'warning', 'muted']
export default function SwitchVariantDemo() {
    const [variant, setVariant] = React.useState<string>('primary')

    return (
        <>
            <OptionPreview>
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
            </OptionPreview>
            <Switch defaultSelected variant={variant as keyof typeof Switch}>
                Label
            </Switch>
        </>
    )
}
