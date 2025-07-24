import { Spoiler } from '@/components/ui'
import Image from 'next/image'

export default function SpoilerInitialDemo() {
    return (
        <Spoiler initialHeight={128} initialOpacity={0.5} showMoreText='Reveal' showLessText='Hide'>
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
