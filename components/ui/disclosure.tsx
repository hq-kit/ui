'use client'

import React from 'react'

import { IconMinus } from 'hq-icons'
import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

interface DisclosureGroupProps extends Aria.DisclosureGroupProps {
    hideBorder?: boolean
    hideIndicator?: boolean
}

const DisclosureGroupContext = React.createContext<DisclosureGroupProps>({})

const DisclosureGroup = ({
    children,
    hideIndicator,
    hideBorder,
    className,
    ...props
}: DisclosureGroupProps) => {
    return (
        <Aria.UNSTABLE_DisclosureGroup
            {...props}
            className={({ isDisabled }) =>
                cn([
                    isDisabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer',
                    hideBorder
                        ? '[&_[data-slot=accordion-item]]:border-none'
                        : '[&_[data-slot=accordion-item]]:border-b',
                    className
                ])
            }
        >
            {(values) => (
                <div data-slot='accordion-item-content'>
                    <DisclosureGroupContext.Provider value={{ hideIndicator, hideBorder }}>
                        {typeof children === 'function' ? children(values) : children}
                    </DisclosureGroupContext.Provider>
                </div>
            )}
        </Aria.UNSTABLE_DisclosureGroup>
    )
}

const disclosureStyles = tv({
    base: ['flex group relative w-full flex-col'],
    variants: {
        isDisabled: {
            true: 'cursor-not-allowed opacity-75'
        },
        isExpanded: {
            true: 'pb-3'
        },
        hideBorder: {
            true: '[&>[slot=trigger]]:py-2',
            false: '[&>[slot=trigger]]:py-3'
        }
    },
    compoundVariants: [
        {
            hideBorder: true,
            isExpanded: true,
            className: 'pb-2'
        }
    ]
})

const Disclosure = ({ className, ...props }: Aria.DisclosureProps) => {
    const { hideBorder } = React.useContext(DisclosureGroupContext)
    return (
        <Aria.UNSTABLE_Disclosure
            data-slot='accordion-item'
            {...props}
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                disclosureStyles({ ...renderProps, hideBorder, className })
            )}
        >
            {props.children}
        </Aria.UNSTABLE_Disclosure>
    )
}

const accordionTriggerStyles = tv({
    base: [
        'flex flex-1 group rounded-lg aria-expanded:text-foreground text-muted-foreground sm:text-sm items-center gap-x-2 font-medium'
    ],
    variants: {
        isFocused: {
            true: 'outline-none text-foreground'
        },
        isOpen: {
            true: 'text-foreground'
        },
        isDisabled: {
            true: 'opacity-50 cursor-default'
        }
    }
})

const Trigger = ({ className, ...props }: Aria.ButtonProps) => {
    const { hideIndicator } = React.useContext(DisclosureGroupContext)
    return (
        <Aria.Button
            {...props}
            slot='trigger'
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                accordionTriggerStyles({
                    ...renderProps,
                    className
                })
            )}
        >
            {(values) => (
                <>
                    {typeof props.children === 'function' ? props.children(values) : props.children}
                    {!hideIndicator && (
                        <div
                            className={cn(
                                'ml-auto relative flex items-center justify-center size-3 indicator',
                                '-rotate-90 group-aria-expanded:rotate-0 transition-transform'
                            )}
                        >
                            <IconMinus
                                className={cn('transition-opacity absolute size-3 indicator')}
                            />
                            <IconMinus
                                className={cn(
                                    'transition-all absolute size-3',
                                    '-rotate-90 group-aria-expanded:rotate-0 indicator'
                                )}
                            />
                        </div>
                    )}
                </>
            )}
        </Aria.Button>
    )
}

const disclosurePanelStyles = tv({
    base: 'sm:text-sm transition-all',
    variants: {
        hidden: {
            true: 'animate-out fade-out-0 ease-in-out',
            false: 'animate-in fade-in-0 ease-in-out'
        }
    }
})

const Panel = ({ className, ...props }: Aria.DisclosurePanelProps) => {
    return (
        <Aria.UNSTABLE_DisclosurePanel
            {...props}
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                disclosurePanelStyles({ ...renderProps, className })
            )}
        >
            <div className='animate-in fade-in-0'>{props.children}</div>
        </Aria.UNSTABLE_DisclosurePanel>
    )
}

const Accordion = (props: DisclosureGroupProps) => <DisclosureGroup {...props} />
Accordion.Item = Disclosure
Accordion.Trigger = Trigger
Accordion.Content = Panel

const Collapsible = (props: Aria.DisclosureProps) => <Disclosure {...props} />
Collapsible.Trigger = Trigger
Collapsible.Content = Panel

export { Accordion, Collapsible }
