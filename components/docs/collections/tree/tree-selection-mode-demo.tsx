'use client'

import { useState } from 'react'
import type { Key } from 'react-aria-components'

import { Select, Tree, TreeItem } from '@/components/ui'

export default function TreeSelectionModeDemo() {
    const [selectionMode, setSelectionMode] = useState<Key | null>('multiple')

    return (
        <div className='space-y-6'>
            <Select label='Selection mode' selectedKey={selectionMode} onSelectionChange={setSelectionMode}>
                <Select.Item id='none'>None</Select.Item>
                <Select.Item id='single'>Single</Select.Item>
                <Select.Item id='multiple'>Multiple</Select.Item>
            </Select>
            <Tree
                selectionBehavior='toggle'
                className='w-full'
                aria-label='Files'
                selectionMode={selectionMode as 'none' | 'single' | 'multiple'}
            >
                <TreeItem id='documents' textValue='Documents'>
                    <TreeItem.Content>Documents</TreeItem.Content>
                    <TreeItem id='project' textValue='Project'>
                        <TreeItem.Content>Project</TreeItem.Content>
                        <TreeItem id='report' textValue='Weekly Report'>
                            <TreeItem.Content>Weekly Report</TreeItem.Content>
                        </TreeItem>
                    </TreeItem>
                </TreeItem>
                <TreeItem id='photos' textValue='Photos'>
                    <TreeItem.Content>Photos</TreeItem.Content>
                    <TreeItem id='one' textValue='Image 1'>
                        <TreeItem.Content>Image 1</TreeItem.Content>
                    </TreeItem>
                    <TreeItem id='two' textValue='Image 2'>
                        <TreeItem.Content>Image 2</TreeItem.Content>
                    </TreeItem>
                </TreeItem>
            </Tree>
        </div>
    )
}
