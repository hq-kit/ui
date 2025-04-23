'use client'

import * as icons from 'hq-icons'
import { useSearchParams } from 'next/navigation'
import { Button } from 'react-aria-components'
import { renderToString } from 'react-dom/server'

import { Menu, Tooltip, toast } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { FC, SVGProps } from 'react'

export default function IconList({ items }: { items: { keywords: string[]; name: string }[] }) {
    const searchParams = useSearchParams()
    const size = searchParams.get('s') || '5'
    const stroke = searchParams.get('t') || '2'

    return (
        <div className='flex flex-wrap justify-around gap-4'>
            {items.map((item, i) => (
                <Menu key={i}>
                    <Tooltip delay={200}>
                        <Button
                            className={cn(
                                'flex size-10 cursor-pointer items-center justify-center rounded-lg outline-hidden',
                                'hover:bg-primary/10 hover:text-primary',
                                'ring-primary focus-visible:ring-2',
                                'pressed:bg-primary/10 pressed:text-primary'
                            )}
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: SvgIcon({ name: item.name as keyof typeof icons, size, stroke })
                                }}
                            />
                        </Button>
                        <Tooltip.Content>{item.name}</Tooltip.Content>
                    </Tooltip>
                    <Menu.Content aria-label={item.name}>
                        <Menu.Header className='text-xs'>{item.name}</Menu.Header>
                        <Menu.Item
                            onAction={async () =>
                                await copySvgToClipboard(
                                    SvgIcon({
                                        name: item.name as keyof typeof icons,
                                        size,
                                        stroke
                                    })
                                )
                            }
                        >
                            <icons.IconFileCode />
                            <Menu.Label>Copy SVG</Menu.Label>
                        </Menu.Item>
                        <Menu.Item
                            onAction={async () =>
                                await copyJsxSvgToClipboard(
                                    SvgIcon({
                                        name: item.name as keyof typeof icons,
                                        size,
                                        stroke
                                    })
                                )
                            }
                        >
                            <icons.IconBrandReact />
                            <Menu.Label>Copy JSX</Menu.Label>
                        </Menu.Item>
                        <Menu.Item onAction={async () => await copyJsxToClipboard(item.name)}>
                            <icons.IconTextCursorInput />
                            <Menu.Label>Copy Name</Menu.Label>
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item
                            onAction={async () =>
                                await downloadSvg(
                                    SvgIcon({
                                        name: item.name as keyof typeof icons,
                                        size,
                                        stroke
                                    }),
                                    item.name
                                )
                            }
                        >
                            <icons.IconDownload />
                            <Menu.Label>Download SVG</Menu.Label>
                        </Menu.Item>
                        <Menu.Item
                            onAction={async () =>
                                await downloadPng(
                                    SvgIcon({
                                        name: item.name as keyof typeof icons,
                                        size,
                                        stroke
                                    }),
                                    item.name
                                )
                            }
                        >
                            <icons.IconDownload />
                            <Menu.Label>Download PNG</Menu.Label>
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            ))}
        </div>
    )
}

const SvgIcon = ({
    name,
    size = '5',
    stroke = '2'
}: {
    name: keyof typeof icons
    size: string
    stroke: string
}): string => {
    const HQIcon = icons[name] as FC<SVGProps<SVGSVGElement>>

    return renderToString(<HQIcon className={`size-${size}`} />).replaceAll(
        'stroke-width="2"',
        `stroke-width="${stroke}"`
    )
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
        for (const attr of Array.from(node.attributes)) {
            const camelCaseName = attr.name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
            if (attr.name !== camelCaseName) {
                node.setAttribute(camelCaseName, attr.value)
                node.removeAttribute(attr.name)
            }
        }
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

            return `<${tagName}${attributes ? ` ${attributes}` : ''}>${children}</${tagName}>`
        }
        if (node.nodeType === Node.TEXT_NODE) {
            return (node as Text).textContent || ''
        }
        return ''
    }

    return transformNode(svgElement)
}
