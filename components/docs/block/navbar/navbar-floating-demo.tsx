'use client'

import NavbarLayout from 'layouts/app-navbar'

import { Container, Heading } from '@/components/ui'

export default function NavbarFloatingDemo() {
    return (
        <>
            <NavbarLayout variant='float' />
            <Container className='py-6 @xl:py-12'>
                <Heading>Float</Heading>
            </Container>
        </>
    )
}
