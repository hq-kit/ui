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
    className={composeRenderProps(className, (className) => cn("cn-accordion flex w-full flex-col", className))}
    data-slot="accordion"
    {...props}
  />
)

const AccordionItem = ({ className, ...props }: DisclosureProps) => (
  <Disclosure
    className={composeRenderProps(className, (className) => cn("cn-accordion-item", className))}
    data-slot="accordion-item"
    {...props}
  />
)

const AccordionTrigger = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        cn(
          "cn-accordion-trigger group/accordion-trigger relative flex w-full flex-1 items-start justify-between border border-transparent outline-none transition-all disabled:pointer-events-none disabled:opacity-50 in-data-expanded:[&>svg]:rotate-180",
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
            className="cn-accordion-trigger-icon pointer-events-none shrink-0 transition-transform"
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
      className="cn-accordion-content h-(--disclosure-panel-height) overflow-hidden transition-[height] duration-200"
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn("cn-accordion-content-inner", className)}>{children}</div>
    </DisclosurePanel>
  )
}

Accordion.Trigger = AccordionTrigger
Accordion.Item = AccordionItem
Accordion.Content = AccordionContent

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
