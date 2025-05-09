'use client'

import { useState } from 'react'

import { IconPalette } from 'hq-icons'
import { Button, Collection, type Color } from 'react-aria-components'

import { formatColor } from '@/components/controllers/colors/colors'
import SelectFormat, { type ColorFormat } from '@/components/controllers/colors/select-format'
import { tailwindColors } from '@/components/controllers/colors/tailwind-colors'
import { Container, Popover, defaultColor, toast } from '@/components/ui'
import { copyToClipboard } from '@/lib/utils/modifiers'

type TailwindColor = keyof typeof tailwindColors

export default function ColorCustomizer() {
    const [selectedFormat, setSelectedFormat] = useState<ColorFormat>('oklch')
    const [customColor, setCustomColor] = useState<Color>(defaultColor)
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const handleCopy = async (selectedColor: string) => {
        const toCopy = formatColor(selectedColor, selectedFormat)

        await copyToClipboard(toCopy).then(() => setIsCopied(true))
        setTimeout(() => setIsCopied(false), 2500)
        toast(`Copied: ${toCopy}`, {}, { timeout: 2500 })
    }

    return (
        <>
            <div className='sticky top-14 z-10 w-full rounded-b-lg bg-bg/60 py-2 backdrop-blur-lg md:py-4 lg:top-14'>
                <Container className='flex flex-row items-center justify-between gap-3'>
                    <Popover>
                        <Button>
                            <IconPalette />
                        </Button>
                        <Popover.Content placement='right' className='p-4'>
                            In Progress
                        </Popover.Content>
                    </Popover>
                    <SelectFormat selectedFormat={selectedFormat} action={setSelectedFormat} />
                </Container>
            </div>
            <Container>
                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='sticky top-28 z-10 bg-bg/60 backdrop-blur-lg sm:top-32'>
                            <th className='size-10' colSpan={2} />
                            <Collection
                                items={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map(
                                    (shade) => ({ id: shade, shade })
                                )}
                            >
                                {(item) => (
                                    <th className='-rotate-90 w-[3ch] text-xs sm:rotate-0 sm:text-sm'>{item.shade}</th>
                                )}
                            </Collection>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(tailwindColors).map((color, i) => (
                            <tr key={i} className='h-8'>
                                <td
                                    className='text-xs sm:text-sm'
                                    colSpan={2}
                                    style={{ color: Object.values(tailwindColors[color as TailwindColor]).at(5) }}
                                >
                                    {color}
                                </td>
                                <Collection
                                    items={Object.values(tailwindColors[color as TailwindColor]).map((item, i) => ({
                                        id: i,
                                        color: item
                                    }))}
                                >
                                    {(item) => (
                                        <td
                                            className='h-7 w-auto p-0.5'
                                            key={item.color}
                                            onMouseUp={() => !isCopied && handleCopy(item.color)}
                                        >
                                            <div
                                                className='size-full cursor-pointer rounded-lg ring ring-border transition-transform hover:scale-110'
                                                style={{ backgroundColor: item.color }}
                                            />
                                        </td>
                                    )}
                                </Collection>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    )
}
