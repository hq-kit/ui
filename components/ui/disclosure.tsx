'use client'

import type React from 'react'

import { IconMinus } from 'hq-icons'
import type {
    ButtonProps,
    DisclosurePanelProps,
    DisclosureGroupProps as RACDisclosureGroupProps,
    DisclosureProps as RACDisclosureProps
} from 'react-aria-components'
import {
    Button,
    Disclosure as RACDisclosure,
    DisclosureGroup as RACDisclosureGroup,
    DisclosurePanel as RACDisclosurePanel,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

interface AccordionProps extends RACDisclosureGroupProps {
    ref?: React.RefObject<HTMLDivElement>
    hideIndicator?: boolean
}
const DisclosureGroup = ({ children, ref, className, ...props }: AccordionProps) => {
    return (
        <RACDisclosureGroup
            ref={ref}
            data-slot='disclosure-group'
            {...props}
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn(
                    'space-y-1',
                    props.hideIndicator && '**:data-[slot=indicator]:text-transparent',
                    isDisabled ? 'cursor-default opacity-50' : 'cursor-pointer',
                    className
                )
            )}
        >
            {(values) => <>{typeof children === 'function' ? children(values) : children}</>}
        </RACDisclosureGroup>
    )
}

interface CollapsibleProps extends RACDisclosureProps {
    ref?: React.Ref<HTMLDivElement>
}
const Disclosure = ({ className, ref, children, ...props }: CollapsibleProps) => {
    return (
        <RACDisclosure
            ref={ref}
            data-slot='disclosure'
            {...props}
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn(
                    'w-full min-w-60 overflow-hidden rounded-lg transition duration-300 ease-in-out',
                    isDisabled ? 'cursor-default opacity-50' : 'cursor-pointer',
                    className
                )
            )}
        >
            {(values) => (typeof children === 'function' ? children(values) : children)}
        </RACDisclosure>
    )
}

interface DisclosureTriggerProps extends ButtonProps {
    ref?: React.Ref<HTMLButtonElement>
}
const DisclosureTrigger = ({ className, ref, ...props }: DisclosureTriggerProps) => {
    return (
        <Button
            ref={ref}
            slot='trigger'
            className={composeRenderProps(className, (className, { isFocusVisible, isDisabled }) =>
                cn(
                    'flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-lg py-2 font-medium aria-expanded:**:data-[slot=indicator]:rotate-0 sm:text-sm',
                    isFocusVisible && 'text-fg outline-2 outline-primary outline-offset-2',
                    isDisabled && 'cursor-default opacity-50',
                    className
                )
            )}
            {...props}
        >
            {(values) => (
                <>
                    {typeof props.children === 'function' ? props.children(values) : props.children}
                    <div
                        data-slot='indicator'
                        className={cn(
                            className,
                            '-rotate-90 relative ml-auto inline-flex size-5 items-center justify-center transition-transform duration-300'
                        )}
                    >
                        <IconMinus data-slot='indicator-static' className='absolute size-3.5' />
                        <IconMinus
                            data-slot='indicator'
                            className='-rotate-90 absolute size-3.5 transition-transform duration-300'
                        />
                    </div>
                </>
            )}
        </Button>
    )
}
const DisclosurePanel = ({ className, children, ...props }: DisclosurePanelProps) => {
    return (
        <RACDisclosurePanel
            data-slot='disclosure-content'
            className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                'max-h-0 opacity-0 aria-[hidden=false]:max-h-[1000px] aria-[hidden=false]:opacity-100',
                className
            )}
            {...props}
        >
            {children}
        </RACDisclosurePanel>
    )
}
const Accordion = (props: AccordionProps) => <DisclosureGroup {...props} />
Accordion.Item = Disclosure
Accordion.Trigger = DisclosureTrigger
Accordion.Content = DisclosurePanel

const Collapsible = (props: CollapsibleProps) => <Disclosure {...props} />
Collapsible.Trigger = DisclosureTrigger
Collapsible.Content = DisclosurePanel

export { Accordion, Collapsible }
