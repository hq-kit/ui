export const grayColors = [
    {
        name: 'zinc',
        label: 'Zinc',
        color: '#27272a',
        cssVars: {
            light: {
                bg: 'oklch(0.985 0 0)',
                fg: 'oklch(0.141 0.004 285.863)',
                muted: 'oklch(0.871 0.005 286.485)',
                'muted-fg': 'oklch(0.552 0.014 285.988)'
            },
            dark: {
                bg: 'oklch(0.141 0.004 285.863)',
                fg: 'oklch(0.985 0 0)',
                muted: 'oklch(0.274 0.005 286.095)',
                'muted-fg': 'oklch(0.552 0.014 285.988)'
            }
        }
    },
    {
        name: 'gray',
        label: 'Gray',
        color: '#6a7282',
        cssVars: {
            light: {
                bg: 'oklch(0.985 0.002 247.727)',
                fg: 'oklch(0.13 0.027 261.691)',
                muted: 'oklch(0.872 0.009 258.355)',
                'muted-fg': 'oklch(0.551 0.023 264.371)'
            },
            dark: {
                bg: 'oklch(0.13 0.027 261.691)',
                fg: 'oklch(0.985 0.002 247.727)',
                muted: 'oklch(0.373 0.031 259.733)',
                'muted-fg': 'oklch(0.551 0.023 264.371)'
            }
        }
    },
    {
        name: 'slate',
        label: 'Slate',
        color: '#62748e',
        cssVars: {
            light: {
                bg: 'oklch(0.984 0.003 247.8)',
                fg: 'oklch(0.129 0.041 264.695)',
                muted: 'oklch(0.869 0.02 252.89)',
                'muted-fg': 'oklch(0.554 0.041 257.415)'
            },
            dark: {
                bg: 'oklch(0.129 0.041 264.695)',
                fg: 'oklch(0.984 0.003 247.8)',
                muted: 'oklch(0.372 0.039 257.285)',
                'muted-fg': 'oklch(0.554 0.041 257.415)'
            }
        }
    },
    {
        name: 'neutral',
        label: 'Neutral',
        color: '#737373',
        cssVars: {
            light: {
                bg: 'oklch(0.985 0 0)',
                fg: 'oklch(0.145 0 0)',
                muted: 'oklch(0.87 0 0)',
                'muted-fg': 'oklch(0.556 0 0)'
            },
            dark: {
                bg: 'oklch(0.145 0 0)',
                fg: 'oklch(0.985 0 0)',
                muted: 'oklch(0.371 0 0)',
                'muted-fg': 'oklch(0.556 0 0)'
            }
        }
    },
    {
        name: 'stone',
        label: 'Stone',
        color: '#79716b',
        cssVars: {
            light: {
                bg: 'oklch(0.985 0.001 105.52)',
                fg: 'oklch(0.147 0.004 49.275)',
                muted: 'oklch(0.869 0.004 56.484)',
                'muted-fg': 'oklch(0.553 0.012 58.091)'
            },
            dark: {
                bg: 'oklch(0.147 0.004 49.275)',
                fg: 'oklch(0.985 0.001 105.52)',
                muted: 'oklch(0.374 0.009 67.561)',
                'muted-fg': 'oklch(0.553 0.012 58.091)'
            }
        }
    }
]

