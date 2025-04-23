'use client'

import {
    IconBrandAdobe,
    IconBrandAstro,
    IconBrandCleon,
    IconBrandEmbla,
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
import type { FC, SVGProps } from 'react'
import { Menu, MenuItem } from 'react-aria-components'

import { buttonStyles } from '@/components/ui'

function extractAndFormat(url: string): string {
    const match = url.match(/\/([^/]+)\.html/)
    if (match) {
        return match[1].replace(/([a-z])([A-Z])/g, '$1 $2')
    }
    return ''
}

export const MotionIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width={300}
        height={300}
        viewBox='0 0 300 300'
        className='!size-4'
        data-slot='icon'
    >
        <path
            d='M129.98 98.88l2.632.006h2.972l3.232.016 3.292.005c3.485.005 6.97.018 10.454.03 2.357.006 4.713.01 7.069.014 5.79.011 11.58.028 17.369.049a82.373 82.373 0 01-4.582 9.93l-1.554 2.872-1.677 3.073-1.754 3.23c-4.381 8.036-8.878 16.004-13.41 23.956-4.96 8.74-9.7 17.593-14.384 26.483a288.135 288.135 0 01-3.633 6.638c-1.589 2.88-2.82 5.807-4.03 8.864-2.26 5.26-4.499 10.23-8.976 13.954-7.964 3.014-16.876 1.785-25.188 1.188-2.31-.096-4.62-.183-6.931-.26A489.858 489.858 0 0174 198c1.808-4.645 3.986-8.974 6.312-13.375.439-.83.877-1.662 1.328-2.518 3.924-7.388 8.045-14.657 12.19-21.923 4.351-7.66 8.534-15.406 12.67-23.184 4.854-9.123 9.789-18.192 14.875-27.187l1.678-2.971c4.44-7.811 4.44-7.811 6.927-7.962z'
            fill='#0F1115'
        />
        <path
            d='M94.172 98.902l2.068.005c2.17.005 4.34.018 6.51.03A4076.662 4076.662 0 01118 99c-1.184 3.807-2.508 7.188-4.512 10.633l-1.523 2.648-1.653 2.844A940.459 940.459 0 0095.5 142c-5.108 9.61-10.325 19.147-15.762 28.576C74.565 179.601 69.86 188.767 65 198H15a92.104 92.104 0 015.238-10.988l.961-1.732c.681-1.227 1.363-2.454 2.047-3.68 1.818-3.261 3.628-6.528 5.438-9.795l1.109-2a1900.422 1900.422 0 0010.082-18.493c1.552-2.869 3.106-5.738 4.66-8.606.966-1.784 1.93-3.568 2.895-5.353 1.33-2.455 2.667-4.904 4.008-7.353.376-.7.753-1.4 1.142-2.12 7.34-13.331 17.354-23.593 32.14-28.444 3.172-.607 6.224-.547 9.452-.534zM186 99h49c-1.405 4.216-2.611 7.41-4.688 11.203l-1.6 2.94L227 116.25l-1.78 3.257a2512.433 2512.433 0 01-11.19 20.25 1242.623 1242.623 0 00-6.942 12.586c-1.42 2.61-2.846 5.218-4.271 7.826-.702 1.287-1.402 2.575-2.099 3.864C192.595 179.05 185.241 189.518 169 196l-2.195 1.053c-3.549 1.198-6.55 1.172-10.293 1.142l-2.131-.008c-2.231-.011-4.462-.036-6.693-.062-1.52-.01-3.038-.02-4.557-.027-3.71-.022-7.42-.057-11.131-.098 4.102-8.354 8.343-16.563 13-24.625 4.982-8.714 9.789-17.512 14.5-26.375a1210.57 1210.57 0 0117.598-31.879c3.026-5.34 5.963-10.732 8.902-16.121z'
            fill='#101114'
        />
        <path
            d='M276.707 101.602c5.58 3.403 10.268 9.205 12.293 15.398 1.01 8.796-.04 15.971-5.578 23.004-5.773 6.228-10.86 8.142-19.235 8.559-7.073-.18-11.914-1.803-17.187-6.563-6.606-7.943-7.825-14.788-7-25 1.74-7.08 7.25-11.87 13-16 7.648-3.739 16.092-2.812 23.707.602z'
            fill='#0F1115'
        />
        <path
            d='M245 137l1.355 1.242c3.382 3.014 6.225 5.419 10.645 6.758v2c-5.197-1.361-8.214-3.304-12-7v-3z'
            fill='#1C1B14'
        />
    </svg>
)

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
            case url.includes('motion'):
                title = 'Motion'
                icon = MotionIcon
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
