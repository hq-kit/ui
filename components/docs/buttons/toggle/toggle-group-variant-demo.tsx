'use client'

import { IconCloud, IconCloudOff, IconLock, IconLockOpen, IconMoon, IconSun } from '@tabler/icons-react'
import { Toggle } from '@/components/ui'

export default function ToggleGroupVariantDemo() {
    return (
        <div className='flex flex-col space-y-6'>
            <Toggle.Group defaultSelectedKeys={['left']} selectionMode='multiple' variant='default'>
                <Toggle>{({ isSelected }) => (isSelected ? <IconMoon /> : <IconSun />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconLock /> : <IconLockOpen />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconCloud /> : <IconCloudOff />)}</Toggle>
            </Toggle.Group>
            <Toggle.Group defaultSelectedKeys={['center']} selectionMode='multiple' variant='outline'>
                <Toggle>{({ isSelected }) => (isSelected ? <IconMoon /> : <IconSun />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconLock /> : <IconLockOpen />)}</Toggle>
                <Toggle>{({ isSelected }) => (isSelected ? <IconCloud /> : <IconCloudOff />)}</Toggle>
            </Toggle.Group>
        </div>
    )
}
