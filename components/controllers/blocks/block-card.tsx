'use client'

import Image from 'next/image'
import { Link } from 'react-aria-components'
import { Card } from '@/components/ui/card'

export default function BlockCard({ title, description, href }: any) {
  return (
    <Link href={href}>
      <Card className='cursor-pointer p-2 transition-[border,box-shadow] hover:border-primary hover:ring-4 hover:ring-ring'>
        <div className='h-40 overflow-hidden rounded-md'>
          <Image alt='image' height={300} src='https://picsum.photos/400/300' width={400} />
        </div>
        <Card.Header className='mt-2 gap-0.5 p-0'>
          <Card.Title className='text-base uppercase'>{title}</Card.Title>
          <Card.Description className='font-mono text-sm'>{description}</Card.Description>
        </Card.Header>
      </Card>
    </Link>
  )
}
