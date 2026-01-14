export const fontSansFamilies = [
  { label: 'Geist', value: 'Geist, Geist Fallback, sans-serif', link: 'family=Geist:wght@100..900' },
  {
    label: 'Jakarta',
    value: 'Plus Jakarta Sans, sans-serif',
    link: 'family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800'
  },
  {
    label: 'Inter',
    value: 'Inter, sans-serif',
    link: 'family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900'
  },
  { label: 'Outfit', value: 'Outfit, sans-serif', link: 'family=Outfit:wght@100..900' },
  { label: 'Raleway', value: 'Raleway, sans-serif', link: 'family=Raleway:ital,wght@0,100..900;1,100..900' },
  { label: 'Roboto', value: 'Roboto, sans-serif', link: 'family=Roboto:ital,wght@0,100..900;1,100..900' },
  {
    label: 'Poppins',
    value: 'Poppins, sans-serif',
    link: 'family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900'
  },
  { label: 'Montserrat', value: 'Montserrat, sans-serif', link: 'family=Montserrat:ital,wght@0,100..900;1,100..900' },
  {
    label: 'Ubuntu',
    value: 'Ubuntu, sans-serif',
    link: 'family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700'
  },
  {
    label: 'Source Sans',
    value: 'Source Sans 3, sans-serif',
    link: 'family=Source+Sans+3:ital,wght@0,200..900;1,200..900'
  },
  { label: 'Open Sans', value: 'Open Sans, sans-serif', link: 'family=Open+Sans:ital,wght@0,300..800;1,300..800' },
  {
    label: 'DM Sans',
    value: 'DM Sans, sans-serif',
    link: 'family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000'
  },
  { label: 'Nunito', value: 'Nunito, sans-serif', link: 'family=Nunito:ital,wght@0,200..1000;1,200..1000' },
  {
    label: 'Barlow',
    value: 'Barlow, sans-serif',
    link: 'family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900'
  },
  {
    label: 'Source Code Pro',
    value: 'Source Code Pro, sans-serif',
    link: 'family=Source+Code+Pro:ital,wght@0,200..900;1,200..900'
  },
  {
    label: 'Lato',
    value: 'Lato, sans-serif',
    link: 'family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900'
  },
  { label: 'Gabriela', value: 'Gabriela, sans-serif', link: 'family=Gabriela' },
  {
    label: 'Delius Swash Caps',
    value: 'Delius Swash Caps, cursive',
    link: 'family=Delius+Swash+Caps'
  },
  {
    label: 'Merriweather',
    value: 'Merriweather, serif',
    link: 'family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900'
  },
  {
    label: 'Playfair Display',
    value: 'Playfair Display, serif',
    link: 'family=Playfair+Display:ital,wght@0,400..900;1,400..900'
  },
  { label: 'Lora', value: 'Lora, serif', link: 'family=Lora:ital,wght@0,400..700;1,400..700' },
  {
    label: 'Source Serif 4',
    value: 'Source Serif 4, serif',
    link: 'family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900'
  },
  {
    label: 'Libre Baskerville',
    value: 'Libre Baskerville, serif',
    link: 'family=Libre+Baskerville:ital,wght@0,400..700;1,400..700'
  },
  {
    label: 'Space Grotesk',
    value: 'Space Grotesk, sans-serif',
    link: 'family=Space+Grotesk:wght@300..700'
  },
  { label: 'PT Serif', value: 'PT Serif, serif', link: 'family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700' },
  { label: 'Oxanium', value: 'Oxanium, sans-serif', link: 'family=Oxanium:wght@200..800' }
]

export type FontSansFamily = (typeof fontSansFamilies)[number]

export const fontSansUrl = fontSansFamilies.map((font) => font.link).join('&')
