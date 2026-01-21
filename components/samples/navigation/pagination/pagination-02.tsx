import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'

const PaginationWithIconDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink aria-label='Go to previous page' href='#' size='icon'>
            <IconChevronLeft className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
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

export default PaginationWithIconDemo
