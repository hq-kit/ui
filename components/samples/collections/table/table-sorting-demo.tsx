'use client'

import { useAsyncList } from '@react-stately/data'
import { IconLoader } from '@tabler/icons-react'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/ui/table'

interface Character {
  title: string
  director: number
  producer: number
  release_date: number
}

export default function TableSortingDemo() {
  const list = useAsyncList<Character>({
    async load({ signal }) {
      const res = await fetch('https://swapi.py4e.com/api/films', {
        signal
      })
      const json = await res.json()
      return {
        items: json.results
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // @ts-expect-error
          const first = a[sortDescriptor.column]
          // @ts-expect-error
          const second = b[sortDescriptor.column]
          let cmp = (Number.parseInt(first, 10) || first) < (Number.parseInt(second, 10) || second) ? -1 : 1
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }
          return cmp
        })
      }
    }
  })
  return (
    <Card className='p-0'>
      <CardContent>
        <Table aria-label='Movies' bleed onSortChange={list.sort} sortDescriptor={list.sortDescriptor}>
          <TableHeader>
            <TableColumn id='title' isRowHeader>
              Title
            </TableColumn>
            <TableColumn allowsSorting id='director'>
              Director
            </TableColumn>
            <TableColumn id='producer'>Producer</TableColumn>
            <TableColumn allowsSorting id='release_date'>
              Release Date
            </TableColumn>
          </TableHeader>
          <TableBody
            items={list.items}
            renderEmptyState={() => (
              <div className='grid place-content-center p-10'>
                <IconLoader className='size-4 animate-spin' />
              </div>
            )}
          >
            {(item) => (
              <TableRow id={item.title}>
                <TableCell className='whitespace-nowrap'>{item.title}</TableCell>
                <TableCell className='whitespace-nowrap'>{item.director}</TableCell>
                <TableCell className='whitespace-nowrap'>{item.producer}</TableCell>
                <TableCell>{item.release_date}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
