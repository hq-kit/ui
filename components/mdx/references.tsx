'use client'

import { buttonStyle } from '@/components/ui'

import {
    IconApp,
    IconBrandAdobe,
    IconBrandAstro,
    IconBrandEmbla,
    IconBrandGithub,
    IconBrandInertia,
    IconBrandLaravel,
    IconBrandMotion,
    IconBrandNextjs,
    IconBrandRemix,
    IconBrandTailwind,
    IconBrandVite
} from '@/components/icons'
import { type Icon, IconBell, IconChartBar, IconCommand, IconForms } from '@tabler/icons-react'
import type { FC, SVGProps } from 'react'
import { Menu, MenuItem } from 'react-aria-components'

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
        let icon: FC<SVGProps<SVGSVGElement>> | Icon

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
                icon = IconApp
                break
            case url.includes('motion'):
                title = 'Motion'
                icon = IconBrandMotion
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
            case url.includes('embla'):
                title = 'Embla Carousel'
                icon = IconBrandEmbla
                break
            case url.includes('lexical'):
                title = 'Lexical'
                icon = IconForms
                break
            case url.includes('sonner'):
                title = 'Sonner'
                icon = IconBell
                break
            default:
                icon = IconApp
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
                    className={buttonStyle({
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
