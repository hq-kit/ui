'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { DocsNavigation } from '@/components/layouts/docs-navigation'
import { NavbarDropdown } from '@/components/layouts/navbar'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, Link, Sheet } from '@/components/ui'
import { type Docs, getAllDocs } from '@/lib/hooks/docs'
import { IconBrandCleon, IconMenu, IconSearch } from 'hq-icons'

export function ResponsiveAside({ action }: { action: (openCmd: boolean) => void }) {
    const [openAside, setOpenAside] = useState(false)
    const pathname = usePathname()
    const [docs, setDocs] = useState<Docs[]>([])

    useEffect(() => {
        const getDocs = async () => {
            setDocs(await getAllDocs())
        }
        getDocs()
    }, [])

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => setOpenAside(false), [pathname])
    return (
        <nav className='sticky top-0 z-10 bg-bg/10 backdrop-blur-lg md:hidden md:h-14'>
            <div className='flex items-center justify-between py-2 pr-2 pl-4'>
                <Button
                    aria-label='Open Menu.'
                    className='-ml-2 [&_[data-slot=icon]]:text-fg'
                    variant='outline'
                    icon
                    onPress={() => {
                        setOpenAside(true)
                    }}
                >
                    <IconMenu />
                </Button>
                <Link className='-mr-6 rounded focus:outline-none' href='/' aria-label='Logo'>
                    <IconBrandCleon className='size-6' />
                </Link>
                <div className='flex items-center gap-x-1'>
                    <Button onPress={() => action(true)} icon variant='outline' aria-label='Open command palette'>
                        <IconSearch />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
            <Sheet.Content
                aria-label='Docs Menu'
                isOpen={openAside}
                onOpenChange={setOpenAside}
                side='left'
                closeButton={true}
            >
                <Sheet.Header className='mb-4 flex flex-row justify-between py-2'>
                    <NavbarDropdown />
                </Sheet.Header>
                <Sheet.Body className='px-6'>
                    <DocsNavigation docs={docs} />
                </Sheet.Body>
            </Sheet.Content>
        </nav>
    )
}
