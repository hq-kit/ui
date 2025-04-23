'use client'

import { IconBrandTailwind, IconPalette } from 'hq-icons'
import { useState } from 'react'
import { Button, Collection, type Color, type ColorFormat } from 'react-aria-components'
import { copyToClipboard } from 'usemods'

import {
    formatColorForTailwind,
    generateColorScale,
    getColorName,
    textfg
} from '@/components/controllers/colors/colors'
import SelectFormat from '@/components/controllers/colors/select-format'
import _tailwindcolors from '@/components/controllers/colors/tailwind-colors.json'
import { ColorPicker, Container, Popover, Toggle, Tooltip, defaultColor, toast } from '@/components/ui'

export default function ColorCustomizer() {
    const [selectedFormat, setSelectedFormat] = useState<ColorFormat>('hsl')
    const [tailwindVariable, setTailwindVariable] = useState(false)

    const [customColor, setCustomColor] = useState<Color>(defaultColor)

    const tailwindColors = _tailwindcolors.map((item) => ({
        name: item.name,
        children: generateColorScale(item.color)
    }))

    const [isCopied, setIsCopied] = useState<boolean>(false)

    const handleCopy = async (selectedColor: string) => {
        const toCopy = tailwindVariable ? formatColorForTailwind(selectedColor) : selectedColor
        await copyToClipboard(toCopy).then(() => setIsCopied(true))
        setTimeout(() => setIsCopied(false), 1000)
        toast(`Copy ${toCopy} to clipboard.`, {}, { timeout: 1000 })
    }

    return (
        <>
            <div className='sticky top-0 z-10 w-full rounded-b-lg bg-bg/60 py-6 backdrop-blur-xl lg:top-14'>
                <Container className='flex flex-row items-center justify-between gap-3'>
                    <Popover>
                        <Button>
                            <IconPalette />
                        </Button>
                        <Popover.Content placement='right' className='p-4'>
                            In Progress
                        </Popover.Content>
                    </Popover>
                    <div className='flex items-center gap-3'>
                        <Tooltip>
                            <Toggle
                                icon
                                variant='outline'
                                isSelected={tailwindVariable}
                                onChange={() => setTailwindVariable(!tailwindVariable)}
                            >
                                {({ isSelected }) => (
                                    <IconBrandTailwind className={isSelected ? '!text-sky-500' : '!text-fg'} />
                                )}
                            </Toggle>
                            <Tooltip.Content>Enable Tailwind Color Variable</Tooltip.Content>
                        </Tooltip>
                        <SelectFormat selectedFormat={selectedFormat} setSelectedFormat={setSelectedFormat} />
                    </div>
                </Container>
            </div>
            <Container className='divide-y'>
                <div className='mb-2 grid grid-cols-11 gap-1.5 border-b-0'>
                    <Collection
                        items={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map(
                            (shade) => ({ id: shade, shade })
                        )}
                    >
                        {(item) => <div className='text-center font-bold text-sm'>{item.shade}</div>}
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
