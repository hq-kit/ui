'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/ui/table'

export default function TableBulkDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
  return (
    <Card className='p-0'>
      <CardContent>
        <Table
          aria-label='Books'
          bleed
          onSelectionChange={setSelectedKeys}
          selectedKeys={selectedKeys}
          selectionMode='multiple'
        >
          <TableHeader>
            <TableColumn className='w-0'>#</TableColumn>
            <TableColumn isRowHeader>Title</TableColumn>
            <TableColumn>Author</TableColumn>
            <TableColumn>Genre</TableColumn>
            <TableColumn>Published</TableColumn>
          </TableHeader>
          <TableBody items={books}>
            {(item) => (
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell className='whitespace-nowrap'>{item.title}</TableCell>
                <TableCell className='whitespace-nowrap'>{item.author}</TableCell>
                <TableCell>{item.genre}</TableCell>
                <TableCell>{item.publishedYear}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <div className='flex justify-center pb-4 text-muted-foreground'>
        {Array.from(selectedKeys).length > 0 ? (
          <span className='flex items-center gap-2'>
            You have selected: <strong>{Array.from(selectedKeys).join(', ')}</strong>
          </span>
        ) : (
          'You have not selected anything.'
        )}
      </div>
    </Card>
  )
}

export const books = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publishedYear: 1960
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    publishedYear: 1949
  },
  {
    id: '3',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    publishedYear: 1925
  },
  {
    id: '4',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    publishedYear: 1951
  },
  {
    id: '5',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    publishedYear: 1813
  },
  {
    id: '6',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    publishedYear: 1954
  },
  {
    id: '7',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    publishedYear: 1997
  }
]
