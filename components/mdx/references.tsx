'use client'

import type { FC, SVGProps } from 'react'

import {
    IconBell,
    IconBrandAdobe,
    IconBrandAstro,
    IconBrandCleon,
    IconBrandEmbla,
    IconBrandFramer,
    IconBrandGithub,
    IconBrandInertia,
    IconBrandLaravel,
    IconBrandNextjs,
    IconBrandRemix,
    IconBrandTailwind,
    IconBrandTiptap,
    IconBrandVite,
    IconChartBar,
    IconCommand,
    IconTextCursorInput
} from 'hq-icons'
import { Menu, MenuItem } from 'react-aria-components'

import { buttonStyles } from '@/components/ui'

function extractAndFormat(url: string): string {
    const match = url.match(/\/([^/]+)\.html/)
    if (match) {
        return match[1].replace(/([a-z])([A-Z])/g, '$1 $2')
    }
    return ''
}

export function DocRefs({ references }: { references: string[] }) {
    const urls = references.map((url: string) => {
        let title = ''
        let icon: FC<SVGProps<SVGSVGElement>>

        switch (true) {
            case url.includes('react-spectrum'):
                title = extractAndFormat(url)
                icon = IconBrandAdobe
                break
            case url.includes('laravel'):
                title = 'Laravel'
                icon = IconBrandLaravel
                break
            case url.includes('vite'):
                title = 'Vite'
                icon = IconBrandVite
                break
            case url.includes('inertia'):
                title = 'Inertia.Js'
                icon = IconBrandInertia
                break
            case url.includes('recharts'):
                title = 'Recharts'
                icon = IconChartBar
                break
            case url.includes('remix.run'):
                title = 'Remix'
                icon = IconBrandRemix
                break
            case url.includes('nextjs'):
                title = 'Next.Js'
                icon = IconBrandNextjs
                break
            case url.includes('astro'):
                title = 'Astro'
                icon = IconBrandAstro
                break
            case url.includes('hq'):
                title = 'HQ Icons'
                icon = IconBrandCleon
                break
            case url.includes('cleon'):
                title = 'HQ Icons'
                icon = IconBrandCleon
                break
            case url.includes('framer'):
                title = 'Framer Motion'
                icon = IconBrandFramer
                break
            case url.includes('docs/components'):
                title = 'Internal'
                icon = IconBrandCleon
                break
            case url.includes('tailwind'):
                title = 'Tailwind CSS'
                icon = IconBrandTailwind
                break
            case url.includes('github'):
                title = 'Github'
                icon = IconBrandGithub
                break
            case url.includes('cmdk'):
                title = 'CMDK'
                icon = IconCommand
                break
            case url.includes('sonner'):
                title = 'Sonner'
                icon = IconBell
                break
            case url.includes('embla'):
                title = 'Embla Carousel'
                icon = IconBrandEmbla
                break
            case url.includes('tiptap'):
                title = 'Tiptap'
                icon = IconBrandTiptap
                break
            case url.includes('lexical'):
                title = 'Lexical'
                icon = IconTextCursorInput
                break
            default:
                icon = () => null
        }

        return {
            url,
            title,
            icon
        }
    })

    return (
        <Menu className='not-prose flex gap-x-2' aria-label='Link References' items={urls}>
            {(item: { url: string; title: string; icon: FC<SVGProps<SVGSVGElement>> }) => (
                <MenuItem
                    target='_blank'
                    className={buttonStyles({
                        variant: 'outline',
                        size: 'xs',
                        className: 'data-focus-visible:outline-2'
                    })}
                    id={item.url}
                    href={item.url}
                >
                    <item.icon />
                    {item.title === 'Props Reference' ? (
                        <span>
                            Props <span className='hidden sm:inline'>Reference</span>
                        </span>
                    ) : (
                        <span>{item.title}</span>
                    )}
                </MenuItem>
            )}
        </Menu>
    )
}
