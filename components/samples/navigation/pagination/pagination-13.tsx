import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'

const MiniPagination = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink aria-label='Go to previous page' href='#' size='icon'>
            <IconChevronLeft className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <p aria-live='polite' className='text-muted-foreground text-sm'>
            Page <span className='text-foreground'>2</span> of <span className='text-foreground'>5</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink aria-label='Go to next page' href='#' size='icon'>
            <IconChevronRight className='size-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default MiniPagination
