import { cn } from '@/lib/utils'
import Image from 'next/image'
import type React from 'react'
import * as runtime from 'react/jsx-runtime'

import { Note } from '@/components/ui'

import { Block } from './block'
import { CLI } from './cli'
import { Code } from './code'
import { Demo } from './demo'
import { Install } from './install'

const components = {
    a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className={cn('font-medium underline underline-offset-4', className)} {...props} />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li className={cn('mt-2', className)} {...props} />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className='my-6 w-full overflow-y-auto'>
            <table className={cn('w-full', className)} {...props} />
        </div>
    ),
    td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
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
    Note
}

const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

export function MDXContent({ code }: { code: string }) {
    const Component = useMDXComponent(code)
    return <Component components={{ ...components }} />
}
