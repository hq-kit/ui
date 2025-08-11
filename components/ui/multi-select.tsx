'use client'

import type { ComboBoxProps, GroupProps, Key, ListBoxProps, Selection } from 'react-aria-components'
import { IconChevronDown, IconX } from '@tabler/icons-react'
import {
    Children,
    isValidElement,
    type KeyboardEvent,
    type ReactNode,
    type Ref,
    useEffect,
    useRef,
    useState
} from 'react'
import {
    Button,
    ComboBox,
    composeRenderProps,
    Group,
    Input,
    ListBox,
    Tag,
    TagGroup,
    TagList
} from 'react-aria-components'
import { cn, fuzzyMatch } from '@/lib/utils'
import { Description, FieldGroup, type FieldProps, Label } from './form'
import { ListBoxDetails, ListBoxItem, ListBoxSection } from './list-box'
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
            className={composeRenderProps(className, (className) =>
                cn('group/field flex h-fit flex-col gap-y-1.5', className)
            )}
            ref={ref}
        >
            {props.label && <Label onClick={() => inputRef.current?.focus()}>{props.label}</Label>}
            <FieldGroup
                className={cn(
                    'flex h-fit min-h-9 flex-wrap items-center py-1 **:[input]:py-1',
                    'group-has-invalid/field:group-has-focus/field:border-destructive group-has-invalid/field:group-has-open/field:border-destructive group-has-invalid/field:group-has-open/field:ring-invalid group-has-invalid/field:hover:border-destructive/70'
                )}
                isDisabled={props.isDisabled}
                isInvalid={props.isInvalid || !!props.errorMessage}
                ref={triggerRef}
            >
                {({ isInvalid, isDisabled }) => (
                    <>
                        <TagGroup aria-hidden aria-label='selected-items' onRemove={removeItem}>
                            <TagList
                                className='flex flex-1 flex-wrap gap-1 pl-2 empty:pl-0'
                                items={[...selectedKeys].map((key) => ({
                                    id: key,
                                    textValue: parsedItems.find((item) => item.id === key)?.textValue as string
                                }))}
                            >
                                {(item: { id: Key; textValue: Key }) => (
                                    <Tag
                                        className={({ isFocusVisible }) =>
                                            cn(
                                                'inline-flex items-center justify-between gap-1 rounded-md border px-2 py-0.5 text-sm outline-hidden',
                                                isInvalid
                                                    ? 'border-destructive/70 bg-destructive/10 text-destructive'
                                                    : 'border-primary/70 bg-primary/10 text-primary',
                                                isFocusVisible &&
                                                    `ring-2 ${isInvalid ? 'ring-destructive/70' : 'ring-primary/70'}`
                                            )
                                        }
                                        isDisabled={isDisabled}
                                        textValue={item.textValue as string}
                                    >
                                        {item.textValue as string}
                                        <Button
                                            className='-mr-1 flex size-4 cursor-pointer items-center justify-center rounded-md pressed:bg-primary/70 pressed:text-primary-foreground outline-hidden hover:bg-primary hover:text-primary-foreground'
                                            slot='remove'
                                        >
                                            <IconX className='size-3 shrink-0' />
                                        </Button>
                                    </Tag>
                                )}
                            </TagList>
                        </TagGroup>
                        <ComboBox
                            aria-label='Search'
                            className='flex-1 text-sm/5'
                            defaultFilter={fuzzyMatch}
                            inputValue={inputValue}
                            isDisabled={isDisabled}
                            isInvalid={isInvalid}
                            isReadOnly={isMax}
                            isRequired={props.isRequired}
                            onInputChange={isMax ? () => {} : setInputValue}
                            onSelectionChange={addItem}
                            validate={props.validate}
                            validationBehavior={props.validationBehavior}
                        >
                            <div className='flex flex-row items-center'>
                                <Input
                                    className='w-full text-sm/7 outline-hidden'
                                    onFocus={() => triggerButtonRef.current?.click()}
                                    onKeyDownCapture={onKeyDownCapture}
                                    placeholder={
                                        isMax
                                            ? 'Max items reached'
                                            : !availableItemsToSelect || !filteredChildren?.length
                                              ? ''
                                              : 'Pick some items'
                                    }
                                    ref={inputRef}
                                />
                                <Button
                                    aria-label='Chevron'
                                    className='mr-2 ml-auto inline-flex w-auto flex-1 items-center justify-center rounded-md text-muted-foreground outline-hidden'
                                    ref={triggerButtonRef}
                                >
                                    <IconChevronDown className='group-has-open/field:-rotate-180 size-4 transition' />
                                </Button>
                            </div>
                            <PopoverContent
                                isPicker
                                ref={popoverRef}
                                respectScreen={false}
                                showArrow={false}
                                style={{
                                    minWidth: triggerRef.current?.offsetWidth,
                                    width: triggerRef.current?.offsetWidth
                                }}
                                trigger='focus'
                                triggerRef={triggerRef}
                            >
                                <ListBox
                                    className='grid w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-md outline-hidden'
                                    items={(availableItemsToSelect as T[]) ?? props.items}
                                    renderEmptyState={() => <div>No Items</div>}
                                    selectionMode='multiple'
                                    {...props}
                                >
                                    {filteredChildren?.map((item: any) => (
                                        <MultiSelect.Item
                                            id={item.id as Key}
                                            key={item.id as Key}
                                            textValue={item.textValue as string}
                                        >
                                            {item.textValue as string}
                                        </MultiSelect.Item>
                                    )) ?? children}
                                </ListBox>
                            </PopoverContent>
                        </ComboBox>
                    </>
                )}
            </FieldGroup>
            {props.description && <Description>{props.description}</Description>}
            {props.errorMessage && (
                <Description className='text-destructive text-sm/5'>{props.errorMessage}</Description>
            )}
        </Group>
    )
}

MultiSelect.Item = ListBoxItem
MultiSelect.Section = ListBoxSection
MultiSelect.ItemDetails = ListBoxDetails

export { MultiSelect }
