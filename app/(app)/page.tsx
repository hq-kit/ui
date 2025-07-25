import { IconApp } from '@/components/icons'
import { Hero, HeroButton, HeroTitle, MainContent } from '@/components/layouts/hero'
import { CLI } from '@/components/mdx/cli'
import Sink from '@/components/sink'

export default function Page() {
    return (
        <>
            <Hero>
                <header>
                    <HeroTitle>HQ KIT - UI Components</HeroTitle>
                    <div className='block max-w-2xl text-base text-muted-foreground leading-relaxed lg:text-xl'>
                        This UI Design is basically built on top of{' '}
                        <strong className='font-medium text-foreground'>React Aria Components</strong>, all about
                        keeping the web accessible. Easy to customize and just copy & paste into your React projects.
                    </div>
                </header>
                <main className='mt-6 flex flex-col gap-4 lg:flex-row lg:items-center'>
                    <CLI noMessage command='init' className='mb-2 min-w-60' />
                    <HeroButton href='/docs/getting-started/installation'>
                        <IconApp />
                        Components
                    </HeroButton>
                </main>
            </Hero>
            <MainContent>
                <Sink />
            </MainContent>
        </>
    )
}
