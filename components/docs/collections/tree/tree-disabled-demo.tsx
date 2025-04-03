'use client'

import { Tree, TreeItem } from '@/components/ui'

export default function TreeDisabledDemo() {
    return (
        <Tree className='w-full' aria-label='Files'>
            <TreeItem id='documents' textValue='Documents'>
                <TreeItem.Content>Documents</TreeItem.Content>
                <TreeItem id='project' textValue='Project'>
                    <TreeItem.Content>Projects</TreeItem.Content>
                    <TreeItem id='report' textValue='Weekly Report'>
                        <TreeItem.Content>Weekly Report</TreeItem.Content>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
            <TreeItem id='photos' textValue='Photos' isDisabled>
                <TreeItem.Content>Photos</TreeItem.Content>
                <TreeItem id='one' textValue='Image 1'>
                    <TreeItem.Content>Image 1</TreeItem.Content>
                </TreeItem>
                <TreeItem id='two' textValue='Image 2'>
                    <TreeItem.Content>Image 2</TreeItem.Content>
                </TreeItem>
            </TreeItem>
        </Tree>
    )
}
