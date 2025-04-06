'use client'

import React from 'react'

import { IconMinus } from 'hq-icons'
import type {
    ButtonProps,
    DisclosurePanelProps,
    DisclosureGroupProps as RACDisclosureGroupProps,
    DisclosureProps as RACDisclosureProps
} from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    Disclosure as RACDisclosure,
    DisclosureGroup as RACDisclosureGroup,
    DisclosurePanel as RACDisclosurePanel
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
                    'w-full rounded-lg min-w-60 transition duration-300 ease-in-out overflow-hidden',
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
                    'flex w-full rounded-lg items-center justify-between gap-2 py-2 font-medium whitespace-nowrap sm:text-sm aria-expanded:**:data-[slot=indicator]:rotate-0',
                    isFocusVisible && 'text-fg outline-2 outline-offset-2 outline-primary',
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
                            'relative ml-auto inline-flex size-5 -rotate-90 items-center justify-center transition-transform duration-300'
                        )}
                    >
                        <IconMinus data-slot='indicator-static' className='absolute size-3.5' />
                        <IconMinus
                            data-slot='indicator'
                            className='absolute size-3.5 -rotate-90 transition-transform duration-300'
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
                'transition-all duration-300 ease-in-out overflow-hidden',
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
