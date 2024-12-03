'use client'

import React from 'react'

import { IconCamera, IconMic, IconPaperclip, IconSend } from 'hq-icons'

import { Button, Form } from '@/components/ui'

interface MessageFormProps {
    value: string
    onChange: (value: string) => void
    onSend: (e: React.FormEvent<HTMLFormElement>) => void
}
export default function MessageForm({ value, onChange, onSend }: MessageFormProps) {
    const editorRef = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const editor = editorRef.current

        const handleInput = () => {
            if (editor) {
                const text = editor.innerText
                onChange(text)
                editor.innerHTML = formatText(text)
                placeCaretAtEnd(editor)
            }
        }

        const placeCaretAtEnd = (el: HTMLElement) => {
            el.focus()
            const range = document.createRange()
            range.selectNodeContents(el)
            range.collapse(false)
            const sel = window.getSelection()
            sel?.removeAllRanges()
            sel?.addRange(range)
        }

        editor?.addEventListener('input', handleInput)

        return () => {
            editor?.removeEventListener('input', handleInput)
        }
    }, [onChange])

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSend(e)
        if (editorRef.current) {
            editorRef.current.innerHTML = ''
        }
    }
    return (
        <Form
            onSubmit={onSubmit}
            className='relative overflow-hidden rounded-lg border-t md:border bg-background'
        >
            <div
                contentEditable
                ref={editorRef}
                onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter' && !e.shiftKey && value.trim() !== '') {
                        onSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
                    }
                }}
                aria-label='Message'
                id='message'
                className='min-h-32 w-full no-scrollbar resize-none border-0 outline-none p-3'
            />
            <div className='flex items-center p-2'>
                <Button variant='ghost' size='icon' type='button'>
                    <IconCamera className='size-4' />
                    <span className='sr-only'>Upload Image</span>
                </Button>
                <Button variant='ghost' size='icon' type='button'>
                    <IconMic className='size-4' />
                    <span className='sr-only'>Use Microphone</span>
                </Button>
                <Button variant='ghost' size='icon' type='button'>
                    <IconPaperclip className='size-4' />
                    <span className='sr-only'>Attach File</span>
                </Button>
                <Button
                    isDisabled={value.trim() === ''}
                    type='submit'
                    size='sm'
                    className='ml-auto gap-1.5'
                >
                    Send Message
                    <IconSend />
                </Button>
            </div>
        </Form>
    )
}

const formatText = (text: string) => {
    return text
        .replace(/_(.*?)_/g, '<em>_$1_</em>')
        .replace(/_/g, '<span class="text-muted-foreground">_</span>')
        .replace(/\*(.*?)\*/g, '<strong>*$1*</strong>')
        .replace(/\*/g, '<span class="text-muted-foreground">*</span>')
        .replace(/~(.*?)~/g, '<del>~$1~</del>')
        .replace(/~/g, '<span class="text-muted-foreground">~</span>')
        .replace(/\^(.*?)\^/g, '<sup>^$1^</sup>')
        .replace(/\^/g, '<span class="text-muted-foreground">^</span>')
        .replace(
            /(https?:\/\/[^\s]+)/g,
            '<a href="$1" class="text-primary underline" target="_blank" rel="noopener noreferrer">$1</a>'
        )
        .replace(/\n/g, '<br />')
}
