'use client'

import {
    Button,
    type ButtonProps,
    Disclosure,
    DisclosurePanel,
    type DisclosurePanelProps,
    type DisclosureProps
} from 'react-aria-components'

const Collapsible = ({ ...props }: DisclosureProps) => {
    return <Disclosure data-slot='collapsible' {...props} />
}

const CollapsibleTrigger = ({ ...props }: ButtonProps) => {
    return <Button data-slot='collapsible-trigger' slot='trigger' type='button' {...props} />
}

const CollapsibleContent = ({ ...props }: DisclosurePanelProps) => {
    return (
        <DisclosurePanel
            className='h-(--disclosure-panel-height) overflow-hidden transition-[height] duration-200'
            data-slot='collapsible-content'
            {...props}
        />
    )
}

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Content = CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
