import type { TextProps } from 'react-aria-components'

import { Note as NoteComponent, type NoteProps } from '@/components/ui'

interface DocsNoteProps extends NoteProps {
    children: TextProps['children']
}

export default function Note({ variant = 'primary', children }: DocsNoteProps) {
    return (
        <div className='not-prose'>
            <NoteComponent variant={variant}>{children}</NoteComponent>
        </div>
    )
}
