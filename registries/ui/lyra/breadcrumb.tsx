"use client"

import { type ComponentProps, createContext, type ReactNode, use } from "react"
import {
  type BreadcrumbProps,
  type BreadcrumbsProps,
  Link,
  type LinkProps,
  Breadcrumb as RACBreadcrumb,
  Breadcrumbs as RACBreadcrumbs
} from "react-aria-components/Breadcrumbs"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

type BreadcrumbsContextProps = { separator?: ReactNode }
const BreadcrumbsProvider = createContext<BreadcrumbsContextProps>({})

const Breadcrumb = <T extends object>({
  className,
  separator = <BreadcrumbSeparator />,
  ...props
}: BreadcrumbsProps<T> & BreadcrumbsContextProps) => {
  return (
    <BreadcrumbsProvider value={{ separator }}>
      <RACBreadcrumbs
        data-slot="breadcrumb-list"
        {...props}
        className={cn("text-muted-foreground gap-1.5 text-xs wrap-break-word flex flex-wrap items-center", className)}
      />
    </BreadcrumbsProvider>
  )
}

interface BreadcrumbsItemProps extends BreadcrumbProps, BreadcrumbsContextProps {
  href?: string
}

const BreadcrumbItem = ({ className, ...props }: BreadcrumbsItemProps & Omit<LinkProps, "className">) => {
  const { separator } = use(BreadcrumbsProvider)

  return (
    <RACBreadcrumb
      className={composeRenderProps(className, (className, { isCurrent }) =>
        cn(
          "gap-1 inline-flex items-center [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          isCurrent ? "text-foreground" : "text-muted-foreground hover:*:[a]:text-foreground",
          className
        )
      )}
      data-slot="breadcrumb-item"
      {...props}
    >
      {({ isCurrent }) => (
        <>
          <Link className="hover:text-foreground transition-colors flex items-center gap-2" {...props} />
          {!isCurrent && separator}
        </>
      )}
    </RACBreadcrumb>
  )
}

const BreadcrumbSeparator = ({ children, className, ...props }: ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    data-slot="breadcrumb-separator"
    role="presentation"
    {...props}
  >
    {children ?? (
      <IconPlaceholder
        className=""
        hugeicons="ArrowRight01Icon"
        lucide="ChevronRightIcon"
        phosphor="CaretRightIcon"
        remixicon="RiArrowRightSLine"
        tabler="IconChevronRight"
      />
    )}
  </span>
)

Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Separator = BreadcrumbSeparator

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator }
