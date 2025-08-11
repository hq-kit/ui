import Image from 'next/image'
import { Spoiler } from '@/components/ui'

export default function SpoilerDemo() {
    return (
        <Spoiler>
            <Image
                alt='Image'
                className='rounded-lg'
                height={1080}
                src='https://picsum.photos/1920/1080'
                width={1920}
            />
        </Spoiler>
    )
}
