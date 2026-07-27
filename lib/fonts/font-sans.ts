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
import { cn } from "@/lib/utils"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans"
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans"
})

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree"
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto"
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway"
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans"
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
})

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium"
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans"
})

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3"
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans"
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif"
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab"
})

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather"
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display"
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond"
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif"
})

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google-sans"
})

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick-sand"
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
})

const architect = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects",
  weight: "400"
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville"
})

const antic = Antic({
  subsets: ["latin"],
  variable: "--font-antic",
  weight: "400"
})

export const fontSans = cn(
  geistSans.variable,
  inter.variable,
  libreBaskerville.variable,
  poppins.variable,
  jakarta.variable,
  openSans.variable,
  antic.variable,
  lexend.variable,
  notoSans.variable,
  architect.variable,
  nunitoSans.variable,
  figtree.variable,
  roboto.variable,
  raleway.variable,
  dmSans.variable,
  publicSans.variable,
  googleSans.variable,
  outfit.variable,
  oxanium.variable,
  manrope.variable,
  quickSand.variable,
  spaceGrotesk.variable,
  montserrat.variable,
  ibmPlexSans.variable,
  sourceSans3.variable,
  instrumentSans.variable,
  notoSerif.variable,
  robotoSlab.variable,
  merriweather.variable,
  lora.variable,
  playfairDisplay.variable,
  ebGaramond.variable,
  instrumentSerif.variable
)
