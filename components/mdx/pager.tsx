'use client'

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { findNeighbour, type Root as PageTreeRoot } from 'fumadocs-core/page-tree'
import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { cn } from '@/lib/utils'

interface PageProps {
  tree: PageTreeRoot
  url: string
  className?: string
}

export const Pager = ({ tree, url, className }: PageProps) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={cn('not-prose mt-6 flex w-full justify-between gap-3 sm:mt-8', className)}>
      {neighbours.previous && (
        <div className='group w-40'>
          <Link className={buttonVariants({ variant: 'outline' })} href={neighbours.previous.url}>
            <IconChevronLeft className='transition-transform group-hover:-translate-x-0.5' />
            <span className='line-clamp-1 text-foreground'>{neighbours.previous.name}</span>
          </Link>
        </div>
      )}

      {neighbours.next && (
        <div className='group ml-auto flex w-40 justify-end'>
          <Link className={buttonVariants({ variant: 'outline' })} href={neighbours.next.url}>
            <span className='line-clamp-1 text-foreground'>{neighbours.next.name}</span>
            <IconChevronRight className='transition-transform group-hover:translate-x-0.5' />
          </Link>
        </div>
      )}
    </div>
  )
}

export const MobilePager = ({ tree, url, className }: PageProps) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={cn('not-prose flex items-center gap-x-1.5', className)}>
      {neighbours.previous && (
        <Link className={buttonVariants({ variant: 'outline', size: 'icon-sm' })} href={neighbours.previous.url}>
          <span className='sr-only'>{neighbours.previous.name}</span>
          <IconChevronLeft />
        </Link>
      )}

      {neighbours.next && (
        <Link className={buttonVariants({ variant: 'outline', size: 'icon-sm' })} href={neighbours.next.url}>
          <span className='sr-only'>{neighbours.next.name}</span>
          <IconChevronRight />
        </Link>
      )}
    </div>
  )
}
