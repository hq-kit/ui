import { Pagination } from '@/components/ui'

export default function PaginationSimpleDemo() {
    return (
        <Pagination>
            <Pagination.Item href='#' slot='first' />
            <Pagination.Item href='#' slot='previous' />
            <Pagination.Label current={2} total={10} />
            <Pagination.Item href='#' slot='next' />
            <Pagination.Item href='#' slot='last' />
        </Pagination>
    )
}
