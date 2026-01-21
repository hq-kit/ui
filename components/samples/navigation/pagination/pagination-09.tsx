import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const PaginationUnderlineDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className='rounded-none' href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className='rounded-none border-0 border-primary! border-b-2 bg-transparent! shadow-none!'
            href='#'
            isActive
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className='rounded-none' href='#'>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className='rounded-none' href='#'>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className='rounded-none' href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationUnderlineDemo
