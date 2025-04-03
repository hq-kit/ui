'use client'

import React from 'react'

import { IconBrandArch, IconBrandDebian, IconBrandFedora, IconBrandUbuntu } from 'hq-icons'

import { SelectionBox } from '@/components/ui'

export default function SelectionBoxControlledDemo() {
    const [singleValue, setSingleValue] = React.useState<string>('')
    const [multiValue, setMultiValue] = React.useState<string[]>([])
    return (
        <div className='flex flex-col gap-4'>
            <SelectionBox
                orientation='horizontal'
                selectionMode='single'
                label='Linux Distro'
                value={singleValue}
                onChange={setSingleValue}
            >
                <SelectionBox.Item prefix={<IconBrandUbuntu />} value='ubuntu'>
                    Ubuntu
                </SelectionBox.Item>
                <SelectionBox.Item prefix={<IconBrandDebian />} value='debian'>
                    Debian
                </SelectionBox.Item>
                <SelectionBox.Item prefix={<IconBrandFedora />} value='fedora'>
                    Fedora
                </SelectionBox.Item>
                <SelectionBox.Item prefix={<IconBrandArch />} value='arch'>
                    Arch
                </SelectionBox.Item>
            </SelectionBox>
            <SelectionBox
                orientation='horizontal'
                selectionMode='multiple'
                label='Linux Distro'
                value={multiValue}
                onChange={setMultiValue}
            >
                <SelectionBox.Item prefix={<IconBrandUbuntu />} value='ubuntu'>
                    Ubuntu
                </SelectionBox.Item>
                <SelectionBox.Item prefix={<IconBrandDebian />} value='debian'>
                    Debian
                </SelectionBox.Item>
                <SelectionBox.Item prefix={<IconBrandFedora />} value='fedora'>
                    Fedora
                </SelectionBox.Item>
                <SelectionBox.Item prefix={<IconBrandArch />} value='arch'>
                    Arch
                </SelectionBox.Item>
            </SelectionBox>
            <code>single_value: {JSON.stringify(singleValue)}</code>
            <code>multi_value: {JSON.stringify(multiValue)}</code>
        </div>
    )
}
