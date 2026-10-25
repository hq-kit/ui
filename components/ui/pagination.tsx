import type { ComponentProps } from "react"
import {
  IconChevronLeft,
  IconChevronLeftPipe,
  IconChevronRight,
  IconChevronRightPipe,
  IconDots
} from "@tabler/icons-react"
import { cn } from "cn"
import { Button, buttonVariants } from "./button"
import { Link, type LinkProps } from "./link"

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    data-slot="pagination"
    {...props}
  />
)

const PaginationContent = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul className={cn("flex items-center gap-0.5", className)} data-slot="pagination-content" {...props} />
)

const PaginationItem = ({ ...props }: ComponentProps<"li">) => <li data-slot="pagination-item" {...props} />

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: ComponentProps<typeof Button> & {
  isActive?: boolean
} & Omit<LinkProps, "size">) => {
  return "href" in props ? (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={buttonVariants({
        size,
        variant: isActive ? "outline" : "ghost",
        className: props.isDisabled ? "disabled" : ""
      })}
      data-active={isActive}
      data-slot="pagination-link"
      {...props}
    />
  ) : (
    <Button
      aria-current={isActive ? "page" : undefined}
      data-active={isActive}
      data-slot="pagination-link"
      size={size}
      variant={isActive ? "outline" : "ghost"}
      {...props}
    />
  )
}

const PaginationFirst = ({ text = "First", ...props }: ComponentProps<typeof PaginationLink> & { text?: string }) => {
  return (
    <PaginationLink aria-label="Go to previous page" size="md" {...props}>
      <IconChevronLeftPipe />
      <span className="sr-only">{text}</span>
    </PaginationLink>
  )
}
const PaginationPrevious = ({
  text = "Previous",
  ...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) => {
  return (
    <PaginationLink aria-label="Go to previous page" size="md" {...props}>
      <IconChevronLeft />
      <span className="sr-only">{text}</span>
    </PaginationLink>
  )
}

const PaginationNext = ({ text = "Next", ...props }: ComponentProps<typeof PaginationLink> & { text?: string }) => (
  <PaginationLink aria-label="Go to next page" size="md" {...props}>
    <span className="sr-only">{text}</span>
    <IconChevronRight />
  </PaginationLink>
)

const PaginationLast = ({ text = "Last", ...props }: ComponentProps<typeof PaginationLink> & { text?: string }) => (
  <PaginationLink aria-label="Go to last page" size="md" {...props}>
    <span className="sr-only">{text}</span>
    <IconChevronRightPipe />
  </PaginationLink>
)

const PaginationEllipsis = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4", className)}
    data-slot="pagination-ellipsis"
    {...props}
  >
    <IconDots />
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
