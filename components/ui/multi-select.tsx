'use client'

import {
    Children,
    type KeyboardEvent,
    type ReactNode,
    type Ref,
    isValidElement,
    useEffect,
    useRef,
    useState
} from 'react'

import { IconCheck, IconChevronDown, IconX } from 'hq-icons'
import type { ComboBoxProps, GroupProps, Key, ListBoxItemProps, ListBoxProps, Selection } from 'react-aria-components'
import {
    Button,
    ComboBox,
    Group,
    Input,
    ListBox,
    ListBoxItem,
    Tag,
    TagGroup,
    TagList,
    Text,
    composeRenderProps
} from 'react-aria-components'

import { cn, fuzzyMatch } from '@/lib/utils'
import { Description, FieldGroup, type FieldProps, Label } from './form'
import { PopoverContent } from './popover'

interface MultiSelectProps<T>
    extends ListBoxProps<T>,
        Pick<ComboBoxProps<T & { selectedKeys: Selection }>, 'isRequired' | 'validate' | 'validationBehavior'>,
        FieldProps,
        Pick<GroupProps, 'isDisabled' | 'isInvalid'> {
    className?: string
    errorMessage?: string
    maxItems?: number
    ref?: Ref<HTMLDivElement>
}

function mapToNewObject<T extends object>(array: T[]): { id: T[keyof T]; textValue: T[keyof T] }[] {
    return array.map((item) => {
        const idProperty = Object.keys(item).find((key) => key === 'id' || key === 'key')
        const textProperty = Object.keys(item).find((key) => key !== 'id' && key !== 'key')
        return {
            id: item[idProperty as keyof T],
            textValue: item[textProperty as keyof T]
        }
    })
}

const MultiSelect = <T extends object>({
    className,
    maxItems = Number.POSITIVE_INFINITY,
    children,
    ref,
    ...props
}: MultiSelectProps<T>) => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const triggerButtonRef = useRef<HTMLButtonElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)
    const [inputValue, setInputValue] = useState('')
    const [selectedKeys, onSelectionChange] = useState<Selection>(new Set(props.selectedKeys))

    const isMax = [...selectedKeys].length >= maxItems

    useEffect(() => {
        setInputValue('')
        return () => {
            inputRef.current?.focus()
        }
    }, [props?.selectedKeys, selectedKeys])

    const addItem = (e: Key | null) => {
        if (!e || isMax) return
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

    const parsedItems = props.items
        ? mapToNewObject(props.items as T[])
        : mapToNewObject(Children.map(children as ReactNode, (child) => isValidElement(child) && child.props) as T[])

    const availableItemsToSelect = props.items
        ? parsedItems.filter((item) => ![...selectedKeys].includes(item.id as Key))
        : parsedItems

    const filteredChildren = props.items
        ? parsedItems.filter((item) => ![...selectedKeys].includes(item.id as Key))
        : Children.map(children as ReactNode, (child) => isValidElement(child) && child.props)?.filter(
              (item: T & any) => ![...selectedKeys].includes(item.id)
          )
    return (
        <Group
            isInvalid={props.isInvalid}
            isDisabled={props.isDisabled}
            className={composeRenderProps(className, (className) =>
                cn('group flex h-fit flex-col gap-y-1.5', className)
            )}
            ref={ref}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {props.label && (
                        <Label onClick={() => inputRef.current?.focus()} isInvalid={isInvalid} isDisabled={isDisabled}>
                            {props.label}
                        </Label>
                    )}
                    <FieldGroup
                        ref={triggerRef}
                        isDisabled={isDisabled}
                        isInvalid={isInvalid}
                        className='flex h-fit min-h-9 flex-wrap items-center py-1'
                    >
                        <TagGroup onRemove={removeItem} aria-hidden aria-label='selected-items'>
                            <TagList
                                className='flex flex-1 flex-wrap gap-1 pl-2 empty:pl-0'
                                items={[...selectedKeys].map((key) => ({
                                    id: key,
                                    textValue: parsedItems.find((item) => item.id === key)?.textValue as string
                                }))}
                            >
                                {(item: { id: Key; textValue: Key }) => (
                                    <Tag
                                        isDisabled={isDisabled}
                                        className={({ isFocusVisible }) =>
                                            cn(
                                                'inline-flex items-center justify-between gap-1 rounded-md border px-2 py-0.5 text-sm outline-hidden',
                                                isInvalid
                                                    ? 'border-danger/70 bg-danger/10 text-danger'
                                                    : 'border-primary/70 bg-primary/10 text-primary',
                                                isFocusVisible &&
                                                    `ring-2 ${isInvalid ? 'ring-danger/70' : 'ring-primary/70'}`
                                            )
                                        }
                                        textValue={item.textValue as string}
                                    >
                                        {item.textValue as string}
                                        <Button
                                            slot='remove'
                                            className={({ isHovered, isPressed }) =>
                                                cn(
                                                    '-mr-1 flex size-4 cursor-pointer items-center justify-center rounded-md outline-hidden',
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
                            isReadOnly={isMax}
                            isDisabled={isDisabled}
                            className='flex-1 px-2 text-sm/7'
                            aria-label='Search'
                            onSelectionChange={addItem}
                            inputValue={inputValue}
                            onInputChange={isMax ? () => {} : setInputValue}
                        >
                            <div className='flex flex-row items-center'>
                                <Input
                                    onFocus={() => triggerButtonRef.current?.click()}
                                    ref={inputRef}
                                    onKeyDownCapture={onKeyDownCapture}
                                    placeholder={
                                        isMax
                                            ? 'Max items reached'
                                            : !availableItemsToSelect || !filteredChildren?.length
                                              ? ''
                                              : 'Pick some items'
                                    }
                                    className='w-full text-sm/7 outline-hidden'
                                />
                                <Button
                                    ref={triggerButtonRef}
                                    aria-label='Chevron'
                                    className='ml-auto inline-flex w-auto flex-1 items-center justify-center rounded-md text-muted-fg outline-hidden'
                                >
                                    <IconChevronDown className={cn('group-has-open:-rotate-180 size-4 transition')} />
                                </Button>
                            </div>
                            <PopoverContent
                                ref={popoverRef}
                                respectScreen={false}
                                trigger='focus'
                                isPicker
                                style={{
                                    minWidth: triggerRef.current?.offsetWidth,
                                    width: triggerRef.current?.offsetWidth
                                }}
                                triggerRef={triggerRef}
                                showArrow={false}
                            >
                                <ListBox
                                    className='grid w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-md outline-hidden'
                                    selectionMode='multiple'
                                    renderEmptyState={() => <div>No Items</div>}
                                    items={(availableItemsToSelect as T[]) ?? props.items}
                                    {...props}
                                >
                                    {filteredChildren?.map((item: any) => (
                                        <MultiSelect.Item
                                            key={item.id as Key}
                                            id={item.id as Key}
                                            textValue={item.textValue as string}
                                        >
                                            {item.textValue as string}
                                        </MultiSelect.Item>
                                    )) ?? children}
                                </ListBox>
                            </PopoverContent>
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
                        {
                            'bg-primary text-primary-fg': isFocused || isFocusVisible || isHovered
                        },
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
