'use client'

import React from 'react'

import { Command as CommandPrimitive } from 'cmdk'
import { IconSearch, IconX } from 'hq-icons'
import {
    Button,
    Dialog,
    Modal,
    ModalOverlay,
    Text,
    type ModalOverlayProps,
    type SeparatorProps,
    type TextProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { cn } from '@/lib/utils'

import { Keyboard } from './keyboard'
import { Separator } from './separator'

const commandStyles = tv({
    slots: {
        command: [
            'flex h-svh w-full flex-col overflow-hidden rounded-lg sm:h-full',
            '[&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group-heading]]:-mb-1.5 [&_[cmdk-group-heading]]:ml-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_[data-slot=icon]]:size-5 [&_[cmdk-input]]:h-12',
            '[&_[cmdk-item]]:py-2.5 [&_[cmdk-item]]:pr-4 [&_[cmdk-item]]:pl-2.5'
        ],
        list: 'max-h-[calc(100vh-35%)] overflow-x-hidden overflow-y-auto pb-16 md:max-h-[456px] lg:pb-0 [&:not(:has(.csec))]:p-2 [&:not(:has(.csec))_.csep]:my-2',
        input: [
            'placeholder:text-muted-fg flex w-full rounded-lg bg-transparent text-base',
            'outline-none data-focused:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50'
        ],
        section: [
            'csec text-fg overflow-hidden px-2 py-2',
            '[&_[cmdk-group-heading]]:text-muted-fg [&_[cmdk-group-heading]]:ml-[1px] [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[0.8rem] [&_[cmdk-group-heading]]:select-none'
        ],
        modal: [
            'bg-bg text-fg ring-fg/5 dark:ring-border fixed top-auto bottom-0 left-[50%] z-50 grid h-[calc(100vh-35%)] w-full max-w-full translate-x-[-50%] gap-4 overflow-hidden rounded-t-lg ring-1 shadow-lg sm:top-[6rem] sm:bottom-auto sm:h-auto sm:w-full sm:max-w-2xl sm:rounded-lg',
            'data-entering:fade-in data-entering:slide-in-from-bottom data-entering:animate-in data-entering:sm:zoom-in-95 data-entering:sm:slide-in-from-bottom-0 data-entering:duration-200 data-entering:ease-out',
            'data-exiting:slide-out-to-bottom data-exiting:sm:slide-out-to-bottom-0 data-exiting:sm:zoom-out-95 data-exiting:fade-out data-exiting:animate-out data-exiting:duration-150'
        ],
        closeButton: [
            '[&>span>[data-slot=icon]]:text-muted-fg data-pressed:[&_[data-slot=icon]]:text-fg lg:border-muted lg:bg-muted/50 data-[state=open]:bg-muted data-[state=open]:text-muted-fg lg:data-focused:border-fg/30 lg:data-focused:ring-ring absolute top-1.5 right-3 rounded-lg border border-transparent px-2.5 py-2.5 text-xs transition-opacity disabled:pointer-events-none data-focused:outline-none lg:top-3.5 lg:py-0.5 lg:data-focused:ring-2',
            'lg:data-focused:bg-primary/10 lg:data-focused:ring-primary/20 lg:data-focused:border-primary/70 data-focused:outline-none lg:data-focused:ring-2',
            'disabled:pointer-events-none'
        ],
        empty: 'text-muted-fg py-6 text-center text-sm',
        description: 'ml-auto hidden text-sm sm:inline',
        item: [
            'group text-fg relative flex cursor-default items-center rounded-lg py-2 text-sm outline-none select-none',
            'data-[selected=true]:bg-primary data-[selected=true]:text-primary-fg [&[data-selected=true]_[data-slot=icon]]:text-primary-fg',
            'focus-visible:bg-primary focus-visible:text-primary-fg [&:focus-visible_[data-slot=icon]]:text-primary-fg',
            'data-[danger=true]:text-danger data-[danger=true]:data-[selected=true]:bg-danger data-[danger=true]:data-[selected=true]:text-danger-fg',
            'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
            '[&_[data-slot=icon]]:text-muted-fg [&_[data-slot=icon]]:mr-2 [&_[data-slot=icon]]:size-[1.10rem] [&_[data-slot=icon]]:shrink-0',
            '**:data-avatar:mr-2 **:data-avatar:size-[1.10rem] **:data-avatar:shrink-0'
        ]
    },

    variants: {
        isDanger: {
            true: 'text-danger data-[selected=true]:bg-danger data-[selected=true]:text-danger-fg [&[data-selected=true]_[data-slot=icon]]:text-danger-fg'
        }
    }
})

const { command, empty, section, list, item, closeButton, modal, input, description } =
    commandStyles()

interface CommandContextProps {
    hideSearchIndicator?: boolean
    hideCloseButton?: boolean
    messageOnEmpty?: boolean | string
    isBlurred?: boolean
}

const CommandContext = React.createContext<CommandContextProps>({})

interface CommandRootProps {
    CommandEmpty?: typeof CommandEmpty
    CommandInput?: typeof CommandInput
    CommandItem?: typeof CommandItem
    CommandList?: typeof CommandList
    CommandSection?: typeof CommandSection
    CommandSeparator?: typeof CommandSeparator
    CommandDescription?: typeof CommandDescription
}

const modalOverlay = tv({
    base: ['bg-fg/15 dark:bg-fg/40 fixed inset-0 z-50 max-h-(--visual-viewport-height)'],
    variants: {
        isBlurred: {
            true: 'bg-bg supports-backdrop-filter:bg-bg/15 dark:supports-backdrop-filter:bg-bg/40 supports-backdrop-filter:backdrop-blur'
        },
        isEntering: {
            true: 'fade-in animate-in duration-200 ease-out'
        },
        isExiting: {
            true: 'fade-out animate-out duration-150 ease-in'
        }
    }
})
interface CommandProps extends ModalOverlayProps, CommandRootProps, CommandContextProps {
    children: React.ReactNode
    value?: string
    messageOnEmpty?: boolean | string
    onValueChange?: (value: string) => void
    classNames?: {
        overlay?: string
        content?: string
    }
}

const Command = ({
    classNames,
    hideSearchIndicator = false,
    hideCloseButton = false,
    messageOnEmpty,
    value,
    onValueChange,
    children,
    isBlurred = false,
    ...props
}: CommandProps) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return (
        <CommandContext.Provider value={{ hideSearchIndicator, hideCloseButton, messageOnEmpty }}>
            <ModalOverlay
                isDismissable
                className={modalOverlay({
                    isBlurred,
                    className: classNames?.overlay
                })}
                {...props}
            >
                <Modal className={modal({ className: classNames?.content })}>
                    <Dialog className='outline-none' aria-label='Command Palette'>
                        {({ close }) => (
                            <>
                                <CommandPrimitive
                                    value={value}
                                    onValueChange={onValueChange}
                                    className={command()}
                                >
                                    {children}
                                </CommandPrimitive>
                                {!hideCloseButton && (
                                    <Button
                                        autoFocus={!isDesktop}
                                        onPress={close}
                                        className={closeButton()}
                                    >
                                        <span className='hidden lg:block'>Esc</span>
                                        <span className='-mr-2 block lg:hidden'>
                                            <IconX />
                                            <span className='sr-only'>Close command palette</span>
                                        </span>
                                    </Button>
                                )}
                            </>
                        )}
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </CommandContext.Provider>
    )
}

