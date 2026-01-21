import { IconApp } from '@/components/icons'
import { Hero, HeroTitle, MainContent } from '@/components/layouts/hero'
import { CLI } from '@/components/mdx/cli'
import Sink from '@/components/sink'
import { buttonVariants } from '@/components/ui/button-group'
import { Link } from '@/components/ui/link'

export default function Page() {
  return (
    <>
      <Hero>
        <header>
          <HeroTitle>HQ KIT - UI Components</HeroTitle>
          <div className='block max-w-2xl text-base text-muted-foreground leading-relaxed lg:text-xl'>
            This UI Design is basically built on top of{' '}
            <strong className='font-medium text-foreground'>React Aria Components</strong>, all about keeping the web
            accessible. Easy to customize and just copy & paste into your React projects.
          </div>
        </header>
        <main className='mt-6 flex flex-col gap-4 lg:flex-row lg:items-center'>
          <div className='relative -mt-4 w-xs'>
            <CLI command='install' items='hq-ui' />
          </div>
          <Link className={buttonVariants({ size: 'lg' })} href='/docs/getting-started/installation'>
            <IconApp />
            Components
          </Link>
        </main>
      </Hero>
      <MainContent>
        <Sink />
      </MainContent>
    </>
  )
}
