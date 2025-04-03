'use client'

import React from 'react'

import { titleCase } from 'usemods'

import { Button, Sheet } from '@/components/ui'

type Side = 'left' | 'right' | 'top' | 'bottom'
export default function SheetPositionDemo() {
    const [sheetSide, setSheetSide] = React.useState<Side>('left')
    const [isOpen, setIsOpen] = React.useState(false)

    const sides: Side[] = ['top', 'left', 'right', 'bottom']

    const openSheet = (side: Side, open: boolean) => {
        setSheetSide(side)
        setIsOpen(open)
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-2'>
                {sides.map((side, i) => (
                    <Button
                        variant='outline'
                        onPress={() => openSheet(side, true)}
                        key={i}
                        className='first:col-span-full last:col-span-full'
                    >
                        {side}
                    </Button>
                ))}
            </div>
            <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen} side={sheetSide}>
                <Sheet.Header>
                    <Sheet.Title>{titleCase(sheetSide)}</Sheet.Title>
                    <Sheet.Description>The sheet will go from {sheetSide} side.</Sheet.Description>
                </Sheet.Header>
            </Sheet.Content>
        </>
    )
}
