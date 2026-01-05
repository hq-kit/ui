'use client'

import {
  Button,
  type ButtonProps,
  composeRenderProps,
  Disclosure,
  DisclosurePanel,
  type DisclosurePanelProps,
  type DisclosureProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'

const Collapsible = ({ ...props }: DisclosureProps) => {
  return (
    <Disclosure
      className={composeRenderProps(props.className, (className) => cn('group/collapsible', className))}
      data-slot='collapsible'
      {...props}
    />
  )
}

const CollapsibleTrigger = ({ ...props }: ButtonProps) => {
  return (
    <Button
      className={composeRenderProps(props.className, (className) => cn('group/collapsible-trigger', className))}
      data-slot='collapsible-trigger'
      slot='trigger'
      type='button'
      {...props}
    />
  )
}

const CollapsibleContent = ({ ...props }: DisclosurePanelProps) => {
  return (
    <DisclosurePanel
      className={composeRenderProps(props.className, (className) =>
        cn('h-(--disclosure-panel-height) overflow-hidden transition-[height] duration-200', className)
      )}
      data-slot='collapsible-content'
      {...props}
    />
  )
}

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Content = CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
