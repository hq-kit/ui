'use client'

import NavbarLayout from 'layouts/app-navbar'

import { Container, Heading, Navbar } from '@/components/ui'

export default function NavbarInsetDemo() {
    return (
        <>
            <NavbarLayout variant='inset'>
                <Navbar.Inset>
                    <Container className='@xl:py-12 py-6'>
                        <Heading>Inset</Heading>
                    </Container>
                </Navbar.Inset>
            </NavbarLayout>
        </>
    )
}
