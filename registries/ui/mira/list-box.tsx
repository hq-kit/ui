"use client"

import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Collection,
  Header,
  type ListBoxItemProps,
  type ListBoxProps,
  type ListBoxSectionProps,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxSection as RACListBoxSection,
  type Selection,
  Text,
  type TextProps
} from "react-aria-components/ListBox"
import { Separator, type SeparatorProps } from "react-aria-components/Separator"
import { cn } from "@/lib/utils"

const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
  <RACListBox
    {...props}
    className={composeRenderProps(className, (className) =>
      cn(
        "group/list-box flex size-full flex-col gap-1 overflow-hidden rounded-xl border bg-popover p-2 text-popover-foreground",
        "[&_.react-aria-DropIndicator[data-drop-target]]:outline",
        "[&_.react-aria-DropIndicator[data-drop-target]]:outline-destructive",
        "[&_.react-aria-DropIndicator[data-drop-target]]:transform-[translateZ(0)]",
        className
      )
    )}
    renderEmptyState={() => <div className="w-full p-4 text-center text-muted-foreground">No results found</div>}
  />
)

const ListBoxItem = ({ children, className, ...props }: ListBoxItemProps) => {
  const textValue = typeof children === "string" ? children : undefined

  return (
    <RACListBoxItem
      className={composeRenderProps(className, (className) =>
        cn(
          "group/list-box-item relative flex min-h-7 cursor-default select-none items-center gap-2 in-data-[slot=dialog-content]:rounded-md rounded-md px-2.5 py-1.5 text-xs/relaxed outline-hidden data-[disabled=true]:pointer-events-none data-selected:bg-muted data-selected:text-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-selected:*:[svg]:text-foreground",
          "data-selected:bg-primary data-selected:text-primary-foreground",
          "data-dragging:cursor-grabbing data-dragging:outline data-dragging:outline-primary",
          className
        )
      )}
      data-slot="select-item"
      textValue={textValue}
      {...props}
    >
      {(values) => (typeof children === "function" ? children(values) : children)}
    </RACListBoxItem>
  )
}

const ListBoxSection = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <RACListBoxSection
    className={cn(
      "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2.5 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group-heading]]:text-xs",
      props.className
    )}
    data-slot="list-box-section"
    {...props}
  >
    {title && (
      <Header className="pointer-events-none" data-slot="title">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </RACListBoxSection>
)

interface ListBoxDetailsProps extends TextProps {
  description?: TextProps["children"]
}

const ListBoxDetails = ({ title, description, ...props }: ListBoxDetailsProps) => {
  const { children, ...restProps } = props

  return (
    <div className="col-start-2 flex flex-col gap-y-1" data-slot="item-details" {...restProps}>
      {title && (
        <Text className="font-medium sm:text-sm" slot="label">
          {title}
        </Text>
      )}
      {description && (
        <Text className="text-muted-foreground text-xs" slot="description" {...restProps}>
          {description}
        </Text>
      )}
      {!title && children}
    </div>
  )
}

const ListBoxSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("col-span-full -mx-1 my-1 h-px bg-muted", className)} orientation="horizontal" {...props} />
)

ListBox.Section = ListBoxSection
ListBox.Details = ListBoxDetails
ListBox.Item = ListBoxItem
ListBox.Separator = ListBoxSeparator

export type { Selection }
export { ListBox, ListBoxDetails, ListBoxItem, ListBoxSection, ListBoxSeparator }
