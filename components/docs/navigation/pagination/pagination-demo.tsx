import { Pagination } from '@/components/ui'

export default function PaginationDemo() {
    return (
        <Pagination>
            <Pagination.Item href='#first' slot='first' />
            <Pagination.Item href='#previous' slot='previous' />
            <Pagination.Item href='#1'>1</Pagination.Item>
            <Pagination.Item href='#2' isCurrent>
                2
            </Pagination.Item>
            <Pagination.Item href='#3'>3</Pagination.Item>
            <Pagination.Item slot='ellipsis' />
            <Pagination.Item href='#6'>6</Pagination.Item>
            <Pagination.Item href='#7'>7</Pagination.Item>
            <Pagination.Item href='#next' slot='next' />
            <Pagination.Item href='#last' slot='last' />
        </Pagination>
    )
}
