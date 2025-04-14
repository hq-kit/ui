import { IconBrandCleon } from 'hq-icons'

import { Hero, HeroButton, HeroContent, HeroDescription, HeroHeader, HeroTitle } from '@/components/layouts/hero'
import CLI from '@/components/mdx/cli'
import Sink from '@/components/sink'

export default async function Page() {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>HQ KIT</HeroTitle>
                    <HeroDescription>
                        This UI Design is basically built on top of{' '}
                        <strong className='text-fg'>React Aria Components</strong>, all about keeping the web
                        accessible. Easy to customize and just copy & paste into your React projects.
                    </HeroDescription>
                </HeroHeader>
                <HeroContent>
                    <CLI noMessage command='init' className='min-w-60' />
                    <HeroButton href='/docs/getting-started/installation'>
                        <IconBrandCleon />
                        Components
                    </HeroButton>
                </HeroContent>
            </Hero>
            <Sink />
        </>
    )
}
