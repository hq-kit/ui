import Image from 'next/image'
import { Collection } from 'react-aria-components'

import { Card } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Media() {
    const items = Array.from({ length: 17 }, (_, id) => ({
        id: id + 1,
        title: 'Image ' + id
    }))
    return (
        <div className='grid grid-cols-2 2xl:grid-cols-4 gap-2'>
            <Collection items={items}>
                {(item) => (
                    <div key={item.id} className={cn(item.id % 5 === 0 && 'col-span-2')}>
                        <Card>
                            <Image
                                width={item.id % 5 === 0 ? 800 : 400}
                                height={300}
                                src={`https://picsum.photos/${item.id % 5 === 0 ? 800 : 400}/300?random=${item.id}`}
                                alt={item.title}
                            />
                        </Card>
                    </div>
                )}
            </Collection>
        </div>
    )
}
