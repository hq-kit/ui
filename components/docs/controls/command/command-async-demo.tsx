'use client'

import React from 'react'

import { useAsyncList } from 'react-stately'

import { Button, Command } from '@/components/ui'

export default function CommandSeparatorDemo() {
    const [isOpen, setOpen] = React.useState(false)
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
        <>
            <Button variant='outline' onPress={() => setOpen(true)}>
                Open
            </Button>
            <Command
                isOpen={isOpen}
                onOpenChange={setOpen}
                items={list.items}
                onInputChange={list.setFilterText}
                inputValue={list.filterText}
                isPending={list.isLoading}
            >
                {(item) => (
                    <Command.Item key={item.title} id={item.title} textValue={item.title}>
                        <Command.Label>{item.title}</Command.Label>
                    </Command.Item>
                )}
            </Command>
        </>
    )
}
