import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const pages = [1, 2, 3]

const PaginationWithRoundedButton = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className='rounded-full' href='#' />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink className='rounded-full' href={`#${page}`} isActive={page === 2}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext className='rounded-full' href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithRoundedButton
