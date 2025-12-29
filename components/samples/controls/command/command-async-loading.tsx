'use client'

import { useAsyncList } from 'react-stately'
import { Command, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

export default function CommandSeparatorDemo() {
  const list = useAsyncList<{ title: string }>({
    async load({ signal, filterText }) {
      const res = await fetch(`https://dummyjson.com/posts/search?q=${filterText}`, {
        signal
      }).then((r) => r.json())
      return {
        items: res.posts
      }
    }
  })
  return (
    <Command inputValue={list.filterText} isPending={list.isLoading} onInputChange={list.setFilterText}>
      <CommandInput />
      <CommandList items={list.items}>
        {(item) => (
          <CommandItem id={item.title} key={item.title} textValue={item.title}>
            {item.title}
          </CommandItem>
        )}
      </CommandList>
    </Command>
  )
}
