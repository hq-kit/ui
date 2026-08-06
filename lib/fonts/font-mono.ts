import {
  Bubblegum_Sans,
  Cascadia_Code,
  DM_Mono,
  Fira_Code,
  Geist_Mono,
  Google_Sans_Code,
  IBM_Plex_Mono,
  JetBrains_Mono,
  PT_Mono,
  Roboto_Mono,
  Source_Code_Pro,
  Space_Mono,
  Ubuntu_Mono
} from "next/font/google"
import { cn } from "@/lib/utils"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ]
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-mono"
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-fira-code"
})

const googleCode = Google_Sans_Code({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-google-code"
})

const cascadiaCode = Cascadia_Code({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-cascadia-code"
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-dm-mono",
  weight: "400"
})
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-source-code-pro"
})

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-ubuntu-mono",
  weight: "400"
})

const ptMono = PT_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-pt-mono",
  weight: "400"
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-ibm-plex-mono",
  weight: "400"
})

const bubbleGum = Bubblegum_Sans({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-bubblegum-sans",
  weight: "400"
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-space-mono",
  weight: "400"
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  variable: "--font-roboto-mono",
  weight: "400"
})

export const fontMono = geistMono.variable

export const fontMonoVariables = cn(
  jetbrainsMono.variable,
  geistMono.variable,
  firaCode.variable,
  googleCode.variable,
  cascadiaCode.variable,
  dmMono.variable,
  robotoMono.variable,
  bubbleGum.variable,
  sourceCodePro.variable,
  spaceMono.variable,
  ubuntuMono.variable,
  ptMono.variable,
  ibmPlexMono.variable
)
