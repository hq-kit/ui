import { cn } from '@/lib/utils'
import {
    DM_Mono,
    Fira_Code,
    Geist_Mono,
    IBM_Plex_Mono,
    JetBrains_Mono,
    PT_Mono,
    Source_Code_Pro,
    Ubuntu_Mono
} from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono'
})

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono'
})

const firaCode = Fira_Code({
    subsets: ['latin'],
    variable: '--font-fira-code'
})

const dmMono = DM_Mono({
    subsets: ['latin'],
    variable: '--font-dm-mono',
    weight: ['400', '500']
})

const ptMono = PT_Mono({
    subsets: ['latin'],
    variable: '--font-pt-mono',
    weight: ['400']
})

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    variable: '--font-ibm-plex-mono',
    weight: ['500', '700']
})

const ubuntuMono = Ubuntu_Mono({
    subsets: ['latin'],
    variable: '--font-ubuntu-mono',
    weight: ['400', '700']
})

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    variable: '--font-source-code-pro',
    weight: ['400', '700']
})

export const fontMono = cn(
    dmMono.variable,
    firaCode.variable,
    geistMono.variable,
    ibmPlexMono.variable,
    jetbrainsMono.variable,
    ptMono.variable,
    ubuntuMono.variable,
    sourceCodePro.variable
)

export const fontMonoFamilies = [
    {
        label: 'Geist Mono',
        value: '--font-geist-mono',
        link: 'https://vercel.com/font'
    },
    {
        label: 'JetBrains Mono',
        value: '--font-jetbrains-mono',
        link: 'https://fonts.google.com/specimen/JetBrains+Mono'
    },
    {
        label: 'Fira Code',
        value: '--font-fira-code',
        link: 'https://fonts.google.com/specimen/Fira+Code'
    },
    {
        label: 'DM Mono',
        value: '--font-dm-mono',
        link: 'https://fonts.google.com/specimen/DM+Mono'
    },
    {
        label: 'PT Mono',
        value: '--font-pt-mono',
        link: 'https://fonts.google.com/specimen/PT+Mono'
    },
    {
        label: 'IBM Plex Mono',
        value: '--font-ibm-plex-mono',
        link: 'https://fonts.google.com/specimen/IBM+Plex+Mono'
    },
    {
        label: 'Ubuntu Mono',
        value: '--font-ubuntu-mono',
        link: 'https://fonts.google.com/specimen/Ubuntu+Mono'
    },
    {
        label: 'Source Code Pro',
        value: '--font-source-code-pro',
        link: 'https://fonts.google.com/specimen/Source+Code+Pro'
    }
]
