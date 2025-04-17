import React from 'react'

import { IconBrandFigma, IconBrandGithub, IconLoader } from 'hq-icons'

import { IconsController } from '@/components/controllers/icons'
import IconList from '@/components/controllers/icons/icon-list'
import Icons from '@/components/controllers/icons/icons.json'
import { Hero, HeroButton, HeroContent, HeroDescription, HeroHeader, HeroTitle } from '@/components/layouts/hero'
import CLI from '@/components/mdx/cli'
import { Container, Link } from '@/components/ui'

export async function generateMetadata() {
    return {
        title: 'Icons'
    }
}

type SearchParams = Promise<{ [key: string]: string }>

export default async function IconsPage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    const query = searchParams.q || ''

    const filteredIcons = Icons.filter(
        (i) =>
            i.name.toLowerCase().includes(query?.toLowerCase()) ||
            i.keywords.some((k) => k.includes(query?.toLowerCase()))
    )

    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>ICONS</HeroTitle>
                    <HeroDescription>
                        This UI Icon Library for Project, currently only for
                        <strong className='text-fg'> React</strong>, most of these icons are forked from{' '}
                        <Link
                            target='_blank'
                            className='font-semibold text-base text-fg hover:text-primary'
                            href='https://tabler.io/icons'
                        >
                            Tabler Icons
                        </Link>{' '}
                        and{' '}
                        <Link
                            target='_blank'
                            className='font-semibold text-base text-fg hover:text-primary'
                            href='https://lucide.dev/icons/'
                        >
                            Lucide Icons
                        </Link>
                        <br />
                        This Icon Libray used for{' '}
                        <Link className='font-semibold text-base text-fg hover:text-primary' target='_blank' href='/'>
                            HQ UI
                        </Link>
                    </HeroDescription>
                    <HeroContent>
                        <CLI command='install' items={['hq-icons']} noMessage className='min-w-60' />
                        <HeroButton target='_blank' href='https://github.com/hq-kit/icons'>
                            <IconBrandGithub />
                            Source
                        </HeroButton>
                        <HeroButton
                            variant='success'
                            target='_blank'
                            href='https://www.figma.com/design/LyFwmlkNXFWIkCUMvxTLQm/Cleon-UI-Icons?m=auto&t=9IvlYFDBF75mOpKf-6'
                        >
                            <IconBrandFigma />
                            Figma
                        </HeroButton>
                    </HeroContent>
                </HeroHeader>
            </Hero>
            <IconsController />
            <Container className='flex w-full flex-col py-4'>
                <React.Suspense
                    fallback={
                        <div className='flex min-h-96 w-full items-center justify-center'>
                            <IconLoader className='size-7 animate-spin' />
                        </div>
                    }
                >
                    <IconList items={filteredIcons} />
                </React.Suspense>
            </Container>
        </>
    )
}
