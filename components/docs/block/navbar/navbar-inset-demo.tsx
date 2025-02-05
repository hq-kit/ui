'use client'

import NavbarLayout from 'layouts/app-navbar'

import { Container, Heading, Navbar } from '@/components/ui'

export default function NavbarInsetDemo() {
    return (
        <>
            <NavbarLayout variant='inset'>
                <Navbar.Inset>
                    <Container className='py-6 @xl:py-12'>
                        <Heading>Inset</Heading>
                    </Container>
                </Navbar.Inset>
            </NavbarLayout>
        </>
    )
}
