'use client'

import React from 'react'

import { IconLoader, IconSearch } from 'hq-icons'
import type {
    AutocompleteProps,
    MenuItemProps,
    MenuProps,
    MenuSectionProps,
    ModalOverlayProps,
    SeparatorProps,
    TextProps
} from 'react-aria-components'
import {
    Autocomplete,
    Button,
    Collection,
    composeRenderProps,
    Group,
    Header,
    Input,
    Menu,
    MenuItem,
    MenuSection,
    Separator,
    Text,
    TextField,
    useFilter
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Modal } from './modal'

interface CommandProps<T>
    extends Pick<MenuProps<T>, 'children' | 'items'>,
        Pick<ModalOverlayProps, 'isOpen' | 'onOpenChange'>,
        Pick<AutocompleteProps, 'inputValue' | 'onInputChange'> {
    shortcut?: {
        modifiers?: 'alt' | 'ctrl/meta' | 'ctrl/meta+alt'
        key: string
    }
    isPending?: boolean
}

const Command = <T extends object>({ shortcut, ...props }: CommandProps<T>) => {
    const { contains } = useFilter({ sensitivity: 'accent' })
    const [shortcutOpen, setShortcutOpen] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (!shortcut) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.key === shortcut?.key &&
                (shortcut.modifiers === 'alt'
                    ? e.altKey
                    : shortcut.modifiers === 'ctrl/meta+alt'
                      ? e.altKey && (e.ctrlKey || e.metaKey)
                      : e.ctrlKey || e.metaKey)
            ) {
                e.preventDefault()
                if (props.onOpenChange) {
                    return props.onOpenChange(!props.isOpen)
                } else setShortcutOpen(!shortcutOpen)
            } else if (e.key === 'Escape') {
                e.preventDefault()
                if (props.onOpenChange) {
                    return props.onOpenChange(false)
                } else setShortcutOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <Modal.Content
            isOpen={props.isOpen || shortcutOpen}
            onOpenChange={props.onOpenChange || setShortcutOpen}
            aria-label='Commands'
            {...props}
        >
            <Autocomplete
                filter={props.inputValue && props.onInputChange ? undefined : contains}
                inputValue={props.inputValue}
                onInputChange={props.onInputChange}
            >
                <TextField className='p-1 border-b' aria-label='Search'>
                    <Group className='flex items-center px-2'>
                        {props.isPending ? (
                            <IconLoader className='animate-spin size-4 shrink-0 text-muted-fg' />
                        ) : (
                            <IconSearch className='text-muted-fg size-4 shrink-0' />
                        )}
                        <Input
                            autoFocus
                            className='outline-hidden w-full p-2'
                            placeholder='Search...'
                        />
                    </Group>
                </TextField>
                <Menu
                    renderEmptyState={() => (
                        <div className='p-4 text-muted-fg col-span-full text-center'>
                            No results found
                        </div>
                    )}
                    className='grid outline-hidden w-full grid-cols-[auto_1fr_auto] gap-y-1 max-h-[30rem] overflow-y-auto p-2'
                    items={props.items}
                >
                    {props.children}
                </Menu>
            </Autocomplete>
        </Modal.Content>
    )
}

const CommandItem = ({ isDanger, className, ...props }: MenuItemProps & { isDanger?: boolean }) => {
    const textValue =
        props.textValue || (typeof props.children === 'string' ? props.children : undefined)
    return (
        <MenuItem
            textValue={textValue}
            className={composeRenderProps(
                className,
                (className, { isHovered, isFocused, isSelected, isDisabled, isFocusVisible }) =>
                    cn(
                        'group relative grid grid-cols-subgrid col-span-full',
                        'rounded-md px-2 py-1.5 text-base sm:text-sm/6 select-none',
                        '**:[svg]:size-4 *:[svg]:mr-2 *:[svg]:my-1 *:data-avatar:mr-2 *:data-avatar:size-6',
                        { 'bg-primary text-primary-fg': isFocused || isFocusVisible || isHovered },
                        isSelected && '**:data-[slot=icon]:hidden **:data-avatar:hidden',
                        isDisabled && 'pointer-events-none opacity-50',
                        isDanger && 'text-danger selected:bg-danger selected:text-danger-fg',
                        className
                    )
            )}
            {...props}
        />
    )
}

const CommandLabel = ({ className, ...props }: TextProps) => (
    <Text slot='label' className={cn('col-start-2', className)} {...props} />
)

const CommandSection = <T extends object>({
    className,
    ...props
}: MenuSectionProps<T> & { title?: string }) => (
    <MenuSection className={cn('col-span-full text-sm grid grid-cols-[auto_1fr] mt-2', className)}>
        {'title' in props && (
            <Header className='text-muted-fg text-xs py-1 px-2 col-span-full pointer-events-none'>
                {props.title}
            </Header>
        )}
        <Collection items={props.items}>{props.children}</Collection>
    </MenuSection>
)

const CommandSeparator = ({ className, ...props }: SeparatorProps) => (
    <Separator
        orientation='horizontal'
        className={cn('bg-muted col-span-full -mx-1 my-1 h-px', className)}
        {...props}
    />
)

const CommandShortcut = ({ className, ...props }: TextProps) => (
    <Text
        className={cn(
            'text-current/60 group-hover:text-current group-focus:text-current text-xs',
            className
        )}
        {...props}
    />
)

Command.Trigger = Button
Command.Item = CommandItem
Command.Label = CommandLabel
Command.Section = CommandSection
Command.Separator = CommandSeparator
Command.Shortcut = CommandShortcut

export { Command }
