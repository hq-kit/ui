import Image from 'next/image'

import { Link, type LinkProps } from '@/components/ui'
import { useMDXComponent } from '@/lib/hooks/use-mdx'

import Block from './block'
import CLI from './cli'
import Code from './code'
import Demo from './demo'
import Install from './install'
import Note from './note'

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <Component
            components={{
                Image,
                a: (props: LinkProps) => (
                    <Link
                        target='_blank'
                        {...props}
                        className='not-prose font-medium text-primary hover:underline'
                    />
                ),
                Note,
                Install,
                Demo: (props: React.ComponentProps<typeof Demo>) => (
                    <Demo className={props.className} {...props} />
                ),
                CLI,
                Code,
                Block
            }}
        />
    )
}
