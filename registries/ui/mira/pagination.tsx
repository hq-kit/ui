"use client"

import type { ComponentProps } from "react"
import { Button as RACButton } from "react-aria-components/Button"
import { Link, type LinkProps } from "react-aria-components/Link"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { type Button, buttonVariants } from "./button"

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    data-slot="pagination"
    {...props}
  />
)

const PaginationContent = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul className={cn("gap-0.5 flex items-center", className)} data-slot="pagination-content" {...props} />
)

const PaginationItem = ({ ...props }: ComponentProps<"li">) => <li data-slot="pagination-item" {...props} />

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: Omit<LinkProps, "className" | "slot"> &
  Omit<ComponentProps<typeof Button>, "ref"> & {
    isActive?: boolean
  }) => {
  const Comp = "href" in props ? Link : RACButton

  return (
    <Comp
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      )}
      data-active={isActive}
      data-slot="pagination-link"
      {...props}
    />
  )
}

const PaginationFirst = ({
  className,
  text = "First",
  ...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("pl-2!", className)}
      size="default"
      {...props}
    >
      <IconPlaceholder
        className=""
        data-icon="inline-start"
        hugeicons="ChevronFirstIcon"
        lucide="ChevronFirstIcon"
        phosphor="CaretLineLeftIcon"
        remixicon="RiSkipLeftLine"
        tabler="IconChevronLeftPipe"
      />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  )
}
const PaginationPrevious = ({
  className,
  text = "Previous",
  ...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("pl-2!", className)}
      size="default"
      {...props}
    >
      <IconPlaceholder
        className=""
        data-icon="inline-start"
        hugeicons="ArrowLeft01Icon"
        lucide="ChevronLeftIcon"
        phosphor="CaretLeftIcon"
        remixicon="RiArrowLeftSLine"
        tabler="IconChevronLeft"
      />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  )
}

const PaginationNext = ({
  className,
  text = "Next",
  ...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("pr-2!", className)}
    size="default"
    {...props}
  >
    <span className="hidden sm:block">{text}</span>
    <IconPlaceholder
      className=""
      data-icon="inline-end"
      hugeicons="ArrowRight01Icon"
      lucide="ChevronRightIcon"
      phosphor="CaretRightIcon"
      remixicon="RiArrowRightSLine"
      tabler="IconChevronRight"
    />
  </PaginationLink>
)

const PaginationLast = ({
  className,
  text = "Last",
  ...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) => (
  <PaginationLink
    aria-label="Go to last page"
    className={cn("pr-2!", className)}
    size="default"
    {...props}
  >
    <span className="hidden sm:block">{text}</span>
    <IconPlaceholder
      className=""
      data-icon="inline-end"
      hugeicons="ChevronLastIcon"
      lucide="ChevronLastIcon"
      phosphor="CaretLineRightIcon"
      remixicon="RiSkipRightLine"
      tabler="IconChevronRightPipe"
    />
  </PaginationLink>
)

const PaginationEllipsis = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("size-7 items-center justify-center [&_svg:not([class*='size-'])]:size-3.5 flex items-center justify-center", className)}
    data-slot="pagination-ellipsis"
    {...props}
  >
    <IconPlaceholder
      hugeicons="MoreHorizontalCircle01Icon"
      lucide="MoreHorizontalIcon"
      phosphor="DotsThreeIcon"
      remixicon="RiMoreLine"
      tabler="IconDots"
    />
    <span className="sr-only">More pages</span>
  </span>
)

Pagination.Content = PaginationContent
Pagination.Link = PaginationLink
Pagination.Item = PaginationItem
Pagination.First = PaginationFirst
Pagination.Previous = PaginationPrevious
Pagination.Next = PaginationNext
Pagination.Last = PaginationLast
Pagination.Ellipsis = PaginationEllipsis

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
}
