import {
  Antic,
  Architects_Daughter,
  DM_Sans,
  EB_Garamond,
  Figtree,
  Geist,
  Google_Sans,
  IBM_Plex_Sans,
  Instrument_Sans,
  Instrument_Serif,
  Inter,
  Lexend,
  Libre_Baskerville,
  Lora,
  Manrope,
  Merriweather,
  Montserrat,
  Noto_Sans,
  Noto_Serif,
  Nunito_Sans,
  Open_Sans,
  Outfit,
  Oxanium,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Poppins,
  Public_Sans,
  Quicksand,
  Raleway,
  Roboto,
  Roboto_Slab,
  Source_Sans_3,
  Space_Grotesk
} from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  fallback: ["sans-serif"]
})

const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-inter"
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-noto-sans"
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-nunito-sans"
})

const figtree = Figtree({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-figtree"
})

const roboto = Roboto({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-roboto"
})

const raleway = Raleway({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-raleway"
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-dm-sans"
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-public-sans"
})

const outfit = Outfit({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-outfit"
})

const oxanium = Oxanium({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-oxanium"
})

const manrope = Manrope({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-manrope"
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-space-grotesk"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-montserrat"
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-ibm-plex-sans"
})

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-source-sans-3"
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-instrument-sans"
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-noto-serif"
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-roboto-slab"
})

const merriweather = Merriweather({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-merriweather"
})

const lora = Lora({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-lora"
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-playfair-display"
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-eb-garamond"
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
  variable: "--font-instrument-serif"
})

const googleSans = Google_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-google-sans"
})

const quickSand = Quicksand({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-quick-sand"
})

const lexend = Lexend({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-lexend"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-open-sans"
})

const architect = Architects_Daughter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-architects",
  weight: "400"
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-jakarta"
})

const poppins = Poppins({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-libre-baskerville"
})

const antic = Antic({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-antic",
  weight: "400"
})

export const fontSans = [
  geist,
  inter,
  libreBaskerville,
  poppins,
  jakarta,
  openSans,
  antic,
  lexend,
  notoSans,
  architect,
  nunitoSans,
  figtree,
  roboto,
  raleway,
  dmSans,
  publicSans,
  googleSans,
  outfit,
  oxanium,
  manrope,
  quickSand,
  spaceGrotesk,
  montserrat,
  ibmPlexSans,
  sourceSans3,
  instrumentSans,
  notoSerif,
  robotoSlab,
  merriweather,
  lora,
  playfairDisplay,
  ebGaramond,
  instrumentSerif
]
