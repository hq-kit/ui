'use client'

import { IconEye, IconEyeClosed } from 'hq-icons'

import { Toggle } from '@/components/ui'

export default function ToggleSizeDemo() {
    return (
        <div className='flex flex-wrap gap-2'>
            <Toggle icon size='xs'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon size='sm'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon size='md'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon size='lg'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon shape='circle' size='xs'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon shape='circle' size='sm'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon shape='circle' size='md'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
            <Toggle icon shape='circle' size='lg'>
                {({ isSelected }) => <>{isSelected ? <IconEye /> : <IconEyeClosed />}</>}
            </Toggle>
        </div>
    )
}
