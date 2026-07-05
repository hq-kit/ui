"use client"

import type { ReactNode } from "react"
import { Button } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Tree as RACTree,
  TreeItem as RACTreeItem,
  type Selection,
  TreeItemContent,
  type TreeItemContentProps,
  type TreeItemProps,
  type TreeProps
} from "react-aria-components/Tree"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => (
  <RACTree
    className={composeRenderProps(className, (className) =>
      cn(
        "flex flex-col gap-0.5 text-sm outline-hidden",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_.react-aria-DropIndicator[data-drop-target]]:border",
        "[&_.react-aria-DropIndicator[data-drop-target]]:border-primary",
        "[&_.react-aria-DropIndicator[data-drop-target]]:transform-[translateZ(0)]",
        className
      )
    )}
    data-slot="tree"
    {...props}
  />
)

const TreeItem = <T extends object>({ className, ...props }: TreeItemProps<T>) => (
  <RACTreeItem
    className={composeRenderProps(className, (className) =>
      cn(
        "hover:bg-muted data-selected:bg-muted rounded-sm px-1.5 py-0.5 text-sm font-medium relative flex cursor-default items-center gap-1 border border-transparent pr-2 text-sm outline-hidden transition",
        "data-drop-target:border-primary",
        "focus-visible:border-border focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "hover:bg-accent hover:text-accent-foreground",
        "data-selected:bg-accent data-selected:text-accent-foreground",
        "data-disabled:opacity-50",
        className
      )
    )}
    data-slot="tree-item"
    {...props}
  />
)

interface TreeItemLabelProps extends TreeItemContentProps {
  icon?: ReactNode | boolean
  iconExpanded?: ReactNode
}

const TreeItemLabel = ({ children, icon, iconExpanded, ...props }: TreeItemLabelProps) => (
  <TreeItemContent {...props}>
    {(values) => (
      <>
        <div className="relative w-[calc(calc(var(--tree-item-level)-1)*(--spacing(5.5)))] shrink-0" />
        {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
          <Checkbox className="mr-0.5 w-min" slot="selection" />
        )}
        {values.hasChildItems ? (
          <span className="inline-flex w-full items-center justify-start gap-1 outline-hidden" data-slot="tree-item">
            <Button
              className="inline-flex grow items-center justify-start gap-1 outline-hidden"
              data-slot="tree-item"
              slot="chevron"
            >
              <IconPlaceholder
                className={cn("transition-transform", values.isExpanded && "rotate-90")}
                data-slot="indicator"
                hugeicons="ArrowRight01Icon"
                lucide="ChevronRightIcon"
                phosphor="CaretRightIcon"
                remixicon="RiArrowRightSLine"
                tabler="IconChevronRight"
              />
              {!values.isExpanded &&
                (typeof icon === "boolean" ? (
                  <IconPlaceholder
                    hugeicons="File02Icon"
                    lucide="FileIcon"
                    phosphor="FileIcon"
                    remixicon="RiFileLine"
                    tabler="IconFile"
                  />
                ) : (
                  icon
                ))}
              {values.hasChildItems && values.isExpanded && (iconExpanded ?? icon)}
              {typeof children === "function" ? children(values) : children}
            </Button>
          </span>
        ) : (
          <span
            className="inline-flex w-full items-center justify-start gap-1 whitespace-nowrap outline-hidden"
            data-slot="tree-item"
          >
            {typeof icon === "boolean" ? (
              <IconPlaceholder
                hugeicons="File02Icon"
                lucide="FileIcon"
                phosphor="FileIcon"
                remixicon="RiFileLine"
                tabler="IconFile"
              />
            ) : (
              icon
            )}
            {typeof children === "function" ? children(values) : children}
          </span>
        )}
      </>
    )}
  </TreeItemContent>
)

Tree.Item = TreeItem
Tree.ItemLabel = TreeItemLabel

export type { Selection, TreeItemProps, TreeProps }
export { Tree, TreeItem, TreeItemLabel }
