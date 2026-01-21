import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const NumberlessPaginationDemo = () => {
  return (
    <Pagination>
      <PaginationContent className='w-full justify-between'>
        <PaginationItem>
          <PaginationPrevious className='border' href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className='border' href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default NumberlessPaginationDemo
