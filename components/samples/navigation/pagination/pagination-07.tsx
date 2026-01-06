import { IconChevronLeft, IconChevronLeftPipe, IconChevronRight, IconChevronRightPipe } from '@tabler/icons-react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'

const pages = [1, 2, 3]

const PaginationWithFirstAndLastPageButtonNavigation = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink aria-label='Go to first page' className='rounded-full' href='#' size='icon'>
            <IconChevronLeftPipe className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink aria-label='Go to previous page' className='rounded-full' href='#' size='icon'>
            <IconChevronLeft className='size-4' />
          </PaginationLink>
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink className='rounded-full' href={`#${page}`} isActive={page === 2}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink aria-label='Go to next page' className='rounded-full' href='#' size='icon'>
            <IconChevronRight className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink aria-label='Go to last page' className='rounded-full' href='#' size='icon'>
            <IconChevronRightPipe className='size-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithFirstAndLastPageButtonNavigation
