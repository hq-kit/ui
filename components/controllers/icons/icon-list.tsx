'use client'

import React from 'react'

import * as icons from 'hq-icons'
import { useSearchParams } from 'next/navigation'
import { ListBox, ListBoxItem } from 'react-aria-components'
import { renderToString } from 'react-dom/server'

import { toast } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function IconList({ items }: { items: { keywords: string[]; name: string }[] }) {
    const searchParams = useSearchParams()
    const size = searchParams.get('s') || '5'
    const stroke = searchParams.get('t') || '2'

    return (
        <ListBox
            aria-label='Icons'
            layout='grid'
            className='flex flex-wrap justify-around gap-2'
            items={items}
            selectionMode='none'
        >
            {(item) => (
                <ListBoxItem
                    className={({ isHovered, isSelected, isFocusVisible, isFocused }) =>
                        cn(
                            'size-10 rounded-lg p-2 flex items-center justify-center',
                            isHovered && 'bg-primary/20 text-primary',
                            isFocusVisible && 'ring-2 ring-primary',
                            isFocused && 'ring-2 ring-primary',
                            isSelected && 'bg-primary text-primary-fg'
                        )
                    }
                    id={item.name}
                    textValue={item.name}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: SvgIcon({
                                name: item.name as keyof typeof icons,
                                size,
                                stroke
                            })
                        }}
                    />
                </ListBoxItem>
            )}
        </ListBox>
    )
}

// const Options = () => (
//     <Menu.Content aria-label={item.name}>
//         <Menu.Header className='text-xs'>{item.name}</Menu.Header>
//         <Menu.Item
//             onAction={async () =>
//                 await copySvgToClipboard(
//                     SvgIcon({
//                         name: item.name as keyof typeof icons,
//                         size,
//                         stroke
//                     })
//                 )
//             }
//         >
//             <icons.IconFileCode />
//             <Menu.Label>Copy SVG</Menu.Label>
//         </Menu.Item>
//         <Menu.Item
//             onAction={async () =>
//                 await copyJsxSvgToClipboard(
//                     SvgIcon({
//                         name: item.name as keyof typeof icons,
//                         size,
//                         stroke
//                     })
//                 )
//             }
//         >
//             <icons.IconBrandReact />
//             <Menu.Label>Copy JSX</Menu.Label>
//         </Menu.Item>
//         <Menu.Item onAction={async () => await copyJsxToClipboard(item.name)}>
//             <icons.IconTextCursorInput />
//             <Menu.Label>Copy Name</Menu.Label>
//         </Menu.Item>
//         <Menu.Separator />
//         <Menu.Item
//             onAction={async () =>
//                 await downloadSvg(
//                     SvgIcon({
//                         name: item.name as keyof typeof icons,
//                         size,
//                         stroke
//                     }),
//                     item.name
//                 )
//             }
//         >
//             <icons.IconDownload />
//             <Menu.Label>Download SVG</Menu.Label>
//         </Menu.Item>
//         <Menu.Item
//             onAction={async () =>
//                 await downloadPng(
//                     SvgIcon({
//                         name: item.name as keyof typeof icons,
//                         size,
//                         stroke
//                     }),
//                     item.name
//                 )
//             }
//         >
//             <icons.IconDownload />
//             <Menu.Label>Download PNG</Menu.Label>
//         </Menu.Item>
//     </Menu.Content>
// )

const SvgIcon = ({
    name,
    size = '5',
    stroke = '2'
}: {
    name: keyof typeof icons
    size: string
    stroke: string
}): string => {
    const HQIcon = icons[name] as React.FC<React.SVGProps<SVGSVGElement>>

    const svgIcon = renderToString(<HQIcon className={`size-${size}`} />).replaceAll(
        'stroke-width="2"',
        `stroke-width="${stroke}"`
    )
    return svgIcon
}

const slugify = (str: string) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
        .replace(/([A-Z])([A-Z])/g, '$1-$2') // insert hyphen between uppercase letters
        .replace(/([a-zA-Z])(\d)/g, '$1-$2') // Insert hyphen between letters and numbers
        .toLowerCase()
}

export const copySvgToClipboard = async (svgString: string) => {
    await navigator.clipboard.writeText(svgString).then(() => {
        toast('SVG copied to clipboard')
    })
}

export const copyJsxSvgToClipboard = async (svgString: string) => {
    await navigator.clipboard.writeText(convertSvgToJsx(svgString)).then(() => {
        toast('JSX copied to clipboard')
    })
}

export const copyJsxToClipboard = async (name: string) => {
    await navigator.clipboard.writeText(`<Icon${name} />`).then(() => {
        toast(`<Icon${name} /> copied to clipboard`)
    })
}

export const downloadSvg = async (svgString: string, name: string) => {
    const url = URL.createObjectURL(new Blob([svgString], { type: 'image/svg+xml' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `${slugify(name)}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

export const downloadPng = async (svgString: string, name: string) => {
    const img = new Image()
    const blob = new Blob([svgString], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    img.src = url
    img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const size = 256
        canvas.width = size
        canvas.height = size
        ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, size, size)
        const pngUrl = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = pngUrl
        link.download = `${slugify(name)}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }
    img.onerror = () => {
        console.error('Error loading image')
        URL.revokeObjectURL(url)
    }
}

function convertSvgToJsx(svgString: string): string {
    const parser = new DOMParser()
    const svgDocument = parser.parseFromString(svgString, 'image/svg+xml')
    const svgElement = svgDocument.documentElement

    function convertAttributes(node: Element): void {
        Array.from(node.attributes).forEach((attr) => {
            const camelCaseName = attr.name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
            if (attr.name !== camelCaseName) {
                node.setAttribute(camelCaseName, attr.value)
                node.removeAttribute(attr.name)
            }
        })
    }

    function transformNode(node: Node): string {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            convertAttributes(element)
            const tagName = element.tagName.toLowerCase()
            const attributes = Array.from(element.attributes)
                .map((attr) => `${attr.name}="${attr.value}"`)
                .join(' ')
            const children = Array.from(element.childNodes).map(transformNode).join('')

            return `<${tagName}${attributes ? ' ' + attributes : ''}>${children}</${tagName}>`
        } else if (node.nodeType === Node.TEXT_NODE) {
            return (node as Text).textContent || ''
        }
        return ''
    }

    return transformNode(svgElement)
}
