'use client'

import { Separator, Toggle } from '@/components/ui'

export default function ToggleGroupVariantDemo() {
    return (
        <div className='flex flex-col gap-y-6'>
            <Toggle.Group variant='solid' defaultSelectedKeys={['left']} selectionMode='single'>
                <Toggle id='left'>Left</Toggle>
                <Toggle id='center'>Center</Toggle>
                <Toggle id='right'>Right</Toggle>
            </Toggle.Group>
            <Separator />
            <Toggle.Group variant='outline' defaultSelectedKeys={['center']} selectionMode='single'>
                <Toggle id='left'>Left</Toggle>
                <Toggle id='center'>Center</Toggle>
                <Toggle id='right'>Right</Toggle>
            </Toggle.Group>
            <Separator />
            <Toggle.Group variant='ghost' defaultSelectedKeys={['right']} selectionMode='single'>
                <Toggle id='left'>Left</Toggle>
                <Toggle id='center'>Center</Toggle>
                <Toggle id='right'>Right</Toggle>
            </Toggle.Group>
        </div>
    )
}
