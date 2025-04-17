import { Pagination } from '@/components/ui'

export default function PaginationSimpleDemo() {
    return (
        <Pagination>
            <Pagination.Item slot='first' href='#' />
            <Pagination.Item slot='previous' href='#' />
            <Pagination.Label current={2} total={10} />
            <Pagination.Item slot='next' href='#' />
            <Pagination.Item slot='last' href='#' />
        </Pagination>
    )
}
