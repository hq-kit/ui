import {
    Barlow,
    Delius_Swash_Caps,
    DM_Sans,
    Gabriela,
    Geist,
    Inter,
    Lato,
    Libre_Baskerville,
    Lora,
    Merriweather,
    Montserrat,
    Nunito,
    Open_Sans,
    Outfit,
    Oxanium,
    Playfair_Display,
    Plus_Jakarta_Sans,
    Poppins,
    PT_Serif,
    Raleway,
    Roboto,
    Source_Code_Pro,
    Source_Sans_3,
    Source_Serif_4,
    Space_Grotesk,
    Ubuntu_Sans
} from 'next/font/google'
import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['300', '500', '700', '900'] })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const ubuntuSans = Ubuntu_Sans({ subsets: ['latin'], variable: '--font-ubuntu-sans' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const barlow = Barlow({ subsets: ['latin'], variable: '--font-barlow', weight: ['300', '500', '600', '700', '900'] })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code-pro' })
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['100', '300', '400', '700', '900'] })
const gabriela = Gabriela({ subsets: ['latin'], variable: '--font-gabriela', weight: ['400'] })
const deliusSwashCaps = Delius_Swash_Caps({ subsets: ['latin'], variable: '--font-delius-swash-caps', weight: ['400'] })
const merriweather = Merriweather({ subsets: ['latin'], variable: '--font-merriweather' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif-4' })
const libreBaskerville = Libre_Baskerville({
    subsets: ['latin'],
    variable: '--font-libre-baskerville',
    weight: ['400', '700']
})
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const ptSerif = PT_Serif({ subsets: ['latin'], variable: '--font-pt-serif', weight: ['400', '700'] })
const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-oxanium' })

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
    sourceSans.variable,
    openSans.variable,
    dmSans.variable,
    nunito.variable,
    barlow.variable,
    sourceCodePro.variable,
    lato.variable,
    gabriela.variable,
    deliusSwashCaps.variable,
    merriweather.variable,
    playfairDisplay.variable,
    lora.variable,
    sourceSerif4.variable,
    libreBaskerville.variable,
    spaceGrotesk.variable,
    ptSerif.variable,
    oxanium.variable
)

export const fontSansFamilies = [
    { label: 'Geist', value: '--font-geist', link: 'https://vercel.com/font' },
    { label: 'Jakarta', value: '--font-jakarta', link: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans' },
    { label: 'Inter', value: '--font-inter', link: 'https://fonts.google.com/specimen/Inter' },
    { label: 'Outfit', value: '--font-outfit', link: 'https://fonts.google.com/specimen/Outfit' },
    { label: 'Raleway', value: '--font-raleway', link: 'https://fonts.google.com/specimen/Raleway' },
    { label: 'Roboto', value: '--font-roboto', link: 'https://fonts.google.com/specimen/Roboto' },
    { label: 'Poppins', value: '--font-poppins', link: 'https://fonts.google.com/specimen/Poppins' },
    { label: 'Montserrat', value: '--font-montserrat', link: 'https://fonts.google.com/specimen/Montserrat' },
    { label: 'Ubuntu', value: '--font-ubuntu-sans', link: 'https://fonts.google.com/specimen/Ubuntu+Sans' },
    { label: 'Source Sans', value: '--font-source-sans', link: 'https://fonts.google.com/specimen/Source+Sans+3' },
    { label: 'Open Sans', value: '--font-open-sans', link: 'https://fonts.google.com/specimen/Open+Sans' },
    { label: 'DM Sans', value: '--font-dm-sans', link: 'https://fonts.google.com/specimen/DM+Sans' },
    { label: 'Nunito', value: '--font-nunito', link: 'https://fonts.google.com/specimen/Nunito' },
    { label: 'Barlow', value: '--font-barlow', link: 'https://fonts.google.com/specimen/Barlow' },
    {
        label: 'Source Code Pro',
        value: '--font-source-code-pro',
        link: 'https://fonts.google.com/specimen/Source+Code+Pro'
    },
    { label: 'Lato', value: '--font-lato', link: 'https://fonts.google.com/specimen/Lato' },
    { label: 'Gabriela', value: '--font-gabriela', link: 'https://fonts.google.com/specimen/Gabriela' },
    {
        label: 'Delius Swash Caps',
        value: '--font-delius-swash-caps',
        link: 'https://fonts.google.com/specimen/Delius+Swash+Caps'
    },
    { label: 'Merriweather', value: '--font-merriweather', link: 'https://fonts.google.com/specimen/Merriweather' },
    {
        label: 'Playfair Display',
        value: '--font-playfair-display',
        link: 'https://fonts.google.com/specimen/Playfair+Display'
    },
    { label: 'Lora', value: '--font-lora', link: 'https://fonts.google.com/specimen/Lora' },
    {
        label: 'Source Serif 4',
        value: '--font-source-serif-4',
        link: 'https://fonts.google.com/specimen/Source+Serif+4'
    },
    {
        label: 'Libre Baskerville',
        value: '--font-libre-baskerville',
        link: 'https://fonts.google.com/specimen/Libre+Baskerville'
    },
    { label: 'Space Grotesk', value: '--font-space-grotesk', link: 'https://fonts.google.com/specimen/Space+Grotesk' },
    { label: 'PT Serif', value: '--font-pt-serif', link: 'https://fonts.google.com/specimen/PT+Serif' },
    { label: 'Oxanium', value: '--font-oxanium', link: 'https://fonts.google.com/specimen/Oxanium' }
]
