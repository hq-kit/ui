'use client'

import React from 'react'

import { IconCheck, IconCopy } from 'cleon-icons'
import { ListBoxItem, parseColor, type ListBoxItemProps } from 'react-aria-components'
import { ColorFormat } from 'react-aria-components'
import { toast } from 'sonner'
import { copyToClipboard } from 'usemods'

import { isBrightColor } from '@/components/ui'
import { cn } from '@/lib/utils'

import { formatColorForTailwind, textForeground } from './colors'

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
                'w-full h-14 group focus:outline-none cursor-pointer rounded-lg relative',
                isBrightColor(item.color)
                    ? 'ring-1 ring-inset ring-black/10'
                    : 'dark:ring-1 dark:ring-inset dark:ring-white/10'
            )}
            onAction={() =>
                handleCopy(
                    parseColor(item.color as string)?.toString(selectedFormat as ColorFormat)
                )
            }
            style={{
                color: textColor ?? textForeground(item.color),
                backgroundColor: item.color
            }}
        >
            <span
                className={cn(
                    'group-hover:block hidden left-1/2 -translate-x-1/2 top-2 absolute',
                    copied && 'block'
                )}
            >
                {copied ? <IconCheck /> : <IconCopy />}
            </span>
            <span className='text-xs left-1/2 -translate-x-1/2 bottom-2 absolute font-mono flex flex-col justify-center'>
                {item.shade}
            </span>
        </ListBoxItem>
    )
}

export { ColorItem }
