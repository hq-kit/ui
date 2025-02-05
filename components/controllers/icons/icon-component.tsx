'use client'

import * as icons from 'hq-icons'
import { renderToString } from 'react-dom/server'

import {
    copyJsxSvgToClipboard,
    copyJsxToClipboard,
    copySvgToClipboard,
    downloadPng,
    downloadSvg
} from '@/components/controllers/icons/copy-to-clipboard'
import { Icon } from '@/components/controllers/icons/icon'
import { Menu } from '@/components/ui'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string
    size: '4' | '5' | '6' | '7'
    stroke: '1' | '2'
}

export const IconComponent = ({ name, size, stroke }: IconProps) => {
    const svgIcon = renderToString(
        <Icon icon={name as keyof typeof icons} className={`size-${size}`} />
    ).replaceAll('stroke-width="2"', `stroke-width="${stroke}"`)
    return (
        <Menu>
            <Menu.Trigger
                aria-label={name}
                id={name}
                className='data-hovered:bg-muted data-pressed:ring-primary flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent transition data-focused:outline-none data-pressed:ring-2'
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: svgIcon
                    }}
                />
            </Menu.Trigger>
            <Menu.Content showArrow>
                <Menu.Header separator className='text-xs'>
                    {name}
                </Menu.Header>
                <Menu.Item
                    onAction={() =>
                        copySvgToClipboard({
                            name: name,
                            size: size,
                            stroke: stroke
                        })
                    }
                >
                    <icons.IconFileCode /> <Menu.Label>Copy SVG</Menu.Label>
                </Menu.Item>
                <Menu.Item
                    onAction={() =>
                        copyJsxSvgToClipboard({
                            name: name,
                            size: size,
                            stroke: stroke
                        })
                    }
                >
                    <icons.IconBrandReact /> <Menu.Label>Copy JSX</Menu.Label>
                </Menu.Item>
                <Menu.Item onAction={() => copyJsxToClipboard(name)}>
                    <icons.IconTextCursorInput /> <Menu.Label>Copy Name</Menu.Label>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item onAction={() => downloadSvg(svgIcon, name)}>
                    <icons.IconDownload />
                    <Menu.Label>Download SVG</Menu.Label>
                </Menu.Item>
                <Menu.Item onAction={async () => await downloadPng(svgIcon, name)}>
                    <icons.IconDownload />
                    <Menu.Label>Download PNG</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
