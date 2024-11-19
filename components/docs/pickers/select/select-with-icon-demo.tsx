'use client'

import { IconLaptop, IconMonitor, IconPhone } from 'cleon-icons'

import { Select } from '@/components/ui'

export default function SelectWithIconDemo() {
    return (
        <Select aria-label='Devices' defaultSelectedKey='desktop' placeholder='Select a device'>
            <Select.Item id='desktop' textValue='Desktop'>
                <IconMonitor />
                Desktop
            </Select.Item>
            <Select.Item id='laptop' textValue='Laptop'>
                <IconLaptop />
                Laptop
            </Select.Item>
            <Select.Item id='smartphone' textValue='Smartphone'>
                <IconPhone />
                Smartphone
            </Select.Item>
        </Select>
    )
}
