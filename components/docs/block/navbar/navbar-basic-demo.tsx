'use client'

import NavbarLayout from 'layouts/app-navbar'

import { Container, Heading } from '@/components/ui'

export default function NavbarBasicDemo() {
    return (
        <>
            <NavbarLayout />
            <Container className='py-6 @xl:py-12'>
                <Heading>Basic</Heading>
            </Container>
        </>
    )
}
