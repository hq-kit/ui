'use client'

import { IconChevronLeft, IconChevronLeftPipe, IconChevronRight, IconChevronRightPipe } from '@tabler/icons-react'
import { useId } from 'react'
import { Label } from '@/components/ui/label'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const pages = [1, 2, 3]

const TablePaginationDemo = () => {
  const id = useId()

  return (
    <div className='flex w-full flex-wrap items-center justify-between gap-6 max-sm:justify-center'>
      <div className='flex shrink-0 items-center gap-3'>
        <Label htmlFor={id}>Rows per page</Label>
        <Select aria-label='Show' defaultValue='10' name='show' placeholder='Select number of results'>
          <SelectTrigger className='w-fit whitespace-nowrap' id={id}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className='[&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2'>
            <SelectItem id='10'>10</SelectItem>
            <SelectItem id='25'>25</SelectItem>
            <SelectItem id='50'>50</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex grow items-center justify-end whitespace-nowrap text-muted-foreground max-sm:justify-center'>
        <p aria-live='polite' className='whitespace-nowrap text-muted-foreground text-sm'>
          Showing <span className='text-foreground'>1</span> to <span className='text-foreground'>10</span> of{' '}
          <span className='text-foreground'>100</span> products
        </p>
      </div>
      <Pagination className='w-fit max-sm:mx-0'>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink aria-label='Go to first page' className='rounded-full' href='#' size='icon'>
              <IconChevronLeftPipe className='size-4' />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink aria-label='Go to previous page' className='rounded-full' href='#' size='icon'>
              <IconChevronLeft className='size-4' />
            </PaginationLink>
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink className='rounded-full' href={`#${page}`} isActive={page === 2}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <Tooltip>
              <TooltipTrigger>
                <PaginationEllipsis />
              </TooltipTrigger>
              <TooltipContent>
                <p>2 other pages</p>
              </TooltipContent>
            </Tooltip>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink aria-label='Go to next page' className='rounded-full' href='#' size='icon'>
              <IconChevronRight className='size-4' />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink aria-label='Go to last page' className='rounded-full' href='#' size='icon'>
              <IconChevronRightPipe className='size-4' />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default TablePaginationDemo
