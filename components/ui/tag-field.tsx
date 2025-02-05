'use client'

import { useCallback, useState } from 'react'

import type { Key } from 'react-aria-components'
import { Group, TextField } from 'react-aria-components'
import type { ListData } from 'react-stately'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { FieldProps } from './field'
import { Description, Input, Label } from './field'
import type { RestrictedVariant, TagGroupProps } from './tag-group'
import { Tag } from './tag-group'
import { cn } from './utils'

const tagFieldsStyles = tv({
    base: ['relative flex min-h-10 flex-row flex-wrap items-center transition'],
    variants: {
        appearance: {
            outline: [
                'rounded-lg border px-1',
                'has-[input[data-focused=true]]:border-primary/70',
                'has-[input[data-invalid=true][data-focused=true]]:border-danger has-[input[data-invalid=true]]:border-danger has-[input[data-invalid=true]]:ring-danger/20',
                'has-[input[data-focused=true]]:ring-primary/20 has-[input[data-focused=true]]:ring-4'
            ],
            plain: ['has-[input[data-focused=true]]:border-transparent']
        }
    }
})

interface TagItemProps {
    id: number
    name: string
}

interface TagFieldProps extends Pick<TagGroupProps, 'shape'>, FieldProps {
    variant?: RestrictedVariant
    isDisabled?: boolean
    max?: number
    className?: string
    children?: React.ReactNode
    name?: string
    list: ListData<TagItemProps>
    onItemInserted?: (tag: TagItemProps) => void
    onItemCleared?: (tag: TagItemProps | undefined) => void
    appearance?: 'outline' | 'plain'
}

const TagField = ({
    appearance = 'outline',
    name,
    className,
    list,
    onItemCleared,
    onItemInserted,
    ...props
}: TagFieldProps) => {
    const [isInvalid, setIsInvalid] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const existingTagCount = list.items.length
    const maxTags = props.max !== undefined ? props.max : Number.POSITIVE_INFINITY
    const maxTagsToAdd = maxTags - existingTagCount

    const insertTag = () => {
        const tagNames = inputValue.split(/,/)
        if (maxTagsToAdd <= 0) {
            setIsInvalid(true)
            setInputValue('')
            const timeoutId = setTimeout(() => {
                setIsInvalid(false)
            }, 2000)

            return () => clearTimeout(timeoutId)
        }

        for (const tagName of tagNames.slice(0, maxTagsToAdd)) {
            const formattedName = tagName
                .trim()
                .replace(/\s+/g, ' ')
                .replace(/[\t\r\n]/g, '')

            if (
                formattedName &&
                !list.items.some(({ name }) => name.toLowerCase() === formattedName.toLowerCase())
            ) {
                const tag = {
                    id: (list.items.at(-1)?.id ?? 0) + 1,
                    name: formattedName
                }

                list.append(tag)
                onItemInserted?.(tag)
            }
        }

        setInputValue('')
    }

    const clearInvalidFeedback = () => {
        if (maxTags - list.items.length <= maxTagsToAdd) {
            setIsInvalid(false)
        }
    }

    const onRemove = (keys: Set<Key>) => {
        list.remove(...keys)

        const firstKey = [...keys][0]
        if (firstKey !== undefined) {
            onItemCleared?.(list.getItem(firstKey))
        }

        clearInvalidFeedback()
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault()
            insertTag()
        }

        if (e.key === 'Backspace' && inputValue === '') {
            popLast()
            clearInvalidFeedback()
        }
    }

    const popLast = useCallback(() => {
        if (list.items.length === 0) {
            return
        }

        const endKey = list.items[list.items.length - 1]!

        if (endKey !== null) {
            list.remove(endKey.id)
            onItemCleared?.(list.getItem(endKey.id))
        }
    }, [list, onItemCleared])

    return (
        <div className={cn('flex w-full flex-col gap-y-1.5', className)}>
            {props.label && <Label>{props.label}</Label>}
            <Group className={twJoin('flex flex-col', props.isDisabled && 'opacity-50')}>
                <Tag.Group
                    variant={props.variant}
                    shape={props.shape}
                    aria-label='List item inserted'
                    onRemove={onRemove}
                >
                    <div
                        className={cn(
                            tagFieldsStyles({ appearance }),
                            !props.isDisabled && 'has-[input[data-hovered=true]]:border-primary/60'
                        )}
                    >
                        <div className='flex flex-1 flex-wrap items-center'>
                            <Tag.List
                                items={list.items}
                                className={twJoin(
                                    list.items.length !== 0
                                        ? appearance === 'outline' && 'gap-1.5 px-1 py-1.5'
                                        : 'gap-0',
                                    props.shape === 'rounded' &&
                                        '[&_.tag]:rounded-[calc(var(--radius-lg)-4px)]',
                                    'outline-hidden [&_.tag]:cursor-default [&_.tag]:last:-mr-1'
                                )}
                            >
                                {(item) => <Tag>{item.name}</Tag>}
                            </Tag.List>
                            <TextField
                                isDisabled={props.isDisabled}
                                aria-label={
                                    props?.label ?? (props['aria-label'] || props.placeholder)
                                }
                                isInvalid={isInvalid}
                                onKeyDown={onKeyDown}
                                onChange={setInputValue}
                                value={inputValue}
                                className='flex-1'
                                {...props}
                            >
                                <Input
                                    className='inline'
                                    placeholder={
                                        maxTagsToAdd <= 0
                                            ? 'Remove one to add more'
                                            : props.placeholder
                                    }
                                />
                            </TextField>
                        </div>
                    </div>
                </Tag.Group>
                {name && (
                    <input
                        hidden
                        name={name}
                        value={list.items.map((i) => i.name).join(',')}
                        readOnly
                    />
                )}
            </Group>
            {props.description && <Description>{props.description}</Description>}
        </div>
    )
}

export { TagField }
export type { TagFieldProps, TagItemProps }
