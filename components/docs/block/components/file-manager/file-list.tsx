import * as React from 'react'

import {
    IconArchive,
    IconDisc,
    IconFileImage,
    IconFileMusic,
    IconFileText,
    IconFileVideo,
    IconFolder
} from 'hq-icons'
import { Collection } from 'react-aria-components'

import { Tree, TreeItem } from '@/components/ui'

export type FileNode = {
    file: string
    children?: FileNode[]
}

const filesInDownloads: FileNode[] = [
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

const filesInDocuments: FileNode[] = [
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

const filesInMusic: FileNode[] = [
    { file: 'The Beatles.mp3' },
    { file: 'Led Zeppelin.mp3' },
    { file: 'Pink Floyd.mp3' },
    { file: 'Queen.wav' },
    { file: 'The Rolling Stones.mp3' },
    { file: 'The Who.wav' }
]

const filesInVideos: FileNode[] = [
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

export const rootFolders: FileNode[] = [
    {
        file: 'Downloads',
        children: filesInDownloads
    },
    {
        file: 'Documents',
        children: filesInDocuments
    },
    {
        file: 'Music',
        children: filesInMusic
    },
    {
        file: 'Videos',
        children: filesInVideos
    }
]

export function mapFilePaths(nodes: FileNode[], parentPath: string = ''): string[] {
    let paths: string[] = []
    for (const node of nodes) {
        const currentPath = parentPath ? `${parentPath}/${node.file}` : node.file
        if (node.children) {
            paths = paths.concat(mapFilePaths(node.children, currentPath))
        } else {
            paths.push(currentPath)
        }
    }
    return paths
}

export const getFileIcon = (ext: string) => {
    let Icon = IconFolder
    switch (ext) {
        case 'jpg':
        case 'png':
            Icon = IconFileImage
            break
        case 'txt':
        case 'docx':
        case 'pdf':
            Icon = IconFileText
            break
        case 'mp3':
        case 'wav':
            Icon = IconFileMusic
            break
        case 'mp4':
        case 'mkv':
            Icon = IconFileVideo
            break
        case 'zip':
        case 'rar':
            Icon = IconArchive
            break
        case 'iso':
            Icon = IconDisc
            break
        default:
        case 'folder':
            Icon = IconFolder
            break
    }
    return <Icon />
}

export function FileList() {
    const renderItem = (item: FileNode): React.ReactNode => {
        return (
            <TreeItem key={item.file} textValue={item.file}>
                <TreeItem.Content>
                    {item.children && <TreeItem.Indicator />}
                    <TreeItem.Checkbox />
                    <TreeItem.Label>{item.file}</TreeItem.Label>
                </TreeItem.Content>
                {item.children && <Collection items={item.children}>{renderItem}</Collection>}
            </TreeItem>
        )
    }
    return (
        <Tree aria-label='Files' selectionMode='multiple' items={rootFolders}>
            {rootFolders.map(renderItem)}
        </Tree>
    )
}