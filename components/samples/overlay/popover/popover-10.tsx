'use client'

import { IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { SearchField, SearchInput } from '@/components/ui/search-field'

const users = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Howard Lloyd',
    fallback: 'HL',
    notifications: 3
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Olivia Sparks',
    fallback: 'OS'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Hallie Richards',
    fallback: 'HR',
    notifications: 1
  }
]

const useDebounce = (value: string, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

const PopoverSearchDemo = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const debouncedSearch = useDebounce(inputValue)
  const [filteredUsers, setFilteredUsers] = useState(users)

  // Handle loading state when input changes
  useEffect(() => {
    if (inputValue) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [inputValue])

  // Apply filtering after debounce and update loading state
  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      setFilteredUsers(users)
      setIsLoading(false)
    } else {
      const searchTerm = debouncedSearch.toLowerCase()

      const filtered = users.filter((user) => user.name.toLowerCase().includes(searchTerm))

      setFilteredUsers(filtered)
      setIsLoading(false)
    }
  }, [debouncedSearch])

  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconSearch />
        <span className='sr-only'>Search users</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <SearchField isPending={isLoading}>
            <SearchInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          </SearchField>
          <ul className='space-y-2'>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li className='flex items-center gap-2' key={index}>
                  <Avatar alt={user.name} className='size-6' fallback={user.fallback} src={user.image} />
                  <div className='flex-1 font-medium text-sm'>{user.name}</div>
                  {user.notifications && (
                    <span className='text-muted-foreground text-xs'>{`${user.notifications} Notification${user.notifications > 1 ? 's' : ''}`}</span>
                  )}
                </li>
              ))
            ) : (
              <li className='py-2 text-center text-sm'>No users found</li>
            )}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverSearchDemo
