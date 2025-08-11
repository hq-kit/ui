'use client'

import { useAsyncList } from 'react-stately'
import { Command } from '@/components/ui'

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
        <Command
            inputValue={list.filterText}
            isPending={list.isLoading}
            items={list.items}
            onInputChange={list.setFilterText}
        >
            {(item) => (
                <Command.Item id={item.title} key={item.title} textValue={item.title}>
                    <Command.Label>{item.title}</Command.Label>
                </Command.Item>
            )}
        </Command>
    )
}
