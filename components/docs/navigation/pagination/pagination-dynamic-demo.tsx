import { Pagination } from '@/components/ui'

const pages = [
    { page: 1, href: '#', current: false },
    { page: 2, href: '#', current: false },
    { page: 3, href: '#', current: true },
    { page: 4, href: '#', current: false },
    { page: 5, href: '#', current: false },
    { page: 6, href: '#', current: false },
    { page: 7, href: '#', current: false }
]

export default function PaginationDynamicDemo() {
    return (
        <Pagination>
            <Pagination.Item slot='first' href='#' />
            <Pagination.Item slot='previous' href='#' />
            <Pagination.Label className='lg:hidden' current={3} total={pages.length} />
            <Pagination.Pages items={pages} className='hidden lg:flex'>
                {(item) => (
                    <Pagination.Item id={item.page} href={item.href} isCurrent={item.current}>
                        {item.page}
                    </Pagination.Item>
                )}
            </Pagination.Pages>
            <Pagination.Item slot='next' href='#' />
            <Pagination.Item slot='last' href='#' />
        </Pagination>
    )
}
