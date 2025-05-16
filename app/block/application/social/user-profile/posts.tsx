import Image from 'next/image'
import { Collection } from 'react-aria-components'

import { Card } from '@/components/ui'

export default function Posts() {
    return (
        <div className='grid grid-cols-1 gap-2 2xl:grid-cols-3'>
            <Collection items={posts}>
                {(item) => (
                    <div key={item.id}>
                        <Card>
                            <Card.Header>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Description>{item.date}</Card.Description>
                            </Card.Header>
                            <Card.Content className='space-y-2 text-justify'>
                                <Image alt={item.title} src={item.image} width={400} height={300} />
                                <p>{item.content}</p>
                            </Card.Content>
                        </Card>
                    </div>
                )}
            </Collection>
        </div>
    )
}

const posts = [
    {
        id: 1,
        title: 'First Post',
        date: '2021-01-01 - 12:00',
        image: 'https://picsum.photos/400/300?random=1',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore nulla libero laborum officia aliquam voluptas quod porro quis accusamus.'
    },
    {
        id: 2,
        title: 'Second Post',
        date: '2021-01-02 - 08:00',
        image: 'https://picsum.photos/400/300?random=2',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam ad nostrum earum provident natus tempora! Accusamus iure sunt quam!'
    },
    {
        id: 3,
        title: 'Third Post',
        date: '2021-01-03 - 14:00',
        image: 'https://picsum.photos/400/300?random=3',
        content:
            'Lorem ipsum dolor sit amet. Veritatis dicta aliquid, voluptatibus sapiente repellendus fugit saepe voluptate eum praesentium facilis?'
    }
]
