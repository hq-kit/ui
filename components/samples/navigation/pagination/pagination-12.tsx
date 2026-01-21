import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const NumberlessPaginationWithTextDemo = () => {
  return (
    <Pagination>
      <PaginationContent className='w-full justify-between'>
        <PaginationItem>
          <PaginationPrevious className='border' href='#' />
        </PaginationItem>
        <PaginationItem>
          <p aria-live='polite' className='text-muted-foreground text-sm'>
            Page <span className='text-foreground'>2</span> of <span className='text-foreground'>5</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className='border' href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default NumberlessPaginationWithTextDemo
