'use client'

import { Card, Link } from '@/components/ui'
import Image from 'next/image'

export default function BlockCard({ title, description, href }: any) {
    return (
        <Link href={href}>
            <Card className='cursor-pointer p-2 transition-[border,box-shadow] hover:border-primary hover:ring-4 hover:ring-ring'>
                <div className='h-40 overflow-hidden rounded-md'>
                    <Image src='https://picsum.photos/400/300' alt='image' width={400} height={300} />
                </div>
                <Card.Header className='mt-2 gap-0.5 p-0'>
                    <Card.Title className='text-base uppercase'>{title}</Card.Title>
                    <Card.Description className='font-mono text-sm'>{description}</Card.Description>
                </Card.Header>
            </Card>
        </Link>
    )
}
