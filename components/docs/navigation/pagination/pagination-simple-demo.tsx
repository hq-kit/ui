import { Pagination } from '@/components/ui'

export default function PaginationSimpleDemo() {
    return (
        <Pagination>
            <Pagination.Item role='first' href='#' />
            <Pagination.Item role='previous' href='#' />
            <Pagination.Label current={2} total={10} />
            <Pagination.Item role='next' href='#' />
            <Pagination.Item role='last' href='#' />
        </Pagination>
    )
}
