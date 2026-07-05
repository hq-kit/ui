import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"

const pages = [1, 2, 3]

const PaginationWithFirstAndLastPageButtonNavigation = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst className="rounded-full p-0" text="" />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious className="rounded-full p-0" text="" />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink className="rounded-full" href={`#${page}`} isActive={page === 2}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext className="rounded-full p-0" text="" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast className="rounded-full p-0" text="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithFirstAndLastPageButtonNavigation
