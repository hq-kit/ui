"use client"

import type {
  TreeItemContentProps,
  TreeItemContentRenderProps,
  TreeItemProps,
  TreeProps
} from "react-aria-components/Tree"
import { Button } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Tree as RACTree, TreeItem as RACTreeItem, TreeItemContent } from "react-aria-components/Tree"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
  return (
    <RACTree
      className={composeRenderProps(className, (className) =>
        cn("flex cursor-default flex-col gap-y-0.5 overflow-auto outline-hidden", className)
      )}
      {...props}
    />
  )
}

const TreeItem = <T extends object>({ className, ...props }: TreeItemProps<T>) => {
  return (
    <RACTreeItem
      className={composeRenderProps(className, (className) =>
        cn(
          [
            "cn-menubar-trigger group/tree-item relative flex shrink-0 select-none focus:outline-hidden",
            "focus:bg-accent focus:text-accent-foreground",
            "**:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:*:size-5 sm:**:data-[slot=avatar]:size-5",
            "**:[svg]:size-5 **:[svg]:shrink-0 sm:**:[svg]:size-4",
            "**:[svg:not([data-slot=check-indicator]):not([data-slot=chevron])]:me-1",
            "disabled:opacity-50 forced-colors:[",
            "href" in props ? "cursor-pointer" : "cursor-default"
          ],
          className
        )
      )}
      {...props}
    />
  )
}

interface TreeContentProps extends TreeItemContentProps {
  className?: string
}

const TreeContent = ({ className, children, ...props }: TreeContentProps) => {
  return (
    <TreeItemContent {...props}>
      {(values) => (
        <div className={cn("relative flex w-full min-w-0 items-center gap-x-1 truncate text-sm/6", className)}>
          {values.allowsDragging && <Button className="sr-only" slot="drag" />}
          {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
            <Checkbox slot="selection" />
          )}
          <div className="relative w-[calc(calc(var(--tree-item-level)-1)*(--spacing(5)))] shrink-0 before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-item-level)-1px),var(--border)_calc(var(--tree-item-level)-1px),var(--border)_calc(var(--tree-item-level)))]" />
          {values.hasChildItems ? (
            <TreeIndicator
              values={{
                isDisabled: values.isDisabled,
                isExpanded: values.isExpanded
              }}
            />
          ) : (
            <span aria-hidden className="block w-5 shrink-0" />
          )}
          {typeof children === "function" ? children(values) : children}
        </div>
      )}
    </TreeItemContent>
  )
}

const TreeIndicator = ({ values }: { values: Pick<TreeItemContentRenderProps, "isDisabled" | "isExpanded"> }) => {
  return (
    <Button
      className={cn(
        "shrink-0 content-center text-muted-foreground hover:text-foreground",
        values.isExpanded && "text-foreground"
      )}
      isDisabled={values.isDisabled}
      slot="chevron"
    >
      <IconPlaceholder
        className={cn(
          "size-5 transition-transform duration-200 ease-in-out sm:size-4",
          values.isExpanded && "rotate-90"
        )}
        data-slot="chevron"
        hugeicons="ArrowRight01Icon"
        lucide="ChevronRightIcon"
        phosphor="CaretRightIcon"
        remixicon="RiArrowRightSLine"
        tabler="IconChevronRight"
      />
    </Button>
  )
}

export type { TreeItemProps, TreeProps }
export { Tree, TreeContent, TreeIndicator, TreeItem }
