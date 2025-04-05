import {
    Geist,
    Inter,
    Outfit,
    Plus_Jakarta_Sans,
    Poppins,
    Raleway,
    Roboto,
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
const ubuntuSans = Ubuntu_Sans({
    subsets: ['latin'],
    variable: '--font-ubuntu-sans'
})

export const fontSans = cn(
    geist.variable,
    jakarta.variable,
    inter.variable,
    outfit.variable,
    raleway.variable,
    roboto.variable,
    poppins.variable,
    ubuntuSans.variable
)

export const fontSansFamilies = [
    {
        label: 'Geist',
        value: '--font-geist-sans',
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
        label: 'Ubuntu',
        value: '--font-ubuntu-sans',
        link: 'https://fonts.google.com/specimen/Ubuntu+Sans'
    }
]
