'use client'

import React from 'react'

import { IconCheck, IconCopy } from 'hq-icons'
import { ColorFormat, ListBoxItem, parseColor, type ListBoxItemProps } from 'react-aria-components'
import { toast } from 'sonner'
import { copyToClipboard } from 'usemods'

import { formatColorForTailwind, textfg } from '@/components/controllers/colors/colors'
import { cn, isBrightColor } from '@/components/ui'

interface ColorItemProps extends ListBoxItemProps {
    item: {
        shade: string
        color: string
    }
    textColor?: string
    name: string
    selectedFormat: ColorFormat
    tailwindVariable: boolean
}

const ColorItem = ({ item, textColor, name, selectedFormat, tailwindVariable }: ColorItemProps) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async (selectedColor: string) => {
        const toCopy = tailwindVariable ? formatColorForTailwind(selectedColor) : selectedColor

        await copyToClipboard(toCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        toast(`Copy ${toCopy} to clipboard.`, {
            classNames: {
                toast: '[&:has([data-icon])_[data-content]]:!ml-0',
                icon: 'hidden'
            }
        })
    }
    return (
        <ListBoxItem
            textValue={name}
            className={cn(
                'group relative h-14 w-full cursor-pointer rounded-lg focus:outline-none',
                isBrightColor(item.color)
                    ? 'ring-1 ring-black/10 ring-inset'
                    : 'dark:ring-1 dark:ring-white/10 dark:ring-inset'
            )}
            onAction={() =>
                handleCopy(
                    parseColor(item.color as string)?.toString(selectedFormat as ColorFormat)
                )
            }
            style={{
                color: textColor ?? textfg(item.color),
                backgroundColor: item.color
            }}
        >
            <span
                className={cn(
                    'absolute top-2 left-1/2 hidden -translate-x-1/2 group-hover:block',
                    copied && 'block'
                )}
            >
                {copied ? <IconCheck /> : <IconCopy />}
            </span>
            <span className='absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col justify-center font-mono text-xs'>
                {item.shade}
            </span>
        </ListBoxItem>
    )
}

export { ColorItem }
