'use client'

import { cn } from '@/lib/utils'
import {
    type Icon,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandReact,
    IconBrandTypescript,
    IconFile,
    IconJson
} from '@tabler/icons-react'
import type { FC, ReactNode, SVGProps } from 'react'

export function FileIcon({ lang, className }: { lang: string; className?: string }): ReactNode {
    let Icon: FC<SVGProps<SVGSVGElement>> | Icon
    switch (lang) {
        case 'js':
            Icon = IconBrandJavascript
            break
        case 'ts':
            Icon = IconBrandTypescript
            break
        case 'css':
            Icon = IconBrandCss3
            break
        case 'json':
            Icon = IconJson
            break
        case 'jsx':
        case 'tsx':
            Icon = IconBrandReact
            break
        default:
            Icon = IconFile
            break
    }
    return <Icon className={cn('size-5', className)} />
}
