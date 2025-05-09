'use client'

import { type ReactNode, type RefObject, createContext, useContext } from 'react'

import { IconX } from 'hq-icons'
import type { TagGroupProps as RACTagGroupProps, TagListProps, TagProps } from 'react-aria-components'
import { Button, Tag as RACTag, TagGroup as RACTagGroup, TagList, composeRenderProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'
import { badgeStyle } from './badge'
import { Description, Label } from './form'

type TagGroupStyles = {
    variant: keyof Omit<typeof badgeStyle.variants.variant, 'outline'>
}

const TagGroupContext = createContext<TagGroupStyles>({
    variant: 'primary'
})

interface TagGroupProps extends Omit<RACTagGroupProps, 'children'> {
    variant?: TagGroupStyles['variant']
    errorMessage?: string
    label?: string
    description?: string
    ref?: RefObject<HTMLDivElement>
    className?: string
}

const TagGroup = <T extends object>({
    label,
    description,
    items,
    className,
    ref,
    children,
    renderEmptyState,
    ...props
}: TagGroupProps & TagListProps<T>) => {
    return (
        <RACTagGroup ref={ref} className={cn('flex flex-col flex-wrap', className)} {...props}>
            {label && <Label className='mb-1'>{label}</Label>}
            <TagGroupContext.Provider
                value={{
                    variant: props.variant || 'primary'
                }}
            >
                <TagList
                    items={items}
                    renderEmptyState={renderEmptyState}
                    className='flex flex-wrap gap-2 *:data-badge:bg-primary'
                >
                    {children}
                </TagList>
            </TagGroupContext.Provider>
            {description && <Description>{description}</Description>}
        </RACTagGroup>
    )
}

const tagStyle = tv({
    extend: badgeStyle,
    variants: {
        isSelected: { false: '!bg-(--bg)/10 !text-(--bg)' },
        isFocusVisible: {
            true: 'outline-0 ring-2 ring-primary ring-offset-2'
        },
        isDisabled: { true: 'cursor-default opacity-50', false: 'cursor-pointer' },
        allowsRemoving: { true: 'pr-1' }
    }
})

const Tag = (props: TagProps) => {
    const textValue = typeof props.children === 'string' ? props.children : undefined
    const groupContext = useContext(TagGroupContext)

    return (
        <RACTag
            textValue={textValue}
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                tagStyle({
                    ...renderProps,
                    variant: groupContext.variant,
                    className
                })
            )}
        >
            {({ allowsRemoving }) => {
                return (
                    <>
                        {props.children as ReactNode}
                        {allowsRemoving && (
                            <Button
                                slot='remove'
                                className='-mr-0.5 grid size-3.5 place-content-center rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-primary'
                            >
                                <IconX className='size-3 shrink-0' />
                            </Button>
                        )}
                    </>
                )
            }}
        </RACTag>
    )
}

Tag.Group = TagGroup
Tag.List = TagList

export { Tag }
export type { TagGroupProps, TagGroupStyles }
