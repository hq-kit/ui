'use client'

import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { Heading, type HeadingProps, Link, type LinkProps } from 'react-aria-components'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'

const Hero = ({ children }: { children: ReactNode }) => (
  <div className='relative isolate overflow-hidden bg-background'>
    <div
      aria-hidden='true'
      className='absolute inset-x-0 -top-10 -z-10 hidden transform-gpu overflow-hidden blur-3xl sm:-top-56 sm:block'
    >
      <div
        className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-info to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75 dark:opacity-[0.17]'
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }}
      />
    </div>
    <svg
      aria-hidden='true'
      className='mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] absolute inset-0 -z-10 hidden h-full w-full stroke-muted sm:block'
    >
      <defs>
        <pattern
          height={200}
          id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
          patternUnits='userSpaceOnUse'
          width={200}
          x='50%'
          y={-1}
        >
          <path d='M.5 200V.5H200' fill='none' />
        </pattern>
      </defs>
      <rect fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)' height='100%' strokeWidth={0} width='100%' />
    </svg>
    <Container className='border-b pt-10 pb-6 lg:py-16 xl:border-x'>{children}</Container>
  </div>
)

const HeroHeader = ({ children, ...props }: { children: ReactNode }) => <header {...props}>{children}</header>

const HeroTitle = ({ children, className, ...props }: HeadingProps) => (
  <Heading
    className={cn('mb-2 max-w-xl whitespace-nowrap font-bold text-2xl lg:mb-6 lg:text-5xl', className)}
    level={1}
    {...props}
  >
    {children}
  </Heading>
)

const HeroDescription = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('block max-w-2xl text-base text-muted-foreground leading-relaxed lg:text-xl', className)}
    {...props}
  >
    {children}
  </div>
)

const HeroContent = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={cn('mt-6 flex flex-col gap-4 lg:flex-row lg:items-end', className)}>
    {children}
  </div>
)

interface HeroButtonProps extends LinkProps, VariantProps<typeof buttonVariants> {}

const HeroButton = ({ children, className, variant = 'default', size = 'lg', ...props }: HeroButtonProps) => (
  <Link
    className={cn(
      buttonVariants({
        size: size,
        variant: variant
      }),
      className
    )}
    {...props}
  >
    {children}
  </Link>
)

const MainContent = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <Container className={cn('py-6 xl:border-x', className)} constrained {...props}>
    {children}
  </Container>
)

export { Hero, HeroButton, HeroContent, HeroDescription, HeroHeader, HeroTitle, MainContent }
