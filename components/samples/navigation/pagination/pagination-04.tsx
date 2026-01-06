'use client'

import { buttonVariants } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

const PaginationWithSecondaryButtonDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={cn(
              'border-none! shadow-none! hover:text-secondary-foreground!',
              buttonVariants({
                variant: 'secondary',
                size: 'icon'
              })
            )}
            href='#'
            isActive
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithSecondaryButtonDemo
