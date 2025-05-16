import {
    Geist,
    Inter,
    Montserrat,
    Outfit,
    Plus_Jakarta_Sans,
    Poppins,
    Raleway,
    Roboto,
    Source_Sans_3,
    Ubuntu_Sans
} from 'next/font/google'

import { cn } from '@/lib/utils'

const geist = Geist({
    subsets: ['latin'],
    variable: '--font-geist'
})

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta'
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit'
})

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway'
})

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto'
})

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
})

const ubuntuSans = Ubuntu_Sans({
    subsets: ['latin'],
    variable: '--font-ubuntu-sans'
})

const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    variable: '--font-source-sans'
})

export const fontSans = cn(
    geist.variable,
    jakarta.variable,
    inter.variable,
    outfit.variable,
    raleway.variable,
    roboto.variable,
    poppins.variable,
    ubuntuSans.variable,
    montserrat.variable,
    sourceSans.variable
)

export const fontSansFamilies = [
    {
        label: 'Geist',
        value: '--font-geist',
        link: 'https://vercel.com/font'
    },
    {
        label: 'Jakarta',
        value: '--font-jakarta',
        link: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans'
    },
    {
        label: 'Inter',
        value: '--font-inter',
        link: 'https://fonts.google.com/specimen/Inter'
    },
    {
        label: 'Outfit',
        value: '--font-outfit',
        link: 'https://fonts.google.com/specimen/Outfit'
    },
    {
        label: 'Raleway',
        value: '--font-raleway',
        link: 'https://fonts.google.com/specimen/Raleway'
    },
    {
        label: 'Roboto',
        value: '--font-roboto',
        link: 'https://fonts.google.com/specimen/Roboto'
    },
    {
        label: 'Poppins',
        value: '--font-poppins',
        link: 'https://fonts.google.com/specimen/Poppins'
    },
    {
        label: 'Montserrat',
        value: '--font-montserrat',
        link: 'https://fonts.google.com/specimen/Montserrat'
    },
    {
        label: 'Ubuntu',
        value: '--font-ubuntu-sans',
        link: 'https://fonts.google.com/specimen/Ubuntu+Sans'
    },
    {
        label: 'Source Sans',
        value: '--font-source-sans',
        link: 'https://fonts.google.com/specimen/Source+Sans+3'
    }
]
