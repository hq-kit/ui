"use client"

import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  TabPanels as RACTabPanels,
  Tabs as RACTabs,
  SelectionIndicator,
  type TabListProps,
  type TabPanelProps,
  type TabPanelsProps,
  type TabProps,
  type TabsProps
} from "react-aria-components/Tabs"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const Tabs = ({ className, orientation = "horizontal", ...props }: TabsProps) => (
  <RACTabs
    className={composeRenderProps(className, (className) =>
      cn("cn-tabs group/tabs flex data-[orientation=horizontal]:flex-col", className)
    )}
    data-orientation={orientation}
    data-slot="tabs"
    {...props}
  />
)
const tabsListVariants = tv({
  base: "cn-tabs-list group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  variants: {
    variant: {
      default: "cn-tabs-list-variant-default bg-muted",
      line: "cn-tabs-list-variant-line gap-1 bg-transparent"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const TabsList = <T extends object>({
  className,
  variant,
  ...props
}: TabListProps<T> & VariantProps<typeof tabsListVariants>) => (
  <RACTabList
    className={composeRenderProps(className, (className) => cn(tabsListVariants({ variant }), className))}
    data-slot="tabs-list"
    data-variant={variant}
    {...props}
  />
)

const TabsTrigger = ({ className, ...props }: TabProps) => (
  <RACTab
    className={composeRenderProps(className, (className) =>
      cn(
        "cn-tabs-trigger group/tab relative isolate inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all hover:text-foreground focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "data-selected:text-foreground group-data-[variant=line]/tabs-list:bg-transparent dark:data-selected:text-foreground",
        "href" in props ? "cursor-pointer" : "cursor-default",
        className
      )
    )}
    data-slot="tabs-trigger"
    {...props}
  >
    {(values) => (
      <>
        {typeof props.children === "function" ? props.children(values) : props.children}
        <SelectionIndicator
          className={cn(
            "absolute left-0 -z-1 size-full rounded-[inherit] border motion-safe:transition-[translate,width,color]",
            "bg-background dark:border-input dark:bg-input/30",
            "group-focus-visible/tab:border-ring group-focus-visible/tab:outline-1 group-focus-visible/tab:outline-ring group-focus-visible/tab:ring-[3px] group-focus-visible/tab:ring-ring/50",
            "group-data-[variant=line]/tabs-list:border-transparent group-data-[variant=line]/tabs-list:bg-transparent dark:group-data-[variant=line]/tabs-list:border-transparent dark:group-data-[variant=line]/tabs-list:bg-transparent",
            "group-data-[variant=default]/tabs-list:shadow-sm group-data-[variant=line]/tabs-list:shadow-none",
            "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=horizontal]/tabs:after:-bottom-1.25 group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:after:opacity-100"
          )}
          data-slot="selected-indicator"
        />
      </>
    )}
  </RACTab>
)

const TabsContents = <T extends object>({ className, ...props }: TabPanelsProps<T>) => (
  <RACTabPanels
    {...props}
    className={cn("relative h-(--tab-panel-height) flex-1 outline-none motion-safe:transition-[height]", className)}
  />
)

const TabsContent = ({ className, ...props }: TabPanelProps) => (
  <RACTabPanel
    className={composeRenderProps(className, (className) => cn("cn-tabs-content flex-1 outline-none", className))}
    data-slot="tabs-content"
    {...props}
  />
)

Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Contents = TabsContents
Tabs.Content = TabsContent

export { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger }
