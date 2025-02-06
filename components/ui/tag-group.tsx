'use client'

import React from 'react'

import { IconX } from 'hq-icons'
import type {
    TagGroupProps as TagGroupPrimitiveProps,
    TagListProps,
    TagProps as TagPrimitiveProps
} from 'react-aria-components'
import {
    Button,
    TagGroup as TagGroupPrimitive,
    TagList as TagListPrimitive,
    Tag as TagPrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { badgeStyles } from './badge'
import { Description, Label } from './field'
import { cn, cr, ctr, focusStyles } from './utils'

const { variant, shape: badgeShape } = badgeStyles.variants

const variants = {
    primary: {
        base: [
            variant.primary,
            '**:[[slot=remove]]:data-hovered:bg-primary **:[[slot=remove]]:data-hovered:text-primary-fg'
        ],
        selected: [
            'bg-primary dark:data-hovered:bg-primary dark:bg-primary data-hovered:bg-primary ring-primary ring-inset text-primary-fg dark:text-primary-fg data-hovered:text-primary-fg',
            '**:[[slot=remove]]:data-hovered:bg-primary-fg/50 **:[[slot=remove]]:data-hovered:text-primary'
        ]
    },
    secondary: {
        base: [
            variant.secondary,
            '**:[[slot=remove]]:data-hovered:bg-secondary-fg **:[[slot=remove]]:data-hovered:text-secondary'
        ],
        selected: [
            'bg-secondary dark:bg-secondary/80 dark:text-secondary-fg text-secondary-fg ring-secondary ring-inset',
            '**:[[slot=remove]]:data-hovered:bg-secondary-fg/80 **:[[slot=remove]]:data-hovered:text-secondary'
        ]
    },
    success: {
        base: [
            variant.success,
            '**:[[slot=remove]]:data-hovered:bg-success **:[[slot=remove]]:data-hovered:text-success-fg'
        ],
        selected: [
            'bg-success dark:bg-success ring-success ring-inset dark:text-success-fg dark:data-hovered:bg-success data-hovered:bg-success text-success-fg data-hovered:text-success-fg',
            '**:[[slot=remove]]:data-hovered:bg-success-fg/80 **:[[slot=remove]]:data-hovered:text-success'
        ]
    },
    warning: {
        base: [
            variant.warning,
            '**:[[slot=remove]]:data-hovered:bg-warning **:[[slot=remove]]:data-hovered:text-warning-fg'
        ],
        selected: [
            'bg-warning dark:data-hovered:bg-warning dark:bg-warning dark:text-bg data-hovered:bg-warning text-warning-fg data-hovered:text-warning-fg',
            '**:[[slot=remove]]:data-hovered:bg-warning-fg/80 **:[[slot=remove]]:data-hovered:text-warning'
        ]
    },
    danger: {
        base: [
            variant.danger,
            '**:[[slot=remove]]:data-hovered:bg-danger **:[[slot=remove]]:data-hovered:text-danger-fg'
        ],
        selected: [
            'bg-danger dark:bg-danger dark:data-hovered:bg-danger/90 data-hovered:bg-danger text-danger-fg ring-danger dark:text-danger-fg data-hovered:text-danger-fg',
            '**:[[slot=remove]]:data-hovered:bg-danger-fg/80 **:[[slot=remove]]:data-hovered:text-danger'
        ]
    },
    dark: {
        base: [
            variant.dark,
            '**:[[slot=remove]]:data-hovered:bg-fg/40 **:[[slot=remove]]:data-hovered:text-fg'
        ],
        selected: [
            'bg-fg/90 dark:bg-fg/90 dark:data-hovered:bg-fg/90 data-hovered:bg-fg/90 text-bg dark:text-bg data-hovered:text-bg',
            '**:[[slot=remove]]:data-hovered:bg-bg/80 **:[[slot=remove]]:data-hovered:text-fg'
        ]
    }
}

type RestrictedVariant = 'primary' | 'secondary' | 'dark'

type Variant = keyof typeof variant

type Shape = keyof typeof badgeShape

type TagGroupContextValue = {
    variant: Variant
    shape: Shape
}

const TagGroupContext = React.createContext<TagGroupContextValue>({
    variant: 'primary',
    shape: 'rounded'
})

interface TagGroupProps extends TagGroupPrimitiveProps {
    variant?: Variant
    shape?: 'rounded' | 'sharp' | 'circle'
    errorMessage?: string
    label?: string
    description?: string
    ref?: React.RefObject<HTMLDivElement>
}

const TagGroup = ({ children, ref, ...props }: TagGroupProps) => {
    return (
        <TagGroupPrimitive
            ref={ref}
            className={cn('flex flex-col flex-wrap', props.className)}
            {...props}
        >
            <TagGroupContext.Provider
                value={{
                    variant: props.variant || 'primary',
                    shape: props.shape || 'rounded'
                }}
            >
                {props.label && <Label className='mb-1'>{props.label}</Label>}
                {children}
                {props.description && <Description>{props.description}</Description>}
            </TagGroupContext.Provider>
        </TagGroupPrimitive>
    )
}

const TagList = <T extends object>({ className, ...props }: TagListProps<T>) => {
    return <TagListPrimitive {...props} className={ctr(className, 'flex flex-wrap gap-2')} />
}

const tagStyles = tv({
    extend: focusStyles,
    base: [badgeStyles.base, 'tag cursor-pointer'],
    variants: {
        isFocused: { true: 'ring-1' },
        isDisabled: { true: 'cursor-default opacity-50' },
        allowsRemoving: { true: 'pr-1' }
    }
})

interface TagProps extends TagPrimitiveProps {
    variant?: Variant
    shape?: Shape
}

const Tag = ({ className, variant, shape, ...props }: TagProps) => {
    const textValue = typeof props.children === 'string' ? props.children : undefined
    const groupContext = React.useContext(TagGroupContext)

    return (
        <TagPrimitive
            textValue={textValue}
            {...props}
            className={cr(className, (_, renderProps) => {
                const finalVariant = variant || groupContext.variant
                const finalShape = shape || groupContext.shape

                return tagStyles({
                    ...renderProps,
                    className: cn([
                        variants[finalVariant]?.base,
                        badgeShape[finalShape],
                        renderProps.isSelected ? variants[finalVariant].selected : undefined
                    ])
                })
            })}
        >
            {({ allowsRemoving }) => {
                return (
                    <>
                        {props.children as React.ReactNode}
                        {allowsRemoving && (
                            <Button
                                slot='remove'
                                className='data-focus-visible:ring-primary -mr-0.5 grid size-3.5 place-content-center rounded-lg data-focus-visible:ring-1 data-focused:outline-none'
                            >
                                <IconX className='size-3 shrink-0' />
                            </Button>
                        )}
                    </>
                )
            }}
        </TagPrimitive>
    )
}

Tag.Group = TagGroup
Tag.List = TagList

export { Tag }
export type { RestrictedVariant, TagGroupProps, TagListProps, TagProps }
