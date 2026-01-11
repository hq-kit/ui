'use client'

import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Autocomplete } from '@/components/ui/autocomplete'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NumberField, NumberInput } from '@/components/ui/number-field'
import { SearchField, SearchInput } from '@/components/ui/search-field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/ui/table'
import { TextField } from '@/components/ui/text-field'

const data: Payment[] = [
  {
    id: '1',
    name: 'Shang Chain',
    amount: 699,
    status: 'success',
    email: 'shang07@yahoo.com'
  },
  {
    id: '2',
    name: 'Kevin Lincoln',
    amount: 242,
    status: 'success',
    email: 'kevinli09@gmail.com'
  },
  {
    id: '3',
    name: 'Milton Rose',
    amount: 655,
    status: 'processing',
    email: 'rose96@gmail.com'
  },
  {
    id: '4',
    name: 'Silas Ryan',
    amount: 874,
    status: 'success',
    email: 'silas22@gmail.com'
  },
  {
    id: '5',
    name: 'Ben Tenison',
    amount: 541,
    status: 'failed',
    email: 'bent@hotmail.com'
  }
]

export type Payment = {
  id: string
  name: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const DataTableDensityDemo = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  // Function to handle form submission
  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const amount = Number(formData.get('amount'))
    const status = formData.get('status') as 'pending' | 'processing' | 'success' | 'failed'
    if (!name || !email || !amount || !status) {
      toast.error('All field must be filled')
    }

    const newPayment: Payment = {
      id: String(data.length + 1),
      name: name,
      email: email,
      amount: amount,
      status: status
    }

    data.push(newPayment)

    // Clear form
    e.currentTarget.reset()

    setIsDrawerOpen(false)
  }

  return (
    <div className='w-full'>
      <Autocomplete>
        <Card>
          <CardHeader>
            <div className='flex justify-between gap-2 max-sm:flex-col sm:items-center'>
              <SearchField aria-label='Search' className='max-w-sm' id='search'>
                <SearchInput placeholder='Search ...' />
              </SearchField>
              <Drawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button variant='outline'>
                    <IconPlus />
                    Add Users
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Add New User</DrawerTitle>
                    <DrawerDescription>
                      Add a new user to the table. Fill in all the required information.
                    </DrawerDescription>
                  </DrawerHeader>
                  <Form onSubmit={handleAddUser}>
                    <div className='grid flex-1 auto-rows-min gap-6 px-4'>
                      <TextField name='name'>
                        <Label>Name</Label>
                        <Input placeholder='Enter user name' />
                      </TextField>
                      <TextField name='email'>
                        <Label>Email</Label>
                        <Input placeholder='Enter email address' />
                      </TextField>
                      <NumberField name='amount'>
                        <Label>Amount</Label>
                        <NumberInput />
                      </NumberField>
                      <Select defaultValue='pending' name='status' placeholder='Select status'>
                        <Label htmlFor='user-status'>Status</Label>
                        <SelectTrigger className='w-full'>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem id='pending'>Pending</SelectItem>
                          <SelectItem id='processing'>Processing</SelectItem>
                          <SelectItem id='success'>Success</SelectItem>
                          <SelectItem id='failed'>Failed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <DrawerFooter>
                      <Button type='submit'>Add User</Button>
                      <Button slot='close' variant='outline'>
                        Cancel
                      </Button>
                    </DrawerFooter>
                  </Form>
                </DrawerContent>
              </Drawer>
            </div>
          </CardHeader>
          <CardContent>
            <Table bleed selectionMode='multiple'>
              <TableHeader>
                {Object.keys(data[0]).map((key) => (
                  <TableColumn className='uppercase' isRowHeader key={key}>
                    {key}
                  </TableColumn>
                ))}
              </TableHeader>
              <TableBody
                items={data}
                renderEmptyState={() => (
                  <div className='grid h-12 w-full place-content-center text-muted-foreground'>No Results</div>
                )}
              >
                {(item) => (
                  <TableRow id={item.id}>
                    {Object.keys(data[0]).map((key) => (
                      <TableCell key={key}>{item[key as keyof typeof item]}</TableCell>
                    ))}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <p className='mt-4 text-center text-muted-foreground text-sm'>Add new user with Drawer</p>
      </Autocomplete>
    </div>
  )
}

export default DataTableDensityDemo
