import Image from 'next/image'

import { Spoiler } from '@/components/ui'

export default function SpoilerDemo() {
    return (
        <Spoiler>
            <Image
                className='rounded-lg'
                src='https://picsum.photos/1920/1080'
                alt='Image'
                width={1920}
                height={1080}
            />
        </Spoiler>
    )
}
