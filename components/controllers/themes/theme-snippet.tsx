'use client'

import React from 'react'

import { IconClipboard } from 'hq-icons'
import { toast } from 'sonner'
import { copyToClipboard } from 'usemods'

import { CodeHighlighter } from '@/components/mdx/code'
import { CopyButton } from '@/components/mdx/copy-button'
import { buttonStyles, Modal } from '@/components/ui'
import { wait } from '@/lib/utils'

export default function ThemeSnippet({ code = 'TEST' }: { code: string }) {
    const [isCopied, setIsCopied] = React.useState(false)

    function handleCopy() {
        copyToClipboard(code).then(() => {
            toast.success('Copied to clipboard', {
                classNames: {
                    toast: '[&:has([data-icon])_[data-content]]:!ml-0',
                    icon: 'hidden'
                }
            })
            setIsCopied(true)
            wait(2000).then(() => setIsCopied(false))
        })
    }
    return (
        <Modal>
            <Modal.Trigger className={buttonStyles({ variant: 'outline' })}>
                <IconClipboard /> Copy
            </Modal.Trigger>
            <Modal.Content size='3xl' isBlurred aria-label='Theme Snippet'>
                <Modal.Header>
                    <Modal.Title>Custom Styles</Modal.Title>
                    <Modal.Description>Copy this code to your .css file</Modal.Description>
                </Modal.Header>
                <Modal.Body className='relative'>
                    <div className='absolute top-4 right-9 z-20'>
                        <CopyButton isCopied={isCopied} onPress={() => handleCopy()} />
                    </div>
                    <div className='no-scrollbar [&_pre]:no-scrollbar mb-4 rounded-lg border font-mono [&_pre]:my-0 [&_pre]:mb-4 [&_pre]:max-h-[32rem] [&_pre]:overflow-auto [&_pre]:!border-0'>
                        <CodeHighlighter code={code} lang='css' />
                    </div>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}
