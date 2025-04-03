import React from 'react'

import { IconBrandFigma, IconBrandGithub, IconLoader } from 'hq-icons'

import { IconsController } from '@/components/controllers/icons'
import { IconComponent } from '@/components/controllers/icons/icon-component'
import Icons from '@/components/controllers/icons/icons.json'
import {
    Hero,
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroHeader,
    HeroTitle
} from '@/components/layouts/hero'
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
    const size = searchParams.s || '5'
    const stroke = searchParams.t || '2'

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
                        <strong className='text-fg'> React</strong>, most of these icons are forked
                        from{' '}
                        <Link
                            target='_blank'
                            className='text-fg hover:text-primary font-semibold'
                            href='https://tabler.io/icons'
                        >
                            Tabler Icons
                        </Link>{' '}
                        and{' '}
                        <Link
                            target='_blank'
                            className='text-fg hover:text-primary font-semibold'
                            href='https://lucide.dev/icons/'
                        >
                            Lucide Icons
                        </Link>
                        <br />
                        This Icon Libray used for{' '}
                        <Link target='_blank' href='/'>
                            HQ UI
                        </Link>
                    </HeroDescription>
                    <HeroContent>
                        <CLI
                            command='install'
                            items={['hq-icons']}
                            noMessage
                            className='min-w-60'
                        />
                        <HeroButton target='_blank' href='https://github.com/hq-kit/icons'>
                            <IconBrandGithub className='size-5' />
                            Source
                        </HeroButton>
                        <HeroButton
                            variant='success'
                            target='_blank'
                            href='https://www.figma.com/design/LyFwmlkNXFWIkCUMvxTLQm/Cleon-UI-Icons?m=auto&t=9IvlYFDBF75mOpKf-6'
                        >
                            <IconBrandFigma className='size-5 [&_*]:stroke-1' />
                            Figma
                        </HeroButton>
                    </HeroContent>
                </HeroHeader>
            </Hero>
            <IconsController />
            <Container className='flex w-full flex-col items-start gap-8 py-4 lg:flex-row'>
                <React.Suspense
                    fallback={
                        <div className='flex min-h-96 items-center justify-center'>
                            <IconLoader className='animate-spin size-7' />
                        </div>
                    }
                >
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                        {filteredIcons.map((item, i) => (
                            <IconComponent
                                key={i}
                                size={size as '4' | '5' | '6' | '7'}
                                stroke={stroke as '1' | '2'}
                                name={item.name as string}
                            />
                        ))}
                    </div>
                </React.Suspense>
            </Container>
        </>
    )
}
