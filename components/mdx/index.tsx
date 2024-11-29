import Image from 'next/image'

import Block from '@/components/mdx/block'
import CLI from '@/components/mdx/cli'
import Code from '@/components/mdx/code'
import Demo from '@/components/mdx/demo'
import Install from '@/components/mdx/install'
import Note from '@/components/mdx/note'
import { Link, type LinkProps } from '@/components/ui'
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
