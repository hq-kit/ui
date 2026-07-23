"use client"

import type { ComponentProps } from "react"
import type { GridListItemProps, GridListProps, TextProps } from "react-aria-components/GridList"
import type { VariantProps } from "tailwind-variants"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Collection,
  GridList as RACGridList,
  GridListHeader as RACGridListHeader,
  GridListItem as RACGridListItem,
  GridListSection as RACGridListSection,
  type Selection,
  Text
} from "react-aria-components/GridList"
import { cn } from "@/lib/utils"
import { attachmentMediaVariants, attachmentVariants } from "./attachment"
import { Button } from "./button"
import { Checkbox } from "./checkbox"

const GridList = <T extends object>({ className, ...props }: GridListProps<T>) => (
  <RACGridList
    className={composeRenderProps(className, (className) =>
      cn(
        "gap-3 scroll-px-1 py-1 scrollbar-none relative min-w-0 snap-x snap-mandatory overflow-auto overscroll-x-contain empty:flex empty:items-center empty:justify-center empty:text-sm empty:italic *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",
        "data-[orientation=horizontal]:flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-nowrap data-[orientation=horizontal]:overflow-x-auto",
        "data-[orientation=vertical]:grid data-[orientation=vertical]:px-1",
        "data-[layout=grid]:grid data-[layout=grid]:not-data-[orientation=vertical]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "[&_.react-aria-DropIndicator[data-drop-target]]:outline",
        "[&_.react-aria-DropIndicator[data-drop-target]]:outline-destructive",
        "[&_.react-aria-DropIndicator[data-drop-target]]:transform-[translateZ(0)]",
        className
      )
    )}
    data-slot="attachment-group"
    {...props}
  />
)

const GridListSection = <T extends object>({
  className,
  title,
  ...props
}: ComponentProps<typeof RACGridListSection<T>> & { title?: string }) => {
  return (
    <RACGridListSection className={cn("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", className)} data-slot="grid-list-section" {...props}>
      {title && (
        <RACGridListHeader className="pointer-events-none" data-slot="title">
          {title}
        </RACGridListHeader>
      )}
      <Collection items={props.items}>{props.children}</Collection>
    </RACGridListSection>
  )
}

const GridListItem = ({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  children,
  ...props
}: GridListItemProps &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done"
  }) => {
  const resolvedOrientation = orientation ?? "horizontal"
  const textValue = typeof children === "string" ? children : undefined

  return (
    <RACGridListItem
      data-orientation={resolvedOrientation}
      data-size={size}
      data-slot="attachment"
      data-state={state}
      textValue={textValue}
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          attachmentVariants({ size, className }),
          "select-none data-selected:bg-accent data-selected:text-accent-foreground",
          "data-hovered:border data-hovered:border-ring",
          "data-dragging:cursor-grabbing data-dragging:outline data-dragging:outline-primary",
          typeof children === "string" &&
            "gap-2 p-2 [--radius:var(--radius-xl)] relative items-center data-[orientation=horizontal]:w-full",
          "href" in props && "cursor-pointer",
          "data-disabled:pointer-events-none data-disabled:opacity-50",
          className
        )
      )}
    >
      {(values) => (
        <>
          {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
            <GridListItemActions className="group-data-[orientation=vertical]/attachment:left-4">
              <Checkbox className="w-auto" excludeFromTabOrder slot="selection" />
            </GridListItemActions>
          )}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </RACGridListItem>
  )
}

const GridListItemMedia = ({
  className,
  variant = "icon",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) => (
  <div
    className={cn(attachmentMediaVariants({ variant, className }))}
    data-slot="attachment-media"
    data-variant={variant}
    {...props}
  />
)

const GridListItemContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("leading-tight group-data-[orientation=vertical]/attachment:px-1 min-w-0 max-w-full flex-1", className)}
    data-slot="attachment-content"
    {...props}
  />
)

const GridListItemTitle = ({ className, ...props }: TextProps) => (
  <Text
    className={cn(
      "font-medium group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer block min-w-0 max-w-full truncate",
      className
    )}
    data-slot="attachment-title"
    {...props}
  />
)

const GridListItemDescription = ({ className, ...props }: TextProps) => (
  <Text
    className={cn(
      "mt-0.5 text-xs block min-w-0 truncate text-muted-foreground group-data-[state=error]/attachment:text-destructive/80",
      "max-w-full",
      className
    )}
    data-slot="attachment-description"
    {...props}
  />
)

const GridListItemActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:right-3 relative z-20 group-data-[orientation=vertical]/attachment:gap-1 flex shrink-0 items-center", className)}
    data-slot="attachment-actions"
    {...props}
  />
)

const GridListItemAction = ({ className, variant, size = "icon-xs", ...props }: ComponentProps<typeof Button>) => (
  <Button
    className={cn(className)}
    data-slot="attachment-action"
    size={size}
    variant={variant ?? "ghost"}
    {...props}
  />
)

const GridListEmptyState = ({ ref, className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      'flex items-center justify-center gap-2 rounded-lg border border-dashed p-6 [&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
      className
    )}
    ref={ref}
    {...props}
  />
)

GridList.Section = GridListSection
GridList.Item = GridListItem
GridList.ItemMedia = GridListItemMedia
GridList.ItemContent = GridListItemContent
GridList.ItemTitle = GridListItemTitle
GridList.ItemDescription = GridListItemDescription
GridList.ItemActions = GridListItemActions
GridList.ItemAction = GridListItemAction
GridList.EmptyState = GridListEmptyState

export type { Selection }
export {
  GridList,
  GridListEmptyState,
  GridListItem,
  GridListItemAction,
  GridListItemActions,
  GridListItemContent,
  GridListItemDescription,
  GridListItemMedia,
  GridListItemTitle,
  GridListSection
}