export const presetColors = [
    {
        name: 'brand-default',
        color: '#0d6dfd',
        label: 'Default',
        radius: 0.5,
        cssVars: {
            light: {
                primary: 'oklch(0.623 0.188 259.813)',
                'primary-fg': 'oklch(0.97 0.014 254.605)',
                secondary: 'oklch(0.809 0.096 251.808)',
                'secondary-fg': 'oklch(0.282 0.087 267.936)',
                danger: 'oklch(0.645 0.215 16.444)',
                'danger-fg': 'oklch(0.969 0.015 12.545)'
            },
            dark: {
                primary: 'oklch(0.546 0.215 262.88)',
                'primary-fg': 'oklch(0.97 0.014 254.605)',
                secondary: 'oklch(0.282 0.087 267.936)',
                'secondary-fg': 'oklch(0.809 0.096 251.808)',
                danger: 'oklch(0.586 0.222 17.589)',
                'danger-fg': 'oklch(0.969 0.015 12.545)'
            }
        }
    },
    {
        name: 'brand-shadcn',
        color: '#000000',
        label: 'Shadcn',
        radius: 0.55,
        cssVars: {
            light: {
                primary: 'oklch(0.21 0.006 285.885)',
                'primary-fg': 'oklch(0.985 0 0)',
                secondary: 'oklch(0.967 0.001 286.375)',
                'secondary-fg': 'oklch(0.21 0.006 285.885)',
                danger: 'oklch(0.577 0.245 27.325)',
                'danger-fg': 'oklch(0.985 0 0)'
            },
            dark: {
                primary: 'oklch(0.92 0.004 286.32)',
                'primary-fg': 'oklch(0.21 0.006 285.885)',
                secondary: 'oklch(0.274 0.006 286.033)',
                'secondary-fg': 'oklch(0.985 0 0)',
                danger: 'oklch(0.704 0.191 22.216)',
                'danger-fg': 'oklch(0.985 0 0)'
            }
        }
    },
    {
        name: 'brand-bootstrap',
        color: '#712cf9',
        label: 'Bootstrap',
        radius: 0.5,
        cssVars: {
            light: {
                primary: 'oklch(58% 57% 260)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(56% 4% 245)',
                'secondary-fg': 'oklch(95% 0% 248)',
                danger: 'oklch(59% 51% 21)',
                'danger-fg': 'oklch(99% 2% 229)'
            },
            dark: {
                primary: 'oklch(58% 57% 260)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(56% 4% 245)',
                'secondary-fg': 'oklch(95% 0% 248)',
                danger: 'oklch(59% 51% 21)',
                'danger-fg': 'oklch(99% 2% 229)'
            }
        }
    },
    {
        name: 'brand-mui',
        color: '#2196f3',
        label: 'MUI',
        radius: 0.3,
        cssVars: {
            light: {
                primary: 'oklch(56% 41% 253)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(52% 54% 321)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(57% 50% 26)',
                'danger-fg': 'oklch(100% 0% 90)'
            },
            dark: {
                primary: 'hsl(206.86 89.74% 77.06%)',
                'primary-fg': 'oklch(25% 0% 90)',
                secondary: 'oklch(74% 29% 322)',
                'secondary-fg': 'oklch(25% 0% 90)',
                danger: 'oklch(64% 54% 29)',
                'danger-fg': 'oklch(100% 0% 90)'
            }
        }
    },
    {
        name: 'brand-antd',
        color: '#1677ff',
        label: 'Ant Design',
        radius: 0.3,
        cssVars: {
            light: {
                primary: 'oklch(60% 55% 259)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(74% 31% 195)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(67% 54% 24)',
                'danger-fg': 'oklch(100% 0% 90)'
            },
            dark: {
                primary: 'hsl(215.02 100% 54.31%)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(74% 31% 195)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(67% 54% 24)',
                'danger-fg': 'oklch(100% 0% 90)'
            }
        }
    },
    {
        name: 'brand-heroui',
        color: '#7828c8',
        label: 'Hero UI',
        radius: 0.875,
        cssVars: {
            light: {
                primary: 'oklch(57% 52% 258)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(49% 56% 301)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(62% 60% 11)',
                'danger-fg': 'oklch(100% 0% 90)'
            },
            dark: {
                primary: 'oklch(57% 52% 258)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(58% 48% 304)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(62% 60% 11)',
                'danger-fg': 'oklch(100% 0% 90)'
            }
        }
    },
    {
        name: 'brand-metro',
        color: '#0366d6',
        label: 'Metro',
        radius: 0,
        cssVars: {
            light: {
                primary: 'oklch(53% 48% 257)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(57% 10% 230)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(56% 48% 28)',
                'danger-fg': 'oklch(100% 0% 90)'
            },
            dark: {
                primary: 'oklch(53% 48% 257)',
                'primary-fg': 'oklch(100% 0% 90)',
                secondary: 'oklch(57% 10% 230)',
                'secondary-fg': 'oklch(100% 0% 90)',
                danger: 'oklch(56% 48% 28)',
                'danger-fg': 'oklch(100% 0% 90)'
            }
        }
    }
]

export type Preset = (typeof presetColors)[number]
export type PresetColor = (typeof presetColors)[number]['name']
export type Gray = (typeof grayColors)[number]
export type GrayColor = (typeof grayColors)[number]['name']
