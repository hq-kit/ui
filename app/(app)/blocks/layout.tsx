import type { ReactNode } from 'react'
import { IconBlocks, IconGitPullRequest } from '@tabler/icons-react'
import { Hero, HeroButton, HeroTitle } from '@/components/layouts/hero'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Hero>
                <header>
                    <HeroTitle>HQ Blocks</HeroTitle>
                    <div className='block max-w-2xl text-base text-muted-foreground leading-relaxed lg:text-xl'>
                        Ready to use, clean and responsive, fully customizable blocks for your React Projects.
                    </div>
                </header>
                <main className='mt-6 flex flex-col gap-4 lg:flex-row lg:items-end'>
                    <HeroButton href='#'>
                        <IconBlocks />
                        Add Block
                    </HeroButton>
                    <HeroButton href='#' variant='outline'>
                        <IconGitPullRequest /> Block Request
                    </HeroButton>
                </main>
            </Hero>
            {children}
        </>
    )
}
