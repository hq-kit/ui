'use client'

import { IconCheck, IconChevronDown, IconX } from 'hq-icons'
import { Children, type KeyboardEvent, type ReactNode, isValidElement, useEffect, useRef, useState } from 'react'
import type { ComboBoxProps, GroupProps, Key, ListBoxItemProps, ListBoxProps, Selection } from 'react-aria-components'
import {
    Button,
    ComboBox,
    Group,
    Input,
    ListBox,
    ListBoxItem,
    Popover,
    Tag,
    TagGroup,
    TagList,
    Text,
    composeRenderProps
} from 'react-aria-components'

import { cn, fuzzyMatch } from '@/lib/utils'
import { Description, FieldGroup, type FieldProps, Label } from './field'

interface MultiSelectProps<T>
    extends ListBoxProps<T>,
        Pick<ComboBoxProps<T & { selectedKeys: Selection }>, 'isRequired' | 'validate' | 'validationBehavior'>,
        FieldProps,
        Pick<GroupProps, 'isDisabled' | 'isInvalid'> {
    className?: string
    errorMessage?: string
}

const MultiSelect = <T extends object>({ className, children, ...props }: MultiSelectProps<T>) => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState('')
    const [selectedKeys, onSelectionChange] = useState<Selection>(new Set(props.selectedKeys))

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setInputValue('')
    }, [props?.selectedKeys, selectedKeys])

    const addItem = (e: Key | null) => {
        if (!e) return
        onSelectionChange?.((s) => new Set([...s, e!]))
        // @ts-expect-error incompatible type Key and Selection
        props.onSelectionChange?.((s) => new Set([...s, e!]))
    }

    const removeItem = (e: Set<Key>) => {
        onSelectionChange?.((s) => new Set([...s].filter((i) => i !== e.values().next().value)))
        props.onSelectionChange?.(
            // @ts-expect-error incompatible type Key and Selection
            (s) => new Set([...s].filter((i) => i !== e.values().next().value))
        )
    }

    const onKeyDownCapture = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && inputValue === '') {
            onSelectionChange?.((s) => new Set([...s].slice(0, -1)))
            // @ts-expect-error incompatible type Key and Selection
            props.onSelectionChange?.((s) => new Set([...s].slice(0, -1)))
        }
    }

    const items = props.items
        ? // @ts-expect-error unknown type
          props.items.map((item) => ({ id: item.id, name: item.name }))
        : Children.map(
              children as ReactNode,
              (child) => isValidElement(child) && child.props
              // @ts-expect-error unknown type
          )?.map((item) => ({ id: item.id, name: item.textValue }))

    return (
        <Group
            isInvalid={props.isInvalid}
            isDisabled={props.isDisabled}
            className={composeRenderProps(className, (className) =>
                cn('group flex h-fit flex-col gap-y-1.5', className)
            )}
            ref={triggerRef}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {props.label && (
                        <Label onClick={() => inputRef.current?.focus()} isInvalid={isInvalid} isDisabled={isDisabled}>
                            {props.label}
                        </Label>
                    )}
                    <FieldGroup
                        isDisabled={isDisabled}
                        isInvalid={isInvalid}
                        className='flex h-fit min-h-10 flex-wrap items-center py-1'
                    >
                        <TagGroup onRemove={removeItem} aria-hidden aria-label='Selected'>
                            <TagList
                                className='flex flex-1 flex-wrap gap-1 pl-2 empty:pl-0'
                                items={items.filter((i: { id: Key }) => [...selectedKeys].includes(i.id))}
                            >
                                {(item: { id: Key; name: string }) => (
                                    <Tag
                                        isDisabled={isDisabled}
                                        id={item.id}
                                        className={({ isFocusVisible }) =>
                                            cn(
                                                'inline-flex items-center justify-between gap-1 rounded-lg border px-2 py-0.5 text-sm outline-hidden',
                                                isInvalid
                                                    ? 'border-danger/70 bg-danger/10 text-danger'
                                                    : 'border-primary/70 bg-primary/10 text-primary',
                                                isFocusVisible &&
                                                    `ring-2 ${isInvalid ? 'ring-danger/70' : 'ring-primary/70'}`
                                            )
                                        }
                                        textValue={item.name}
                                    >
                                        {item.name}
                                        <Button
                                            slot='remove'
                                            className={({ isHovered, isPressed }) =>
                                                cn(
                                                    '-mr-1 flex size-4 cursor-pointer items-center justify-center rounded-lg outline-hidden',
                                                    isHovered && 'bg-primary/70 text-primary-fg',
                                                    isPressed && 'bg-primary text-primary-fg'
                                                )
                                            }
                                        >
                                            <IconX className='size-3 shrink-0' />
                                        </Button>
                                    </Tag>
                                )}
                            </TagList>
                        </TagGroup>
                        <ComboBox
                            defaultFilter={fuzzyMatch}
                            isRequired={props.isRequired}
                            validate={props.validate}
                            validationBehavior={props.validationBehavior}
                            isInvalid={isInvalid}
                            isDisabled={isDisabled}
                            className='flex-1 px-2 text-sm/7'
                            aria-label='Search'
                            onSelectionChange={addItem}
                            inputValue={inputValue}
                            onInputChange={setInputValue}
                        >
                            <div className='flex flex-row items-center'>
                                <Input
                                    ref={inputRef}
                                    onKeyDownCapture={onKeyDownCapture}
                                    placeholder='Pick something'
                                    className='w-full text-sm/7 outline-hidden'
                                />
                                <Button
                                    aria-label='Chevron'
                                    className='ml-auto inline-flex w-auto flex-1 items-center justify-center rounded-lg text-muted-fg outline-hidden'
                                >
                                    <IconChevronDown className={cn('group-has-open:-rotate-180 size-4 transition')} />
                                </Button>
                            </div>
                            <Popover
                                style={{
                                    minWidth: triggerRef.current?.offsetWidth,
                                    width: triggerRef.current?.offsetWidth
                                }}
                                triggerRef={triggerRef}
                                className={({ isEntering, isExiting }) =>
                                    cn(
                                        'group max-h-72 w-full max-w-(--trigger-width) overflow-y-auto rounded-lg border bg-bg p-1 shadow outline-hidden transition',
                                        isEntering &&
                                            'fade-in zoom-in-95 placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 animate-in',
                                        isExiting &&
                                            'fade-out zoom-out-95 placement-left:slide-out-to-right-2 placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2 animate-out'
                                    )
                                }
                            >
                                <ListBox
                                    className='grid w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-lg outline-hidden'
                                    selectionMode='multiple'
                                    renderEmptyState={() => <div>No Items</div>}
                                    {...props}
                                >
                                    {children}
                                </ListBox>
                            </Popover>
                        </ComboBox>
                    </FieldGroup>
                    {props.description && <Description>{props.description}</Description>}
                    {props.errorMessage && isInvalid && (
                        <Description className='text-danger text-sm/5'>{props.errorMessage}</Description>
                    )}
                </>
            )}
        </Group>
    )
}

const MultiSelectItem = ({ className, children, ...props }: ListBoxItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined

    return (
        <ListBoxItem
            textValue={textValue}
            {...props}
            className={composeRenderProps(
                className,
                (className, { isHovered, isFocused, isDisabled, isFocusVisible }) =>
                    cn(
                        'group relative col-span-full grid grid-cols-subgrid',
                        'select-none rounded-md px-2 py-1.5 text-base sm:text-sm/6',
                        '*:[svg]:my-1 *:[svg]:mr-2 **:[svg]:size-4',
                        { 'bg-primary text-primary-fg': isFocused || isFocusVisible || isHovered },
                        isDisabled && 'pointer-events-none opacity-50',
                        className
                    )
            )}
        >
            {({ isSelected }) => (
                <>
                    {isSelected && <IconCheck data-slot='checked' />}
                    {typeof children === 'string' ? (
                        <Text slot='label' className='col-start-2'>
                            {children}
                        </Text>
                    ) : (
                        children
                    )}
                </>
            )}
        </ListBoxItem>
    )
}

MultiSelect.Item = MultiSelectItem

export { MultiSelect }
