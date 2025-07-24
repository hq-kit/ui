'use client'

import { Container, Link, buttonStyle } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, ReactNode } from 'react'

import { Heading, type HeadingProps, type LinkProps } from 'react-aria-components'

const Hero = ({ children }: { children: ReactNode }) => (
    <div className='relative isolate overflow-hidden bg-background'>
        <div
            aria-hidden='true'
            className='-top-10 -z-10 sm:-top-56 absolute inset-x-0 hidden transform-gpu overflow-hidden blur-3xl sm:block'
        >
            <div
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
                className='-translate-x-1/2 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-info to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-[0.17]'
            />
        </div>
        <svg
            aria-hidden='true'
            className='-z-10 absolute inset-0 hidden h-full w-full stroke-muted [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] sm:block'
        >
            <defs>
                <pattern
                    x='50%'
                    y={-1}
                    id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
                    width={200}
                    height={200}
                    patternUnits='userSpaceOnUse'
                >
                    <path d='M.5 200V.5H200' fill='none' />
                </pattern>
            </defs>
            <rect fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)' width='100%' height='100%' strokeWidth={0} />
        </svg>
        <Container className='border-b pt-10 pb-6 lg:py-16 xl:border-x'>{children}</Container>
    </div>
)

const HeroHeader = ({ children, ...props }: { children: ReactNode }) => <header {...props}>{children}</header>

const HeroTitle = ({ children, className, ...props }: HeadingProps) => (
    <Heading level={1} className={cn('mb-2 max-w-xl font-bold text-2xl lg:mb-6 lg:text-5xl', className)} {...props}>
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

interface HeroButtonProps extends LinkProps {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    icon?: boolean
}

const HeroButton = ({
    children,
    className,
    variant = 'default',
    size = 'lg',
    icon = false,
    ...props
}: HeroButtonProps) => (
    <Link
        className={cn(
            buttonStyle({
                size: size,
                variant: variant,
                icon
            }),
            className
        )}
        {...props}
    >
        {children}
    </Link>
)

const MainContent = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <Container constrained className={cn('py-6 xl:border-x', className)} {...props}>
        {children}
    </Container>
)

export { Hero, HeroButton, HeroContent, HeroDescription, HeroHeader, HeroTitle, MainContent }
