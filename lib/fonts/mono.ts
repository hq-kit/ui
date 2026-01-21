export const fontMonoFamilies = [
  {
    label: 'Geist Mono',
    value: 'Geist Mono, Geist Mono Fallback, monospace',
    link: 'family=Geist+Mono:wght@100..900'
  },
  {
    label: 'JetBrains Mono',
    value: 'JetBrains Mono, monospace',
    link: 'family=JetBrains+Mono:ital,wght@0,100..800;1,100..800'
  },
  {
    label: 'Fira Code',
    value: 'Fira Code, monospace',
    link: 'family=Fira+Code:wght@300..700'
  },
  {
    label: 'DM Mono',
    value: 'DM Mono, monospace',
    link: 'family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500'
  },
  {
    label: 'PT Mono',
    value: 'PT Mono, monospace',
    link: 'family=PT+Mono'
  },
  {
    label: 'IBM Plex Mono',
    value: 'IBM Plex Mono, monospace',
    link: 'family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700'
  },
  {
    label: 'Ubuntu Mono',
    value: 'Ubuntu Mono, monospace',
    link: 'family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700'
  },
  {
    label: 'Source Code Pro',
    value: 'Source Code Pro, monospace',
    link: 'family=Source+Code+Pro:ital,wght@0,200..900;1,200..900'
  },
  {
    label: 'Delius Swash Caps',
    value: 'Delius Swash Caps, cursive',
    link: 'family=Delius+Swash+Caps'
  }
]

export type FontMonoFamily = (typeof fontMonoFamilies)[number]

export const fontMonoUrl = fontMonoFamilies.map((font) => font.link).join('&')
