'use client'

import { IconMinus } from 'hq-icons'
import type {
    ButtonProps,
    DisclosureGroupProps as DisclosureGroupPrimitiveProps,
    DisclosurePanelProps as DisclosurePanelPrimitiveProps,
    DisclosureProps as DisclosurePrimitiveProps
} from 'react-aria-components'
import {
    Button,
    DisclosureGroup as DisclosureGroupPrimitive,
    Disclosure as DisclosurePrimitive,
    DisclosurePanel as DisclosurePrimitivePanel,
    Heading
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn, cr, ctr } from './utils'

interface AccordionProps extends DisclosureGroupPrimitiveProps {
    ref?: React.RefObject<HTMLDivElement>
    hideIndicator?: boolean
    hideBorder?: boolean
}
const DisclosureGroup = ({ children, ref, className, ...props }: AccordionProps) => {
    return (
        <DisclosureGroupPrimitive
            ref={ref}
            data-slot='disclosure-group'
            {...props}
            className={cn(
                className,
                props.hideIndicator && '**:data-[slot=disclosure-chevron]:text-transparent',
                props.hideBorder &&
                    '**:data-[slot=disclosure]:border-b-0 **:data-[slot=disclosure-group]:border-t-0',
                'peer cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-75'
            )}
        >
            {(values) => (
                <div data-slot='disclosure-content'>
                    {typeof children === 'function' ? children(values) : children}
                </div>
            )}
        </DisclosureGroupPrimitive>
    )
}

const disclosure = tv({
    base: ['peer group/disclosure w-full min-w-60 border-b'],
    variants: {
        isDisabled: {
            true: 'cursor-not-allowed opacity-70'
        }
    }
})

interface CollapsibleProps extends DisclosurePrimitiveProps {
    ref?: React.Ref<HTMLDivElement>
}
const Disclosure = ({ className, ref, ...props }: CollapsibleProps) => {
    return (
        <DisclosurePrimitive
            ref={ref}
            data-slot='disclosure'
            {...props}
            className={cr(className, (className, renderProps) =>
                disclosure({ ...renderProps, className })
            )}
        >
            {props.children}
        </DisclosurePrimitive>
    )
}

const disclosureTrigger = tv({
    base: [
        'group/trigger **:svg:text-muted-fg flex w-full items-center justify-between gap-x-2 py-3 font-medium whitespace-nowrap **:data-[slot=disclosure-chevron]:size-4 **:data-[slot=icon]:-mx-0.5 **:data-[slot=icon]:shrink-0 sm:text-sm **:[span]:flex **:[span]:items-center **:[span]:gap-x-1 **:[span]:*:data-[slot=icon]:mr-1 [&[aria-expanded=true]_[data-slot=disclosure-chevron]]:rotate-0'
    ],
    variants: {
        isFocused: {
            true: 'text-fg outline-hidden'
        },
        isOpen: {
            true: 'text-fg'
        },
        isDisabled: {
            true: 'cursor-default opacity-50'
        }
    }
})

interface DisclosureTriggerProps extends ButtonProps {
    ref?: React.Ref<HTMLButtonElement>
}
const DisclosureTrigger = ({ className, ref, ...props }: DisclosureTriggerProps) => {
    return (
        <Heading>
            <Button
                ref={ref}
                slot='trigger'
                className={cr(className, (className, renderProps) =>
                    disclosureTrigger({
                        ...renderProps,
                        className
                    })
                )}
                {...props}
            >
                {(values) => (
                    <>
                        {typeof props.children === 'function'
                            ? props.children(values)
                            : props.children}
                        <Indicator
                            slot='disclosure-chevron'
                            className='internal-chevron ml-auto shrink-0'
                        />
                    </>
                )}
            </Button>
        </Heading>
    )
}

interface DisclosureContentProps extends DisclosurePanelPrimitiveProps {
    ref?: React.Ref<HTMLDivElement>
}
const DisclosurePanel = ({ className, ref, ...props }: DisclosureContentProps) => {
    return (
        <DisclosurePrimitivePanel
            ref={ref}
            data-slot='disclosure-panel'
            className={ctr(
                className,
                'text-muted-fg overflow-hidden text-sm transition-all **:data-[slot=disclosure-group]:border-t **:data-[slot=disclosure-group]:**:[.internal-chevron]:hidden has-data-[slot=disclosure-group]:**:[button]:px-4'
            )}
            {...props}
        >
            <div
                data-slot='disclosure-panel-content'
                className='pt-0 not-has-data-[slot=disclosure-group]:group-data-expanded/disclosure:pb-3'
            >
                {props.children}
            </div>
        </DisclosurePrimitivePanel>
    )
}

const Indicator = ({ className, slot = 'chevron' }: { className?: string; slot?: string }) => (
    <div
        data-slot={slot}
        className={cn(
            className,
            'relative inline-flex size-5 -rotate-90 items-center justify-center transition-transform duration-300'
        )}
    >
        <IconMinus data-slot='chevron-passive' className='absolute size-3.5' />
        <IconMinus
            data-slot={slot}
            className='absolute size-3.5 -rotate-90 transition-transform duration-300'
        />
    </div>
)

const Accordion = (props: AccordionProps) => <DisclosureGroup {...props} />
Accordion.Item = Disclosure
Accordion.Trigger = DisclosureTrigger
Accordion.Content = DisclosurePanel

const Collapsible = (props: CollapsibleProps) => <Disclosure {...props} />
Collapsible.Trigger = DisclosureTrigger
Collapsible.Content = DisclosurePanel

export { Accordion, Collapsible, Indicator }
export type { AccordionProps, CollapsibleProps, DisclosureContentProps, DisclosureTriggerProps }
