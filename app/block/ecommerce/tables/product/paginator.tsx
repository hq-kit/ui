'use client'

import { Pagination } from '@/components/ui'
import { useIsMobile } from '@/lib/hooks'
import { cn } from '@/lib/utils'

interface PaginateProps {
    className?: string
    show: number
    total: number
    page: number
    action: (page: number) => void
}

export default function Paginator({ className, show, page, total, action }: PaginateProps) {
    const isMobile = useIsMobile()

    const meta = {
        total,
        from: (page - 1) * Number(show) + 1,
        to: total - show * page > 0 ? total - (total - show * page) : show * page - Math.abs(total - show * page),
        page,
        last_page: Math.ceil(total / show)
    }

    const actions = {
        first: () => action(1),
        prev: () => action(page - 1),
        next: () => action(page + 1),
        last: () => action(meta.last_page)
    }
    return (
        <div
            className={cn('flex w-full flex-col-reverse items-center gap-3 xl:flex-row xl:justify-between', className)}
        >
            <div>
                Showing {meta.from} to {meta.to} of {meta.total} results
            </div>
            <div>
                <Pagination>
                    {isMobile ? (
                        <>
                            <Pagination.Item isDisabled={meta.page === 1} onAction={actions.first} slot='first' />
                            <Pagination.Item isDisabled={meta.page === 1} onAction={actions.prev} slot='previous' />
                            <Pagination.Label current={meta.page} total={meta.last_page} />
                            <Pagination.Item
                                isDisabled={meta.page === meta.last_page}
                                onAction={actions.next}
                                slot='next'
                            />
                            <Pagination.Item
                                isDisabled={meta.page === meta.last_page}
                                onAction={actions.last}
                                slot='last'
                            />
                        </>
                    ) : (
                        <>
                            <Pagination.Item isDisabled={meta.page === 1} onAction={actions.first} slot='first' />
                            <Pagination.Item isDisabled={meta.page === 1} onAction={actions.prev} slot='previous' />
                            {meta.page > 2 && (
                                <Pagination.Item onAction={actions.first} slot='first'>
                                    1
                                </Pagination.Item>
                            )}
                            {meta.page > 3 && <Pagination.Item slot='ellipsis' />}
                            {meta.page !== 1 && (
                                <Pagination.Item onAction={() => action(meta.page - 1)} slot='previous'>
                                    {meta.page - 1}
                                </Pagination.Item>
                            )}
                            <Pagination.Item isCurrent>{meta.page}</Pagination.Item>
                            {meta.page !== meta.last_page && (
                                <Pagination.Item onAction={() => action(meta.page + 1)}>
                                    {meta.page + 1}
                                </Pagination.Item>
                            )}
                            {meta.page < meta.last_page - 2 && <Pagination.Item slot='ellipsis' />}
                            {meta.page <= meta.last_page - 2 && (
                                <Pagination.Item onAction={actions.last}>{meta.last_page}</Pagination.Item>
                            )}
                            <Pagination.Item
                                isDisabled={meta.page === meta.last_page}
                                onAction={actions.next}
                                slot='next'
                            />
                            <Pagination.Item
                                isDisabled={meta.page === meta.last_page}
                                onAction={actions.last}
                                slot='last'
                            />
                        </>
                    )}
                </Pagination>
            </div>
        </div>
    )
}
