'use client'

import { Container, Heading } from '@/components/ui'
import NavbarLayout from 'layouts/app-navbar'

export default function NavbarBasicDemo() {
    return (
        <>
            <NavbarLayout />
            <Container className='@xl:py-12 py-6'>
                <Heading>Basic</Heading>
            </Container>
        </>
    )
}
