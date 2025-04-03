'use client'

import React from 'react'

import { FileTrigger } from '@/components/ui'

export default function FileTriggerDemo() {
    const [file, setFile] = React.useState<string[] | null>(null)
    return (
        <div className='space-y-6 flex flex-col'>
            <FileTrigger
                allowsMultiple
                onSelect={(e) => {
                    const files = Array.from(e ?? [])
                    const filenames = files.map((file) => file.name)
                    setFile(filenames)
                }}
            >
                Upload
            </FileTrigger>
            {file && <code>uploaded: {JSON.stringify(file)}</code>}
        </div>
    )
}
