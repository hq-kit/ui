'use client'

import { IconCloud, IconCloudOff, IconLock, IconLockOpen, IconMoon, IconSun } from 'hq-icons'

import { Toggle } from '@/components/ui'

export default function ToggleGroupVariantDemo() {
    return (
        <div className='flex flex-col space-y-6'>
            <Toggle.Group variant='solid' defaultSelectedKeys={['left']} selectionMode='multiple'>
                <Toggle>{({ isSelected }) => (isSelected ? <IconMoon /> : <IconSun />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconLock /> : <IconLockOpen />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconCloud /> : <IconCloudOff />)}</Toggle>
            </Toggle.Group>
            <Toggle.Group variant='outline' defaultSelectedKeys={['center']} selectionMode='multiple'>
                <Toggle>{({ isSelected }) => (isSelected ? <IconMoon /> : <IconSun />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconLock /> : <IconLockOpen />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconCloud /> : <IconCloudOff />)}</Toggle>
            </Toggle.Group>
            <Toggle.Group variant='ghost' defaultSelectedKeys={['right']} selectionMode='multiple'>
                <Toggle>{({ isSelected }) => (isSelected ? <IconMoon /> : <IconSun />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconLock /> : <IconLockOpen />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconCloud /> : <IconCloudOff />)}</Toggle>
            </Toggle.Group>
        </div>
    )
}
