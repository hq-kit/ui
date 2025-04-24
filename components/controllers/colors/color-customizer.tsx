'use client'

import { IconPalette } from 'hq-icons'
import { useState } from 'react'
import { Button, Collection, type Color } from 'react-aria-components'
import { copyToClipboard } from 'usemods'

import { formatColor, generateColorScale, getColorName, textfg } from '@/components/controllers/colors/colors'
import SelectFormat, { type ColorFormat } from '@/components/controllers/colors/select-format'
import _tailwindcolors from '@/components/controllers/colors/tailwind-colors.json'
import { Badge, ColorPicker, Container, Popover, defaultColor, toast } from '@/components/ui'

export default function ColorCustomizer() {
    const [selectedFormat, setSelectedFormat] = useState<ColorFormat>('oklch')
    const [customColor, setCustomColor] = useState<Color>(defaultColor)

    const tailwindColors = _tailwindcolors.map((item) => ({
        name: item.name,
        children: generateColorScale(item.color)
    }))

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
            <Container className='divide-y'>
                <div className='sticky top-28 z-10 grid h-12 grid-cols-11 gap-1.5 border-b-0 bg-bg/60 py-4 backdrop-blur-lg'>
                    <Collection
                        items={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map(
                            (shade) => ({ id: shade, shade })
                        )}
                    >
                        {(item) => (
                            <Badge className='-rotate-90 justify-center text-[10px] sm:rotate-0' variant='outline'>
                                {item.shade}
                            </Badge>
                        )}
                    </Collection>
                </div>
                <div className='grid grid-cols-[auto_minmax(0_1fr)] border-x border-t p-2'>
                    <div className='mb-2 flex items-center'>
                        <ColorPicker
                            defaultValue='#0d6efd'
                            label={getColorName(customColor.toString('hex'))}
                            value={customColor}
                            onChange={setCustomColor}
                        />
                    </div>
                    <div className='grid grid-cols-11 gap-1.5'>
                        <Collection
                            items={generateColorScale(customColor.toString('hex')).map((color) => ({
                                id: color.shade,
                                color: color.color
                            }))}
                        >
                            {(item) => (
                                <div
                                    style={{ backgroundColor: item.color, color: textfg(item.color) }}
                                    className='h-8 cursor-pointer rounded border'
                                    onMouseUp={() => !isCopied && handleCopy(item.color)}
                                />
                            )}
                        </Collection>
                    </div>
                </div>
                {tailwindColors.map((color, i) => (
                    <div key={i} className='grid grid-cols-[auto_minmax(0_1fr] border-x p-2 last:border-b'>
                        <p className='mb-2 font-semibold text-muted-fg text-xs sm:text-sm'>{color.name}</p>
                        <div className='grid grid-cols-11 gap-1.5'>
                            <Collection items={color.children}>
                                {(item) => (
                                    <div
                                        id={item.shade + color.name}
                                        key={item.shade}
                                        style={{ backgroundColor: item.color, color: textfg(item.color) }}
                                        className='h-8 cursor-pointer rounded border'
                                        onMouseUp={() => !isCopied && handleCopy(item.color)}
                                    />
                                )}
                            </Collection>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    )
}
