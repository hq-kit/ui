import { Pagination } from '@/components/ui'

export default function PaginationDemo() {
    return (
        <Pagination>
            <Pagination.Item slot='first' href='#first' />
            <Pagination.Item slot='previous' href='#previous' />
            <Pagination.Pages>
                <Pagination.Item href='#1'>1</Pagination.Item>
                <Pagination.Item href='#2'>2</Pagination.Item>
                <Pagination.Item href='#3'>3</Pagination.Item>
                <Pagination.Item slot='ellipsis' />
                <Pagination.Item href='#6'>6</Pagination.Item>
                <Pagination.Item href='#7'>7</Pagination.Item>
            </Pagination.Pages>
            <Pagination.Item slot='next' href='#next' />
            <Pagination.Item slot='last' href='#last' />
        </Pagination>
    )
}
