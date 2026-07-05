"use client"

import { Button, type ButtonProps } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Disclosure,
  DisclosurePanel,
  type DisclosurePanelProps,
  type DisclosureProps
} from "react-aria-components/Disclosure"
import { DisclosureGroup, type DisclosureGroupProps } from "react-aria-components/DisclosureGroup"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const Accordion = ({ className, ...props }: DisclosureGroupProps) => (
  <DisclosureGroup
    className={composeRenderProps(className, (className) => cn("overflow-hidden rounded-2xl border flex w-full flex-col", className))}
    data-slot="accordion"
    {...props}
  />
)

const AccordionItem = ({ className, ...props }: DisclosureProps) => (
  <Disclosure
    className={composeRenderProps(className, (className) => cn("data-expanded:bg-muted/50 not-last:border-b", className))}
    data-slot="accordion-item"
    {...props}
  />
)

const AccordionTrigger = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        cn(
          "**:data-[slot=accordion-trigger-icon]:text-muted-foreground gap-6 p-4 text-left text-sm font-medium hover:underline **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex w-full flex-1 items-start justify-between border border-transparent outline-none transition-all disabled:pointer-events-none disabled:opacity-50 in-data-expanded:[&>svg]:rotate-180",
          className
        )
      )}
      data-slot="accordion-trigger"
      slot="trigger"
      type="button"
      {...props}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          <IconPlaceholder
            className="pointer-events-none shrink-0 transition-transform"
            data-slot="accordion-trigger-icon"
            hugeicons="ArrowDown01Icon"
            lucide="ChevronDownIcon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            tabler="IconChevronDown"
          />
        </>
      )}
    </Button>
  )
}

const AccordionContent = ({ className, children, ...props }: DisclosurePanelProps) => {
  return (
    <DisclosurePanel
      className="px-4 text-sm h-(--disclosure-panel-height) overflow-hidden transition-[height] duration-200"
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </DisclosurePanel>
  )
}

Accordion.Trigger = AccordionTrigger
Accordion.Item = AccordionItem
Accordion.Content = AccordionContent

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
