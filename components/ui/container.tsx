import type { HTMLAttributes, Ref } from 'react'

import { type VariantProps, tv } from 'tailwind-variants'

const containerStyle = tv({
    base: '@container mx-auto w-full max-w-7xl lg:max-w-(--breakpoint-xl) 2xl:max-w-(--breakpoint-2xl)',
    variants: {
        variant: {
            constrained: 'sm:px-6 lg:px-8',
            'padded-content': 'px-4 sm:px-6 lg:px-8'
        }
    },
    defaultVariants: {
        variant: 'padded-content'
    }
})

interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerStyle> {
    ref?: Ref<HTMLDivElement>
}

const Container = ({ className, variant, ref, ...props }: ContainerProps) => (
    <div className={containerStyle({ variant, className })} {...props} ref={ref} />
)

export { Container }
export type { ContainerProps }
