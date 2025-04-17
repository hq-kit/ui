'use client'

import NavbarLayout from 'layouts/app-navbar'

import { Container, Heading } from '@/components/ui'

export default function NavbarFloatingDemo() {
    return (
        <>
            <NavbarLayout variant='float' />
            <Container className='@xl:py-12 py-6'>
                <Heading>Float</Heading>
            </Container>
        </>
    )
}
