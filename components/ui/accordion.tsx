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
  <DisclosureGroup className={cn("cn-accordion flex w-full flex-col", className)} data-slot="accordion" {...props} />
)

const AccordionItem = ({ className, ...props }: DisclosureProps) => (
  <Disclosure className={cn("cn-accordion-item", className)} data-slot="accordion-item" {...props} />
)

const AccordionTrigger = ({
  className,
  children,
  ...props
}: Omit<ButtonProps, "children"> & { children: ReactNode }) => (
  <Heading className="flex">
    <Button
      className={cn(
        "cn-accordion-trigger group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent outline-none transition-all disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      data-slot="accordion-trigger"
      slot="trigger"
      {...props}
    >
      {children}
      <IconPlaceholder
        className="cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        data-slot="accordion-trigger-icon"
        hugeicons="ArrowDown01Icon"
        lucide="ChevronDownIcon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        tabler="IconChevronDown"
      />
      <IconPlaceholder
        className="cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
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
    className="cn-accordion-content h-(--disclosure-panel-height) overflow-clip transition-[height]"
    data-slot="accordion-content"
    {...props}
  >
    <div
      className={cn(
        "cn-accordion-content-inner [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
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
