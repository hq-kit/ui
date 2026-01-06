'use client'

import { IconChevronLeft, IconChevronLeftPipe, IconChevronRight, IconChevronRightPipe } from '@tabler/icons-react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const PaginationWithSelectDemo = () => {
  return (
    <Pagination>
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

        <PaginationItem>
          <Select aria-label='Select page' defaultValue={String(1)} name='page' placeholder='Select page'>
            <SelectTrigger aria-label='Select page' className='w-fit whitespace-nowrap' id='select-page'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
                <SelectItem id={String(page)} key={page}>
                  Page {page}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
  )
}

export default PaginationWithSelectDemo
