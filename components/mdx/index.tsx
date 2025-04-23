import Image from 'next/image'
import type { ComponentProps } from 'react'

import Block from '@/components/mdx/block'
import CLI from '@/components/mdx/cli'
import Code from '@/components/mdx/code'
import Demo from '@/components/mdx/demo'
import Install from '@/components/mdx/install'
import { Note } from '@/components/ui'

export const components = {
    Image,
    Note: (props: ComponentProps<typeof Note>) => <Note className={`${props.className} not-prose`} {...props} />,
    Install,
    Demo: (props: ComponentProps<typeof Demo>) => <Demo className={props.className} {...props} />,
    CLI,
    Code: (props: ComponentProps<typeof Code>) => <Code className={props.className} copyButton {...props} />,
    Block
}
