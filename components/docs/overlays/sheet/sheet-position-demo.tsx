'use client'

import React from 'react'

import { titleCase } from 'usemods'

import { Button, Sheet } from '@/components/ui'

type Side = 'left' | 'right' | 'top' | 'bottom'
export default function SheetPositionDemo() {
    const [sheetSide, setSheetSide] = React.useState<Side>('left')
    const [isOpen, setIsOpen] = React.useState(false)

    const sides: Side[] = ['left', 'right', 'top', 'bottom']

    const pressHandler = (side: Side, open: boolean) => {
        setSheetSide(side)
        setIsOpen(open)
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-2'>
                {sides.map((side, idx) => (
                    <Button variant='outline' onPress={() => pressHandler(side, true)} key={idx}>
                        {titleCase(side)}
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
