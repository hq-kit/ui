'use client'

import { Header, Heading, type HeadingProps, type LinkProps } from 'react-aria-components'

import { buttonStyles, cn, Container, Link } from '@/components/ui'

const Hero = ({ children }: { children: React.ReactNode }) => (
    <div className='bg-bg relative isolate overflow-hidden'>
        <div
            aria-hidden='true'
            className='absolute inset-x-0 -top-10 -z-10 hidden transform-gpu overflow-hidden blur-3xl sm:-top-56 sm:block'
        >
            <div
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
                className='from-info to-primary relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-[0.17]'
            />
        </div>
        <svg
            aria-hidden='true'
            className='stroke-muted absolute inset-0 -z-10 hidden h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] sm:block'
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
            <rect
                fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)'
                width='100%'
                height='100%'
                strokeWidth={0}
            />
        </svg>
        <div className='border-b pt-10 pb-6 lg:py-16'>
            <Container>{children}</Container>
        </div>
    </div>
)

const HeroHeader = ({ children, ...props }: { children: React.ReactNode }) => (
    <Header {...props}>{children}</Header>
)

const HeroTitle = ({ children, className, ...props }: HeadingProps) => (
    <Heading
        level={1}
        className={cn('mb-2 max-w-xl text-2xl font-bold lg:mb-6 lg:text-5xl', className)}
        {...props}
    >
        {children}
    </Heading>
)

const HeroDescription = ({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'text-muted-fg block max-w-2xl text-base leading-relaxed lg:text-xl',
            className
        )}
        {...props}
    >
        {children}
    </div>
)

const HeroContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={cn('mt-6 flex flex-col gap-4 lg:flex-row lg:items-end', className)}>
        {children}
    </div>
)

interface HeroButtonProps extends LinkProps {
    variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'icon'
}

const HeroButton = ({
    children,
    className,
    variant = 'primary',
    size = 'lg',
    ...props
}: HeroButtonProps) => (
    <Link
        variant='unstyled'
        className={cn(
            buttonStyles({
                size: size,
                variant: variant
            }),
            'min-h-12 rounded-lg',
            className
        )}
        {...props}
    >
        {children}
    </Link>
)

export { Hero, HeroButton, HeroContent, HeroDescription, HeroHeader, HeroTitle }
