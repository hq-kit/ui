'use client'

import React from 'react'

import { Description, FileTrigger } from '@/components/ui'

export default function FileTriggerDemo() {
    const [file, setFile] = React.useState<string[] | null>(null)
    return (
        <>
            <FileTrigger
                onSelect={(e) => {
                    const files = Array.from(e ?? [])
                    const filenames = files.map((file) => file.name)
                    setFile(filenames)
                }}
            />
            {file && (
                <Description className='[&>strong]:text-fg mt-2 block max-w-60 truncate [&>strong]:font-medium'>
                    Your file: <strong>{file}</strong>
                </Description>
            )}
        </>
    )
}
