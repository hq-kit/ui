'use client'

import { Collection, type CollectionProps } from '@react-aria/collections'
import { IconUser } from 'hq-icons'
import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

interface AvatarGroupProps<T extends object> extends CollectionProps<T> {
    className?: string
}

const AvatarGroup = <T extends object>({ className, ...props }: AvatarGroupProps<T>) => {
    return (
        <div
            className={cn(
                '-space-x-2 flex items-center justify-center **:data-avatar:ring **:data-avatar:ring-border',
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
        '-outline-offset-1 text-center outline-1 outline-fg/20'
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
    alt = 'avatar',
    className,
    ...props
}: AvatarProps & ComponentPropsWithoutRef<'img'>) => {
    const [error, setError] = useState(!src)

    function handleError() {
        setError(true)
    }

    useEffect(() => {
        setError(!src)
    }, [src])

    if (error) {
        return (
            <span data-avatar={true} className={avatar({ shape, size, className })}>
                <FallbackImage initials={initials} alt={alt} />
            </span>
        )
    }
    return (
        // biome-ignore lint/a11y/useAltText: <explanation>
        <img
            src={src}
            alt={alt}
            onError={handleError}
            data-avatar={true}
            className={avatar({ shape, size, className })}
            {...props}
        />
    )
}

const FallbackImage = ({ initials, alt }: { initials?: string; alt: string }) => {
    return initials ? (
        <svg
            className='size-full select-none bg-bg fill-current p-[5%] font-medium text-[48px] uppercase'
            viewBox='0 0 100 100'
            aria-hidden='true'
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
            className='size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase'
            viewBox='0 0 100 100'
            aria-hidden='true'
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
        <IconUser className='size-full place-self-center bg-bg p-1.5' />
    )
}

export { Avatar, AvatarGroup, type AvatarProps }
