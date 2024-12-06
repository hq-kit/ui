import Image from 'next/image'

import { Card, Grid } from '@/components/ui'

export default function Media() {
    const items = Array.from({ length: 17 }, (_, id) => ({
        id: id + 1,
        title: 'Image ' + id
    }))
    return (
        <Grid columns={{ initial: 2, '2xl': 4 }} gap={2} items={items}>
            {(item) => (
                <Grid.Item key={item.id} colSpan={item.id % 5 === 0 ? 2 : 1}>
                    <Card>
                        <Image
                            width={item.id % 5 === 0 ? 800 : 400}
                            height={300}
                            src={`https://picsum.photos/${item.id % 5 === 0 ? 800 : 400}/300?random=${item.id}`}
                            alt={item.title}
                        />
                    </Card>
                </Grid.Item>
            )}
        </Grid>
    )
}
