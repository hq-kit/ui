'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Tree, TreeItem } from '@/components/ui'

export default function TreeControlledDemo() {
    const [selected, setSelected] = useState<Selection>(new Set([]))
    return (
        <div className='space-y-6'>
            <Tree
                aria-label='Files'
                className='w-full'
                onSelectionChange={setSelected}
                selectedKeys={selected}
                selectionMode='multiple'
            >
                <TreeItem id='documents' textValue='Documents'>
                    <TreeItem.Content>Documents</TreeItem.Content>
                    <TreeItem id='project' textValue='Project'>
                        <TreeItem.Content>Projects</TreeItem.Content>
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

            <pre>{JSON.stringify([...selected], null, 2)}</pre>
        </div>
    )
}
