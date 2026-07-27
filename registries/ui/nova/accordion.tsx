"use client"

import type { ReactNode } from "react"
import {
  Button,
  type ButtonProps,
  Disclosure,
  DisclosureGroup,
  type DisclosureGroupProps,
  DisclosurePanel,
  type DisclosurePanelProps,
  type DisclosureProps,
  Heading
} from "react-aria-components/DisclosureGroup"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const Accordion = ({ className, ...props }: DisclosureGroupProps) => (
  <DisclosureGroup className={cn("flex w-full flex-col", className)} data-slot="accordion" {...props} />
)

const AccordionItem = ({ className, ...props }: DisclosureProps) => (
  <Disclosure className={cn("not-last:border-b", className)} data-slot="accordion-item" {...props} />
)

const AccordionTrigger = ({
  className,
  children,
  ...props
}: Omit<ButtonProps, "children"> & { children: ReactNode }) => (
  <Heading className="flex">
    <Button
      className={cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      )}
      data-slot="accordion-trigger"
      slot="trigger"
      {...props}
    >
      {children}
      <IconPlaceholder
        className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        data-slot="accordion-trigger-icon"
        hugeicons="ArrowDown01Icon"
        lucide="ChevronDownIcon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        tabler="IconChevronDown"
      />
      <IconPlaceholder
        className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        data-slot="accordion-trigger-icon"
        hugeicons="ArrowUp01Icon"
        lucide="ChevronUpIcon"
        phosphor="CaretUpIcon"
        remixicon="RiArrowUpSLine"
        tabler="IconChevronUp"
      />
    </Button>
  </Heading>
)

const AccordionContent = ({ className, children, ...props }: DisclosurePanelProps) => (
  <DisclosurePanel
    className="h-(--disclosure-panel-height) overflow-clip text-sm transition-[height] data-closed:animate-accordion-up data-open:animate-accordion-down"
    data-slot="accordion-content"
    {...props}
  >
    <div
      className={cn(
        "pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
    >
      {children}
    </div>
  </DisclosurePanel>
)

Accordion.Content = AccordionContent
Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
