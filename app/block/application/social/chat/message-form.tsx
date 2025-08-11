'use client'

import { IconCamera, IconMicrophone, IconPaperclip, IconSend } from '@tabler/icons-react'
import { type FormEvent, type KeyboardEvent, useEffect, useRef } from 'react'
import { Button, Form, Textarea } from '@/components/ui'

interface MessageFormProps {
    value: string
    valueAction: (value: string) => void
    sendAction: (e: FormEvent<HTMLFormElement>) => void
}

export default function MessageForm({ value, valueAction, sendAction }: MessageFormProps) {
    const editorRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const editor = editorRef.current

        const handleInput = () => {
            if (editor) {
                const text = editor.innerText
                valueAction(text)
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
    }, [valueAction])

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        sendAction(e)
        if (editorRef.current) {
            editorRef.current.innerHTML = ''
        }
    }

    return (
        <Form className='relative overflow-hidden rounded-lg border-t bg-background md:border' onSubmit={onSubmit}>
            <Textarea
                aria-label='Message'
                className='no-scrollbar min-h-32 w-full resize-none border-0 p-3 outline-none'
                id='message'
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.key === 'Enter' && !e.shiftKey && value.trim() !== '') {
                        onSubmit(e as unknown as FormEvent<HTMLFormElement>)
                    }
                }}
                ref={editorRef}
            />
            <div className='flex items-center p-2'>
                <Button icon type='button' variant='ghost'>
                    <IconCamera className='size-4' />
                    <span className='sr-only'>Upload Image</span>
                </Button>
                <Button icon type='button' variant='ghost'>
                    <IconMicrophone className='size-4' />
                    <span className='sr-only'>Use Microphone</span>
                </Button>
                <Button icon type='button' variant='ghost'>
                    <IconPaperclip className='size-4' />
                    <span className='sr-only'>Attach File</span>
                </Button>
                <Button className='ml-auto gap-1.5' isDisabled={value.trim() === ''} size='sm' type='submit'>
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
