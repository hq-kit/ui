'use client'

import React from 'react'

import { IconUser } from 'hq-icons'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'
import { Collection, type CollectionProps } from '@react-aria/collections'

interface AvatarGroupProps<T extends object> extends CollectionProps<T> {
    className?: string
}

const AvatarGroup = <T extends object>({ className, ...props }: AvatarGroupProps<T>) => {
    return (
        <div
            className={cn(
                '**:data-avatar:ring-border flex items-center justify-center -space-x-2 **:data-avatar:ring',
                '**:data-avatar:transition-transform **:data-avatar:hover:z-30 **:data-avatar:hover:scale-110',
                className
            )}
        >
            <Collection {...props} />
        </div>
    )
}

const avatar = tv({
    base: [
        'inline-grid shrink-0 items-center justify-center align-middle *:col-start-1 *:row-start-1',
        'outline-fg/20 text-center outline-1 -outline-offset-1'
    ],

    variants: {
        shape: {
            square: 'rounded-lg *:rounded-lg',
            circle: 'rounded-full *:rounded-full'
        },
        size: {
            xs: 'size-5',
            sm: 'size-6',
            md: 'size-8',
            lg: 'size-10',
            xl: 'size-12',
            '2xl': 'size-14',
            '3xl': 'size-16',
            '4xl': 'size-20',
            '5xl': 'size-24'
        }
    },
    defaultVariants: {
        shape: 'circle',
        size: 'md'
    }
})

interface AvatarProps extends VariantProps<typeof avatar> {
    src?: string | undefined
    initials?: string
    alt?: string
    className?: string
}

const Avatar = ({
    src,
    shape,
    size,
    initials,
    alt = '',
    className,
    ...props
}: AvatarProps & React.ComponentPropsWithoutRef<'img'>) => {
    const [error, setError] = React.useState(!src)

    function handleError() {
        setError(true)
    }

    React.useEffect(() => {
        setError(!src)
    }, [src])

    if (error) {
        return (
            <span data-avatar className={avatar({ shape, size, className })}>
                <FallbackImage initials={initials} alt={alt} />
            </span>
        )
    }
    return (
        <img
            src={src}
            alt={alt}
            onError={handleError}
            data-avatar
            className={avatar({ shape, size, className })}
            {...props}
        />
    )
}

const FallbackImage = ({ initials, alt }: { initials?: string; alt: string }) => {
    return initials ? (
        <svg
            className='bg-bg size-full fill-current p-[5%] text-[48px] font-medium uppercase select-none'
            viewBox='0 0 100 100'
            aria-hidden={alt ? undefined : 'true'}
        >
            {alt && <title>{alt}</title>}
            <text x='50%' y='50%' alignmentBaseline='middle' dominantBaseline='middle' textAnchor='middle' dy='.125em'>
                {initials.split(' ').slice(0, 2).length > 1
                    ? initials
                          .split(' ')
                          .slice(0, 2)
                          .map((part) => part.charAt(0))
                          .join('')
                    : initials.split('').slice(0, 2)}
            </text>
        </svg>
    ) : alt ? (
        <svg
            className='size-full fill-current p-[5%] text-[48px] font-medium uppercase select-none'
            viewBox='0 0 100 100'
            aria-hidden={alt ? undefined : 'true'}
        >
            {alt && <title>{alt}</title>}
            <text x='50%' y='50%' alignmentBaseline='middle' dominantBaseline='middle' textAnchor='middle' dy='.125em'>
                {alt.split(' ').slice(0, 2).length > 1
                    ? alt
                          .split(' ')
                          .slice(0, 2)
                          .map((part) => part.charAt(0))
                          .join('')
                    : alt.split('').slice(0, 2)}
            </text>
        </svg>
    ) : (
        <IconUser className='bg-bg size-full place-self-center p-1.5' />
    )
}

export { Avatar, AvatarGroup, type AvatarProps }
