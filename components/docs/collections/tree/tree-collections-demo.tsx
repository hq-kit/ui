'use client'

import { Tree, TreeItem } from '@/components/ui'
import {
    IconArchive,
    IconDisc,
    IconFile,
    IconFileMusic,
    IconFileTypeDocx,
    IconFileTypeJpg,
    IconFileTypePdf,
    IconFileTypePng,
    IconFileTypeTxt,
    IconFolder,
    IconFolderOpen,
    IconMovie
} from '@tabler/icons-react'
import { Collection } from 'react-aria-components'

export default function TreeCollectionsDemo() {
    const renderItem = (item: FileNode, i: number) => (
        <TreeItem key={i} textValue={item.file}>
            <TreeItem.Content>
                {({ isExpanded, hasChildItems }) => (
                    <>
                        {isExpanded ? (
                            <IconFolderOpen />
                        ) : hasChildItems ? (
                            <IconFolder />
                        ) : (
                            <FileIcon ext={item.file.substring(item.file.lastIndexOf('.') + 1)} />
                        )}
                        {item.file}
                    </>
                )}
            </TreeItem.Content>
            {item.children && (
                <Collection items={item.children}>{item.children.map((file, i) => renderItem(file, i))}</Collection>
            )}
        </TreeItem>
    )

    return (
        <Tree className='w-full' aria-label='Files' selectionMode='multiple' items={files}>
            {files.map((file, i) => renderItem(file, i))}
        </Tree>
    )
}

export type FileNode = {
    file: string
    children?: FileNode[]
}

const files: FileNode[] = [
    {
        file: 'Downloads',
        children: [
            {
                file: 'Compressed',
                children: [
                    { file: 'laravel.zip' },
                    { file: 'react.zip' },
                    { file: 'nextjs.rar' },
                    { file: 'ubuntu.iso' }
                ]
            },
            {
                file: 'Docs',
                children: [{ file: 'resume.pdf' }, { file: 'cv.pdf' }]
            },
            {
                file: 'Programs',
                children: [{ file: 'chrome.exe' }, { file: 'vscode.deb' }]
            }
        ]
    },
    {
        file: 'Documents',
        children: [
            {
                file: 'Thesis',
                children: [
                    { file: 'Bab 1.docx' },
                    { file: 'Bab 2.docx' },
                    { file: 'Bab 3.docx' },
                    { file: 'Cover.docx' }
                ]
            },
            { file: 'Secret.txt' },
            { file: 'Project.jpg' }
        ]
    },
    {
        file: 'Music',
        children: [
            { file: 'The Beatles.mp3' },
            { file: 'Led Zeppelin.mp3' },
            { file: 'Pink Floyd.mp3' },
            { file: 'Queen.wav' },
            { file: 'The Rolling Stones.mp3' },
            { file: 'The Who.wav' }
        ]
    },
    {
        file: 'Videos',
        children: [
            {
                file: 'Mission Impossible',
                children: [
                    { file: 'Mission Impossible 1.mp4' },
                    { file: 'Mission Impossible 2.mp4' },
                    { file: 'Mission Impossible 3.mp4' }
                ]
            },
            { file: 'Star Wars.mp4' },
            { file: 'Avengers - Endgame.mkv' }
        ]
    }
]

const FileIcon = ({ ext }: { ext: string }) => {
    let Icon: any
    switch (ext) {
        case 'jpg':
            Icon = IconFileTypeJpg
            break
        case 'png':
            Icon = IconFileTypePng
            break
        case 'txt':
            Icon = IconFileTypeTxt
            break
        case 'docx':
            Icon = IconFileTypeDocx
            break
        case 'pdf':
            Icon = IconFileTypePdf
            break
        case 'mp3':
        case 'wav':
            Icon = IconFileMusic
            break
        case 'mp4':
        case 'mkv':
            Icon = IconMovie
            break
        case 'zip':
        case 'rar':
            Icon = IconArchive
            break
        case 'iso':
            Icon = IconDisc
            break
        default:
            Icon = IconFile
            break
    }
    return <Icon />
}