type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    CommandInputProps
>(({ className, ...props }, ref) => {
    const { hideSearchIndicator } = React.useContext(CommandContext)
    return (
        <div className='flex items-center border-b px-3'>
            {!hideSearchIndicator && <IconSearch className='mr-2 size-5 shrink-0 opacity-50' />}
            <CommandPrimitive.Input
                autoFocus
                ref={ref}
                className={input({ className: hideSearchIndicator ? 'pl-1' : className })}
                {...props}
            />
        </div>
    )
})

CommandInput.displayName = CommandPrimitive.Input.displayName

type CommandListProps = React.ComponentProps<typeof CommandPrimitive.List>

const CommandList = ({ className, ...props }: CommandListProps) => {
    const { messageOnEmpty } = React.useContext(CommandContext)
    return (
        <CommandPrimitive.List className={list({ className })} {...props}>
            {messageOnEmpty !== false && (
                <CommandEmpty>
                    {typeof messageOnEmpty === 'string' ? messageOnEmpty : 'No results found.'}
                </CommandEmpty>
            )}
            {props.children}
        </CommandPrimitive.List>
    )
}

type CommandEmptyProps = React.ComponentProps<typeof CommandPrimitive.Empty>

const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => {
    return <CommandPrimitive.Empty className={empty({ className })} {...props} />
}

interface CommandSectionProps extends React.ComponentProps<typeof CommandPrimitive.Group> {
    separator?: boolean
}

const CommandSection = ({ className, separator, ...props }: CommandSectionProps) => {
    return (
        <>
            <CommandPrimitive.Group className={section({ className })} {...props}>
                {props.children}
                {separator && <CommandSeparator className='mt-2' />}
            </CommandPrimitive.Group>
        </>
    )
}

const CommandSeparator = ({ className, ...props }: SeparatorProps) => {
    return (
        <div className='csep -mx-4'>
            <Separator className={className} {...props} orientation='horizontal' />
        </div>
    )
}

interface CommandItemProps extends React.ComponentProps<typeof CommandPrimitive.Item> {
    isDanger?: boolean
}

const CommandItem = ({ isDanger, className, ...props }: CommandItemProps) => {
    return (
        <CommandPrimitive.Item
            data-danger={isDanger ? 'true' : undefined}
            className={item({ isDanger, className })}
            {...props}
        />
    )
}

interface CommandDescriptionProps extends TextProps {
    intent?: 'danger' | 'warning' | 'primary' | 'secondary' | 'success'
}

const CommandDescription = ({ intent, className, ...props }: CommandDescriptionProps) => {
    return (
        <Text
            {...props}
            slot='description'
            className={description({
                className: cn(
                    intent === 'danger'
                        ? 'group-data-[selected=true]:text-primary-fg/70 text-danger/90'
                        : intent === 'warning'
                          ? 'group-data-[selected=true]:text-primary-fg/70 text-warning/90'
                          : intent === 'success'
                            ? 'group-data-[selected=true]:text-primary-fg/70 text-success/90'
                            : intent === 'primary'
                              ? 'text-primary/90 group-data-[selected=true]:text-white/70'
                              : 'group-data-[selected=true]:text-primary-fg/70 text-muted-fg',
                    className
                )
            })}
        />
    )
}

Command.Empty = CommandEmpty
Command.Input = CommandInput
Command.Item = CommandItem
Command.List = CommandList
Command.Section = CommandSection
Command.Separator = CommandSeparator
Command.Description = CommandDescription
Command.Keyboard = Keyboard

export { Command }
