'use client'

import { NumberFormatter } from '@internationalized/number'
import { IconDotsVertical } from '@tabler/icons-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/ui/table'

export default function TableDemo() {
  return (
    <Card className='p-0'>
      <CardContent>
        <Table aria-label='Products' bleed>
          <TableHeader>
            <TableColumn className='w-0'>#</TableColumn>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Stock</TableColumn>
            <TableColumn />
          </TableHeader>
          <TableBody items={products}>
            {(item) => (
              <TableRow id={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  {new NumberFormatter('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(item.price)}
                </TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <div className='flex justify-end'>
                    <DropdownMenu>
                      <DropdownMenuTrigger className='size-6'>
                        <IconDotsVertical />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent aria-label='Actions' placement='left top'>
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant='destructive'>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export const products = [
  {
    id: '1',
    name: 'iPhone 13',
    category: 'Electronics',
    price: 799,
    brand: 'Apple',
    stock: 150
  },
  {
    id: '2',
    name: 'Galaxy S21',
    category: 'Electronics',
    price: 699,
    brand: 'Samsung',
    stock: 200
  },
  {
    id: '3',
    name: 'MacBook Pro',
    category: 'Computers',
    price: 1299,
    brand: 'Apple',
    stock: 80
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    category: 'Computers',
    price: 999,
    brand: 'Dell',
    stock: 50
  },
  {
    id: '5',
    name: 'Sony WH-1000XM4',
    category: 'Headphones',
    price: 349,
    brand: 'Sony',
    stock: 120
  },
  {
    id: '6',
    name: 'AirPods Pro',
    category: 'Headphones',
    price: 249,
    brand: 'Apple',
    stock: 180
  },
  {
    id: '7',
    name: 'Fitbit Charge 5',
    category: 'Wearables',
    price: 179,
    brand: 'Fitbit',
    stock: 75
  }
]
