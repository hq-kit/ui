import {
    TypographyA,
    TypographyCode,
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyOl,
    TypographyP,
    TypographyPre,
    TypographyTable,
    TypographyTd,
    TypographyTh,
    TypographyTr,
    TypographyUl
} from '@/components/mdx/typography'

import { Note } from '@/components/ui'
import { IconCircleAlert } from 'hq-icons'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import * as runtime from 'react/jsx-runtime'
import { Block } from './block'
import { CLI } from './cli'
import { Code } from './code'
import { Demo } from './demo'
import { Install } from './install'

const components = {
    h1: TypographyH1,
    h2: TypographyH2,
    h3: TypographyH3,
    h4: TypographyH4,
    a: TypographyA,
    p: TypographyP,
    ul: TypographyUl,
    ol: TypographyOl,
    table: TypographyTable,
    tr: TypographyTr,
    td: TypographyTd,
    th: TypographyTh,
    code: TypographyCode,
    pre: TypographyPre,
    Code,
    CLI,
    Install,
    Demo,
    Block,
    Image,
    Note: ({ children, ...props }: ComponentProps<typeof Note>) => (
        <Note {...props} variant='destructive' className='my-4'>
            <IconCircleAlert className='my-0.5' />
            <Note.Description className='cols-start-2'>{children}</Note.Description>
        </Note>
    )
}

const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

export function MDXContent({ code }: { code: string }) {
    const Component = useMDXComponent(code)
    return <Component components={{ ...components }} />
}
