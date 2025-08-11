'use client'

import { useState } from 'react'
import { FileTrigger } from '@/components/ui'

export default function FileTriggerDemo() {
    const [file, setFile] = useState<string[] | null>(null)
    return (
        <div className='flex flex-col space-y-6'>
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
            {file && <code>{JSON.stringify({ file }, null, 2)}</code>}
        </div>
    )
}
