import { IconsController } from '@/components/controllers/icons'
import IconList from '@/components/controllers/icons/icon-list'
import Icons from '@/components/controllers/icons/icons.json'
import {
    Hero,
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroHeader,
    HeroTitle,
    MainContent
} from '@/components/layouts/hero'
import { CLI } from '@/components/mdx/cli'
import { Link } from '@/components/ui'
import { IconBrandFigma, IconBrandGithub, IconLoader } from 'hq-icons'
import { Suspense } from 'react'

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
                        <strong className='text-foreground'> React</strong>, most of these icons are forked from{' '}
                        <Link
                            target='_blank'
                            className='font-semibold text-base text-foreground hover:text-primary'
                            href='https://tabler.io/icons'
                        >
                            Tabler Icons
                        </Link>{' '}
                        and{' '}
                        <Link
                            target='_blank'
                            className='font-semibold text-base text-foreground hover:text-primary'
                            href='https://lucide.dev/icons/'
                        >
                            Lucide Icons
                        </Link>
                        <br />
                        This Icon Libray used for{' '}
                        <Link
                            className='font-semibold text-base text-foreground hover:text-primary'
                            target='_blank'
                            href='/'
                        >
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
                            variant='outline'
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
            <MainContent className='flex w-full flex-col'>
                <Suspense
                    fallback={
                        <div className='flex min-h-96 w-full items-center justify-center'>
                            <IconLoader className='size-7 animate-spin' />
                        </div>
                    }
                >
                    <IconList items={filteredIcons} />
                </Suspense>
            </MainContent>
        </>
    )
}
