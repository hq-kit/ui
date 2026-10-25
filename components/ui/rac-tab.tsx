"use client"
import { cva } from "class-variance-authority"
import { cn } from "cn"
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

const tabsStyles = cva("flex max-w-full gap-2 font-sans", {
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row"
    }
  }
})

export function Tabs(props: TabsProps) {
  return (
    <RACTabs
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className })
      )}
    />
  )
}

const tabListStyles = cva("-m-1 flex max-w-full [scrollbar-width:none] overflow-x-auto overflow-y-clip p-1", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
})

export function TabList<T>(props: TabListProps<T>) {
  return (
    <RACTabList
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabListStyles({ ...renderProps, className })
      )}
    />
  )
}

const tabProps = cva(
  "group relative flex cursor-default items-center rounded-full px-3 py-1.5 text-sm font-medium transition forced-color-adjust-none [-webkit-tap-highlight-color:transparent]",
  {
    variants: {
      isDisabled: {
        true: "selected:text-white dark:selected:text-neutral-500 forced-colors:selected:text-[HighlightText] selected:bg-neutral-200 dark:selected:bg-neutral-600 forced-colors:selected:bg-[GrayText] text-neutral-200 dark:text-neutral-600 forced-colors:text-[GrayText]"
      }
    }
  }
)

export function Tab(props: TabProps) {
  return (
    <RACTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabProps({ ...renderProps, className })
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <SelectionIndicator className="absolute top-0 left-0 z-10 h-full w-full rounded-full bg-white mix-blend-difference group-disabled:-z-1 group-disabled:bg-neutral-400 group-disabled:mix-blend-normal motion-safe:transition-[translate,width,height] group-disabled:dark:bg-neutral-600" />
        </>
      ))}
    </RACTab>
  )
}

export function TabPanels<T>(props: TabPanelsProps<T>) {
  return (
    <RACTabPanels
      {...props}
      className={cn("relative h-(--tab-panel-height) overflow-clip motion-safe:transition-[height]", props.className)}
    />
  )
}

const tabPanelStyles = cva(
  "entering:opacity-0 exiting:opacity-0 exiting:absolute exiting:top-0 exiting:left-0 exiting:w-full box-border flex-1 p-4 text-sm text-neutral-900 transition dark:text-neutral-100"
)

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className })
      )}
    />
  )
}
