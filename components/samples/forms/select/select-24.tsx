'use client'
import { Label } from 'react-aria-components'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithOverlappingLabelDemo = () => {
  return (
    <Select className='relative w-full dark:bg-background!' placeholder='Select city'>
      <Label className='absolute top-0 left-2 z-10 block -translate-y-1/2 bg-background px-1 font-medium text-foreground text-xs group-has-disabled:opacity-50 dark:bg-background!'>
        Select with overlapping label
      </Label>
      <SelectTrigger className='h-10! items-end'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem id='1'>New York</SelectItem>
        <SelectItem id='2'>London</SelectItem>
        <SelectItem id='3'>Tokyo</SelectItem>
        <SelectItem id='4'>Paris</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectWithOverlappingLabelDemo
