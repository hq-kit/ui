import { cn } from '@/lib/utils'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import * as runtime from 'react/jsx-runtime'

import { Note } from '@/components/ui'
import { IconCircleAlert } from 'hq-icons'
import { Block } from './block'
import { CLI } from './cli'
import { Code } from './code'
import { Demo } from './demo'
import { Install } from './install'

const components = {
    a: ({ className, ...props }: ComponentProps<'a'>) => (
        <a className={cn('font-medium underline underline-offset-4', className)} {...props} />
    ),
    p: ({ className, ...props }: ComponentProps<'p'>) => <p className={cn('leading-7', className)} {...props} />,
    ul: ({ className, ...props }: ComponentProps<'ul'>) => (
        <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    li: ({ className, ...props }: ComponentProps<'li'>) => <li className={cn('mt-2', className)} {...props} />,
    table: ({ className, ...props }: ComponentProps<'table'>) => (
        <div className='my-6 w-full overflow-y-auto'>
            <table className={cn('w-full', className)} {...props} />
        </div>
    ),
    td: ({ className, ...props }: ComponentProps<'td'>) => (
        <td
            className={cn(
                'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    Code,
    CLI,
    Install,
    Demo,
    Block,
    Image,
    Note: ({ children, ...props }: ComponentProps<typeof Note>) => (
        <Note {...props} className='not-prose **:not-prose' variant='danger'>
            <IconCircleAlert className='my-0.5' />
            <Note.Title className='cols-start-2'>{children}</Note.Title>
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
