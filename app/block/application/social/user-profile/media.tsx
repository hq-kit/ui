import Image from 'next/image'
import { Collection } from 'react-aria-components'
import { Card } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Media() {
    const items = Array.from({ length: 17 }, (_, id) => ({
        id: id + 1,
        title: `Image ${id}`
    }))
    return (
        <div className='grid grid-cols-2 gap-2 2xl:grid-cols-4'>
            <Collection items={items}>
                {(item) => (
                    <div className={cn(item.id % 5 === 0 && 'col-span-2')} key={item.id}>
                        <Card>
                            <Image
                                alt={item.title}
                                height={300}
                                src={`https://picsum.photos/${item.id % 5 === 0 ? 800 : 400}/300?random=${item.id}`}
                                width={item.id % 5 === 0 ? 800 : 400}
                            />
                        </Card>
                    </div>
                )}
            </Collection>
        </div>
    )
}
