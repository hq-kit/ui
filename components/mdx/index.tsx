import type React from 'react'

import Image from 'next/image'

import Block from '@/components/mdx/block'
import CLI from '@/components/mdx/cli'
import Code from '@/components/mdx/code'
import Demo from '@/components/mdx/demo'
import Install from '@/components/mdx/install'
import { Note } from '@/components/ui'
import { useMDXComponent } from '@/lib/hooks/use-mdx'

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <Component
            components={{
                Image,
                Note: (props: React.ComponentProps<typeof Note>) => (
                    <Note className={`${props.className} not-prose`} {...props} />
                ),
                Install,
                Demo: (props: React.ComponentProps<typeof Demo>) => <Demo className={props.className} {...props} />,
                CLI,
                Code: (props: React.ComponentProps<typeof Code>) => (
                    <Code className={props.className} copyButton {...props} />
                ),
                Block
            }}
        />
    )
}
