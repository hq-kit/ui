'use client'

import Image from 'next/image'

import { ContentReveal } from '@/components/ui'

export default function ShowMoreContentRevealDemo() {
    return (
        <ContentReveal
            initialHeight={0}
            initialOpacity={0}
            showMoreText='Reveal'
            showLessText='Hide'
        >
            <Image
                className='rounded-lg'
                src='https://picsum.photos/1920/1080'
                alt='Image'
                width={1920}
                height={1080}
            />
        </ContentReveal>
    )
}
