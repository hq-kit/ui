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
            <Pagination.Item href='#' slot='first' />
            <Pagination.Item href='#' slot='previous' />
            <Pagination.Label className='lg:hidden' current={3} total={pages.length} />
            <Pagination.Pages className='hidden lg:flex' items={pages}>
                {(item) => (
                    <Pagination.Item href={item.href} id={item.page} isCurrent={item.current}>
                        {item.page}
                    </Pagination.Item>
                )}
            </Pagination.Pages>
            <Pagination.Item href='#' slot='next' />
            <Pagination.Item href='#' slot='last' />
        </Pagination>
    )
}
