'use client'

import { IconFileImage, IconFileText, IconFolder, IconFolderOpen } from 'hq-icons'

import { Tree, TreeItem } from '@/components/ui'

export default function TreeWithIconDemo() {
    return (
        <Tree className='w-full' aria-label='Files'>
            <TreeItem id='documents' textValue='Documents'>
                <TreeItem.Content>
                    {({ isExpanded }) => (
                        <>
                            {isExpanded ? <IconFolderOpen /> : <IconFolder />}
                            Documents
                        </>
                    )}
                </TreeItem.Content>
                <TreeItem id='project' textValue='Project'>
                    <TreeItem.Content>
                        {({ isExpanded }) => (
                            <>
                                {isExpanded ? <IconFolderOpen /> : <IconFolder />}
                                Project
                            </>
                        )}
                    </TreeItem.Content>
                    <TreeItem id='report' textValue='Weekly Report'>
                        <TreeItem.Content>
                            <IconFileText />
                            Weekly Report
                        </TreeItem.Content>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
            <TreeItem id='photos' textValue='Photos'>
                <TreeItem.Content>
                    {({ isExpanded }) => (
                        <>
                            {isExpanded ? <IconFolderOpen /> : <IconFolder />}
                            Photos
                        </>
                    )}
                </TreeItem.Content>
                <TreeItem id='one' textValue='Image 1'>
                    <TreeItem.Content>
                        <IconFileImage />
                        Image 1
                    </TreeItem.Content>
                </TreeItem>
                <TreeItem id='two' textValue='Image 2'>
                    <TreeItem.Content>
                        <IconFileImage />
                        Image 2
                    </TreeItem.Content>
                </TreeItem>
            </TreeItem>
        </Tree>
    )
}
