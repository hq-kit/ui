"use client"

import { IconChevronRight } from "@tabler/icons-react"
import { cn } from "cn"
import { type ComponentProps, createContext, type ReactNode, use } from "react"
import {
  type BreadcrumbProps,
  type BreadcrumbsProps,
  Breadcrumb as RACBreadcrumb,
  Breadcrumbs as RACBreadcrumbs
} from "react-aria-components/Breadcrumbs"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Link, type LinkProps } from "./link"

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
        className={cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word", className)}
      />
    </BreadcrumbsProvider>
  )
}

interface BreadcrumbsItemProps extends BreadcrumbProps, BreadcrumbsContextProps {
  href?: string
}

const BreadcrumbItem = ({ className, ...props }: BreadcrumbsItemProps & Omit<LinkProps, "className" | "ref">) => {
  const { separator } = use(BreadcrumbsProvider)

  return (
    <RACBreadcrumb
      className={composeRenderProps(className, (className, { isCurrent }) =>
        cn(
          "inline-flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          isCurrent ? "text-foreground" : "text-muted-foreground hover:*:[a]:text-foreground",
          className
        )
      )}
      data-slot="breadcrumb-item"
      {...props}
    >
      {({ isCurrent }) => (
        <>
          <Link className="hover:text-foreground flex items-center gap-2 transition-colors" {...props} />
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
    {children ?? <IconChevronRight />}
  </span>
)

Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Separator = BreadcrumbSeparator

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator }
