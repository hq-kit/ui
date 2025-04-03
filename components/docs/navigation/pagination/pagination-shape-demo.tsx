import { Pagination } from '@/components/ui'

export default function PaginationShapeDemo() {
    return (
        <Pagination shape='circle'>
            <Pagination.Item role='first' href='#first' />
            <Pagination.Item role='previous' href='#previous' />
            <Pagination.Pages>
                <Pagination.Item href='#1'>1</Pagination.Item>
                <Pagination.Item href='#2'>2</Pagination.Item>
                <Pagination.Item href='#3'>3</Pagination.Item>
                <Pagination.Item role='ellipsis' />
                <Pagination.Item href='#6'>6</Pagination.Item>
                <Pagination.Item href='#7'>7</Pagination.Item>
            </Pagination.Pages>
            <Pagination.Item role='next' href='#next' />
            <Pagination.Item role='last' href='#last' />
        </Pagination>
    )
}
