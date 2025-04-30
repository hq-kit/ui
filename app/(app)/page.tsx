import { IconBrandCleon } from 'hq-icons'

import { Hero, HeroButton, HeroTitle } from '@/components/layouts/hero'
import CLI from '@/components/mdx/cli'
import Sink from '@/components/sink'

export default function Page() {
    return (
        <>
            <Hero>
                <header>
                    <HeroTitle>HQ KIT - UI Components</HeroTitle>
                    <div className='block max-w-2xl text-base text-muted-fg leading-relaxed lg:text-xl'>
                        This UI Design is basically built on top of{' '}
                        <strong className='font-medium text-fg'>React Aria Components</strong>, all about keeping the
                        web accessible. Easy to customize and just copy & paste into your React projects.
                    </div>
                </header>
                <main className='mt-6 flex flex-col gap-4 lg:flex-row lg:items-end'>
                    <CLI noMessage command='init' className='min-w-60' />
                    <HeroButton href='/docs/getting-started/installation'>
                        <IconBrandCleon />
                        Components
                    </HeroButton>
                </main>
            </Hero>
            <Sink />
        </>
    )
}
