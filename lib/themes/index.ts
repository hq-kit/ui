export const grayColors = [
    {
        name: 'zinc',
        label: 'Zinc',
        color: '#27272a',
        cssVars: {
            light: {
                bg: 'hsl(0, 0%, 98.04%)',
                fg: 'hsl(240, 10%, 3.92%)',
                muted: 'hsl(240, 4.88%, 83.92%)',
                'muted-fg': 'hsl(240, 3.7%, 15.88%)'
            },
            dark: {
                bg: 'hsl(240, 10%, 3.92%)',
                fg: 'hsl(0, 0%, 98.04%)',
                muted: 'hsl(240, 3.7%, 15.88%)',
                'muted-fg': 'hsl(240, 4.88%, 83.92%)'
            }
        }
    },
    {
        name: 'gray',
        label: 'Gray',
        color: '#6a7282',
        cssVars: {
            light: {
                bg: 'hsl(210, 20%, 98.04%)',
                fg: 'hsl(224, 71.43%, 4.12%)',
                muted: 'hsl(216, 12.2%, 83.92%)',
                'muted-fg': 'hsl(216.92, 19.12%, 26.67%)'
            },
            dark: {
                bg: 'hsl(224, 71.43%, 4.12%)',
                fg: 'hsl(210, 20%, 98.04%)',
                muted: 'hsl(216.92, 19.12%, 26.67%)',
                'muted-fg': 'hsl(216, 12.2%, 83.92%)'
            }
        }
    },
    {
        name: 'slate',
        label: 'Slate',
        color: '#62748e',
        cssVars: {
            light: {
                bg: 'hsl(210, 40%, 98.04%)',
                fg: 'hsl(228.57, 84%, 4.9%)',
                muted: 'hsl(212.73, 26.83%, 83.92%)',
                'muted-fg': 'hsl(215.29, 25%, 26.67%)'
            },
            dark: {
                bg: 'hsl(228.57, 84%, 4.9%)',
                fg: 'hsl(210, 40%, 98.04%)',
                muted: 'hsl(215.29, 25%, 26.67%)',
                'muted-fg': 'hsl(212.73, 26.83%, 83.92%)'
            }
        }
    },
    {
        name: 'neutral',
        label: 'Neutral',
        color: '#737373',
        cssVars: {
            light: {
                bg: 'hsl(0, 0%, 98.04%)',
                fg: 'hsl(0, 0%, 3.92%)',
                muted: 'hsl(0, 0%, 83.14%)',
                'muted-fg': 'hsl(0, 0%, 25.1%)'
            },
            dark: {
                bg: 'hsl(0, 0%, 3.92%)',
                fg: 'hsl(0, 0%, 98.04%)',
                muted: 'hsl(0, 0%, 25.1%)',
                'muted-fg': 'hsl(0, 0%, 83.14%)'
            }
        }
    },
    {
        name: 'stone',
        label: 'Stone',
        color: '#79716b',
        cssVars: {
            light: {
                bg: 'hsl(60, 9.09%, 97.84%)',
                fg: 'hsl(20, 14.29%, 4.12%)',
                muted: 'hsl(24, 5.75%, 82.94%)',
                'muted-fg': 'hsl(30, 6.25%, 25.1%)'
            },
            dark: {
                bg: 'hsl(20, 14.29%, 4.12%)',
                fg: 'hsl(60, 9.09%, 97.84%)',
                muted: 'hsl(30, 6.25%, 25.1%)',
                'muted-fg': 'hsl(24, 5.75%, 82.94%)'
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
                primary: 'hsl(224.3 76.3% 48%)',
                'primary-fg': 'hsl(0 0% 98.04%)',
                secondary: 'hsl(211.7 96.4% 78.4%)',
                'secondary-fg': 'hsl(226.2 57% 21%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98.04%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(293.41, 69.48%, 48.82%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(221.2 83.2% 53.3%)',
                'primary-fg': 'hsl(0 0% 98.04%)',
                secondary: 'hsl(226.2 57% 21%)',
                'secondary-fg': 'hsl(211.7 96.4% 78.4%)',
                danger: 'hsl(0 72.2% 50.6%)',
                'danger-fg': 'hsl(0 0% 98.04%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(17.5 88.3% 40.4%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(292.19, 84.08%, 60.59%)',
                'info-fg': 'hsl(0 0% 98.04%)'
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
                primary: 'hsl(240 5.9% 10%)',
                'primary-fg': 'hsl(0 0% 98%)',
                secondary: 'hsl(240 5.03% 64.9%)',
                'secondary-fg': 'hsl(240 5.9% 10%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(0 0% 98%)',
                'primary-fg': 'hsl(240 5.9% 10%)',
                secondary: 'hsl(240 3.7% 15.88%)',
                'secondary-fg': 'hsl(0 0% 98%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(221.2 83.2% 53.3%)',
                'info-fg': 'hsl(0 0% 98.04%)'
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
                primary: 'hsl(215.75 98.36% 52.16%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(208.24 7.3% 45.69%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(354.25 70.46% 53.53%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(152.18 68.75% 31.37%)',
                'success-fg': 'hsl(0 0% 100%)',
                warning: 'hsl(45 100% 51.37%)',
                'warning-fg': 'hsl(210 10.81% 14.51%)',
                info: 'hsl(190, 90%, 50%)',
                'info-fg': 'hsl(210 10.81% 14.51%)'
            },
            dark: {
                primary: 'hsl(220.33 100% 64.12%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(208.24 7.36% 54.71%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(356.79 93.33% 64.71%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(148.82 47.22% 42.35%)',
                'success-fg': 'hsl(0 0% 100%)',
                warning: 'hsl(49.12 100% 60%)',
                'warning-fg': 'hsl(210 10.81% 14.51%)',
                info: 'hsl(190, 90%, 50%)',
                'info-fg': 'hsl(210 10.81% 14.51%)'
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
                primary: 'hsl(209.84 78.72% 46.08%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(291.24 63.72% 42.16%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(0 65.08% 50.59%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(123.04 46.2% 33.53%)',
                'success-fg': 'hsl(0 0% 100%)',
                warning: 'hsl(27.06 98.33% 46.86%)',
                'warning-fg': 'hsl(210 10.81% 14.51%)',
                info: 'hsl(199, 91%, 64%)',
                'info-fg': 'hsl(0 0% 100%)'
            },
            dark: {
                primary: 'hsl(206.86 89.74% 77.06%)',
                'primary-fg': 'hsl(0 0% 12.94%)',
                secondary: 'hsl(291.3 46.94% 71.18%)',
                'secondary-fg': 'hsl(0 0% 12.94%)',
                danger: 'hsl(4.11 89.62% 58.43%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(122.82 38.46% 56.67%)',
                'success-fg': 'hsl(0 0% 12.94%)',
                warning: 'hsl(35.67 100% 57.45%)',
                'warning-fg': 'hsl(0 0% 12.94%)',
                info: 'hsl(201, 98%, 41%)',
                'info-fg': 'hsl(0 0% 12.94%)'
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
                primary: 'hsl(215.02 100% 54.31%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(180 82.16% 41.76%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(359.33 100% 65.1%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(100.24 76.58% 43.53%)',
                'success-fg': 'hsl(0 0% 100%)',
                warning: 'hsl(39.91 95.83% 52.94%)',
                'warning-fg': 'hsl(0 0% 100%)',
                info: 'hsl(265, 64%, 50%)',
                'info-fg': 'hsl(0 0% 100%)'
            },
            dark: {
                primary: 'hsl(215.02 100% 54.31%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(180 82.16% 41.76%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(359.33 100% 65.1%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(100.24 76.58% 43.53%)',
                'success-fg': 'hsl(0 0% 100%)',
                warning: 'hsl(39.91 95.83% 52.94%)',
                'warning-fg': 'hsl(0 0% 100%)',
                info: 'hsl(265, 62%, 44%)',
                'info-fg': 'hsl(0 0% 100%)'
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
                primary: 'hsl(212.0198 100% 46.67%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(270 66.67% 47.06%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(339.201 90.36% 51.18%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(100.24 76.58% 43.53%)',
                'success-fg': 'hsl(0 0% 0%)',
                warning: 'hsl(37.0298 91.27% 55.1%)',
                'warning-fg': 'hsl(0 0% 0%)',
                info: 'hsl(190, 95%, 74%)',
                'info-fg': 'hsl(0 0% 0%)'
            },
            dark: {
                primary: 'hsl(212.01999999999998 100% 46.67%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(270 59.26% 57.65%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(339.201 90.36% 51.18%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(145.961 79.46% 43.92%)',
                'success-fg': 'hsl(0 0% 0%)',
                warning: 'hsl(37.029 91.27% 55.1%)',
                'warning-fg': 'hsl(0 0% 0%)',
                info: 'hsl(190, 95%, 44%)',
                'info-fg': 'hsl(0 0% 100%)'
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
                primary: 'hsl(212 97% 43%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(200 18% 46%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(3 65% 49%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(90 76% 38%)',
                'success-fg': 'hsl(0 0% 0%)',
                warning: 'hsl(25 100% 64%)',
                'warning-fg': 'hsl(0 0% 0%)',
                info: 'hsl(305, 57%, 46%)',
                'info-fg': 'hsl(0 0% 100%)'
            },
            dark: {
                primary: 'hsl(212 97% 43%)',
                'primary-fg': 'hsl(0 0% 100%)',
                secondary: 'hsl(200 18% 46%)',
                'secondary-fg': 'hsl(0 0% 100%)',
                danger: 'hsl(3 65% 49%)',
                'danger-fg': 'hsl(0 0% 100%)',
                success: 'hsl(90 76% 38%)',
                'success-fg': 'hsl(0 0% 0%)',
                warning: 'hsl(25 100% 64%)',
                'warning-fg': 'hsl(0 0% 0%)',
                info: 'hsl(305, 57%, 46%)',
                'info-fg': 'hsl(0 0% 100%)'
            }
        }
    },
    {
        name: 'tw-red',
        color: '#ef4444',
        label: 'Red',
        cssVars: {
            light: {
                primary: 'hsl(0 72.2% 50.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(0 90.6% 70.8%)',
                'secondary-fg': 'hsl(0 74.7% 15.5%)',
                danger: 'hsl(240 5.2% 33.9%)',
                'danger-fg': 'hsl(0 0% 93%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(0 72.2% 50.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(0 90.6% 70.8%)',
                'secondary-fg': 'hsl(0 74.7% 15.5%)',
                danger: 'hsl(240 5.2% 33.9%)',
                'danger-fg': 'hsl(0 0% 93%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(238.73, 83.53%, 66.67%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-orange',
        color: '#f97316',
        label: 'Orange',
        cssVars: {
            light: {
                primary: 'hsl(24.6 95% 53.1%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(27 96% 61%)',
                'secondary-fg': 'hsl(8 50% 24%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(24.6 95% 53.1%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(15 79.1% 33.7%)',
                'secondary-fg': 'hsl(30.7 97.2% 72.4%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-amber',
        color: '#f59e0b',
        label: 'Amber',
        cssVars: {
            light: {
                primary: 'hsl(32.1 94.6% 43.7%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(45.9 96.7% 64.5%)',
                'secondary-fg': 'hsl(20.9 91.7% 14.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(32.1 94.6% 43.7%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(21.7 77.8% 26.5%)',
                'secondary-fg': 'hsl(32.1 97.7% 83.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-yellow',
        color: '#eab308',
        label: 'Yellow',
        cssVars: {
            light: {
                primary: 'hsl(45.4 93.4% 47.5%)',
                'primary-fg': 'hsl(26 83.3% 14.1%)',
                secondary: 'hsl(50.4 97.8% 63.5%)',
                'secondary-fg': 'hsl(26 83.3% 14.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(45.4 93.4% 47.5%)',
                'primary-fg': 'hsl(26 83.3% 14.1%)',
                secondary: 'hsl(35.5 91.7% 32.9%)',
                'secondary-fg': 'hsl(52.8 98.3% 76.9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-lime',
        color: '#84cc16',
        label: 'Lime',
        cssVars: {
            light: {
                primary: 'hsl(84.8 85.2% 34.5%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(82.7 78% 55.5%)',
                'secondary-fg': 'hsl(89.3 80.4% 10%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(84.8 85.2% 34.5%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(86.3 69% 22.7%)',
                'secondary-fg': 'hsl(141.7 76.6% 73.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-green',
        color: '#22c55e',
        label: 'Green',
        cssVars: {
            light: {
                primary: 'hsl(142.1 76.2% 36.3%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(141.7 76.6% 73.1%)',
                'secondary-fg': 'hsl(144.9 80.4% 10%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(224.3 76.3% 48%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(142.1 76.2% 36.3%)',
                'primary-fg': 'hsl(10 86% 89%)',
                secondary: 'hsl(143.8 61.2% 20.2%)',
                'secondary-fg': 'hsl(141.7 76.6% 73.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(200.4 98% 39.4%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-emerald',
        color: '#10b981',
        label: 'Emerald',
        cssVars: {
            light: {
                primary: 'hsl(161.4 93.5% 30.4%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(156.2 71.6% 66.9%)',
                'secondary-fg': 'hsl(165.7 91.3% 9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(224.3 76.3% 48%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(162.9 93.5% 24.3%)',
                'primary-fg': 'hsl(10 86% 89%)',
                secondary: 'hsl(164.2 85.7% 16.5%)',
                'secondary-fg': 'hsl(156.2 71.6% 66.9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(200.4 98% 39.4%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-teal',
        color: '#14b8a6',
        label: 'Teal',
        cssVars: {
            light: {
                primary: 'hsl(174.7 83.9% 31.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(170.6 76.9% 64.3%)',
                'secondary-fg': 'hsl(178.6 84.3% 10%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(224.3 76.3% 48%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(175.3 77.4% 26.1%)',
                'primary-fg': 'hsl(10 86% 89%)',
                secondary: 'hsl(175.9 60.8% 19%)',
                'secondary-fg': 'hsl(170.6 76.9% 64.3%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(200.4 98% 39.4%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-cyan',
        color: '#06b6d4',
        label: 'Cyan',
        cssVars: {
            light: {
                primary: 'hsl(191.6 91.4% 36.5%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(187.9 85.7% 53.3%)',
                'secondary-fg': 'hsl(197 78.9% 14.9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(192.9 82.3% 31%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(197 78.9% 14.9%)',
                'secondary-fg': 'hsl(187 92.4% 69%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-sky',
        color: '#0ea5e9',
        label: 'Sky',
        cssVars: {
            light: {
                primary: 'hsl(200.4 98% 39.4%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(198.4 93.2% 59.6%)',
                'secondary-fg': 'hsl(204 80.2% 15.9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(200.4 98% 39.4%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(202 80.3% 23.9%)',
                'secondary-fg': 'hsl(199.4 95.5% 73.9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-blue',
        color: '#3b82f6',
        label: 'Blue',
        cssVars: {
            light: {
                primary: 'hsl(224.3 76.3% 48%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(211.7 96.4% 78.4%)',
                'secondary-fg': 'hsl(8 50% 24%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            },
            dark: {
                primary: 'hsl(221.2 83.2% 53.3%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(226.2 57% 21%)',
                'secondary-fg': 'hsl(211.7 96.4% 78.4%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(243.4, 75.36%, 58.63%)',
                'info-fg': 'hsl(0 0% 98.04%)'
            }
        }
    },
    {
        name: 'tw-indigo',
        color: '#6366f1',
        label: 'Indigo',
        cssVars: {
            light: {
                primary: 'hsl(243.4 75.4% 58.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(229.7 93.5% 81.8%)',
                'secondary-fg': 'hsl(243.8 47.1% 20%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(243.4 75.4% 58.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(243.8 47.1% 20%)',
                'secondary-fg': 'hsl(228 96.5% 88.8%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'tw-violet',
        color: '#8b5cf6',
        label: 'Violet',
        cssVars: {
            light: {
                primary: 'hsl(262.1 83.3% 57.8%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(252.5 94.7% 85.1%)',
                'secondary-fg': 'hsl(261.2 72.6% 22.9%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(263.4 70% 50.4%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(261.2 72.6% 22.9%)',
                'secondary-fg': 'hsl(252.5 94.7% 85.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'tw-purple',
        color: '#d946ef',
        label: 'Purple',
        cssVars: {
            light: {
                primary: 'hsl(271.5 81.3% 55.9%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(270 95.2% 75.3%)',
                'secondary-fg': 'hsl(273.5 86.9% 21%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(272.1 71.7% 47.1%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(273.5 86.9% 21%)',
                'secondary-fg': 'hsl(269.2 97.4% 85.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'tw-fuchsia',
        color: '#a21caf',
        label: 'Fuchsia',
        cssVars: {
            light: {
                primary: 'hsl(293.4 69.5% 48.8%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(269.2 97.4% 85.1%)',
                'secondary-fg': 'hsl(296.8 90.2% 16.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(294.7 72.4% 39.8%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(296.8 90.2% 16.1%)',
                'secondary-fg': 'hsl(269.2 97.4% 85.1%)',
                danger: 'hsl(0 72.22% 50.59%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'tw-pink',
        color: '#ec4899',
        label: 'Pink',
        cssVars: {
            light: {
                primary: 'hsl(333.3 71.4% 50.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(327.4 87.1% 81.8%)',
                'secondary-fg': 'hsl(336.2 83.9% 17.1%)',
                danger: 'hsl(240 5.2% 33.9%)',
                'danger-fg': 'hsl(0 0% 93%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(333.3 71.4% 50.6%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(336.2 83.9% 17.1%)',
                'secondary-fg': 'hsl(327.4 87.1% 81.8%)',
                danger: 'hsl(240 5.2% 33.9%)',
                'danger-fg': 'hsl(0 0% 93%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'tw-rose',
        color: '#f43f5e',
        label: 'Rose',
        cssVars: {
            light: {
                primary: 'hsl(346.8 77.2% 49.8%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(351.3 94.5% 71.4%)',
                'secondary-fg': 'hsl(343.1 87.7% 15.9%)',
                danger: 'hsl(240 5.2% 33.9%)',
                'danger-fg': 'hsl(0 0% 93%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(346.8 77.2% 49.8%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(341.5 75.5% 30.4%)',
                'secondary-fg': 'hsl(352.7 96.1% 90%)',
                danger: 'hsl(240 5.2% 33.9%)',
                'danger-fg': 'hsl(0 0% 93%)',
                success: 'hsl(142.1 76.2% 36.3%)',
                'success-fg': 'hsl(0 0% 98.04%)',
                warning: 'hsl(24.6 95% 53.1%)',
                'warning-fg': 'hsl(0 0% 98.04%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-tomato',
        color: '#e54d2e',
        label: 'Tomato',
        cssVars: {
            light: {
                primary: 'hsl(10 78% 54%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(12 100% 91%)',
                'secondary-fg': 'hsl(8 50% 24%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(10 78% 54%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(4 64% 19%)',
                'secondary-fg': 'hsl(10 86% 89%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(224.3 76.3% 48%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-red',
        color: '#e5484d',
        label: 'Red',
        cssVars: {
            light: {
                primary: 'hsl(358 75% 59%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(358 100% 93%)',
                'secondary-fg': 'hsl(351 63% 24%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(358 75% 59%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(348 68% 19%)',
                'secondary-fg': 'hsl(350 100% 91%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-ruby',
        color: '#e54666',
        label: 'Ruby',
        cssVars: {
            light: {
                primary: 'hsl(348 75% 59%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(351 100% 93%)',
                'secondary-fg': 'hsl(344 63% 24%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(348 75% 59%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(342 61% 19%)',
                'secondary-fg': 'hsl(340 96% 91%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-crimson',
        color: '#e93d82',
        label: 'Crimson',
        cssVars: {
            light: {
                primary: 'hsl(336 80% 58%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(341 94% 93%)',
                'secondary-fg': 'hsl(332 63% 24%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(336 80% 58%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(331 62% 19%)',
                'secondary-fg': 'hsl(330 91% 91%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-pink',
        color: '#d6409f',
        label: 'Pink',
        cssVars: {
            light: {
                primary: 'hsl(322 65% 55%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(323 79% 92%)',
                'secondary-fg': 'hsl(320 70% 23%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(322 65% 55%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(315 58% 19%)',
                'secondary-fg': 'hsl(326 92% 91%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-plum',
        color: '#ab4aba',
        label: 'Plum',
        cssVars: {
            light: {
                primary: 'hsl(292 45% 51%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(298 65% 92%)',
                'secondary-fg': 'hsl(291 58% 23%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(292 45% 51%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(297 42% 20%)',
                'secondary-fg': 'hsl(300 59% 89%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-purple',
        color: '#8e4ec6',
        label: 'Purple',
        cssVars: {
            light: {
                primary: 'hsl(272 51% 54%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(277 81% 94%)',
                'secondary-fg': 'hsl(270 50% 25%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(272 51% 54%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(277 39% 22%)',
                'secondary-fg': 'hsl(275 77% 92%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(218.57, 87.5%, 40.78%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-violet',
        color: '#6e56cf',
        label: 'Violet',
        cssVars: {
            light: {
                primary: 'hsl(252 56% 57%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(256 100% 95%)',
                'secondary-fg': 'hsl(249 43% 26%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(252 56% 57%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(256 42% 25%)',
                'secondary-fg': 'hsl(249 94% 93%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-iris',
        color: '#5b5bd6',
        label: 'Iris',
        cssVars: {
            light: {
                primary: 'hsl(240 60% 60%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(238 100% 95%)',
                'secondary-fg': 'hsl(238 43% 27%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(240 60% 60%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(236 45% 27%)',
                'secondary-fg': 'hsl(242 94% 94%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-indigo',
        color: '#3e63dd',
        label: 'Indigo',
        cssVars: {
            light: {
                primary: 'hsl(226 70% 55%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(224 100% 94%)',
                'secondary-fg': 'hsl(226 50% 24%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(226 70% 55%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(225 54% 25%)',
                'secondary-fg': 'hsl(224 100% 92%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-blue',
        color: '#0090ff',
        label: 'Blue',
        cssVars: {
            light: {
                primary: 'hsl(206 100% 50%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(203 100% 92%)',
                'secondary-fg': 'hsl(216 71% 23%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(206 100% 50%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(209 100% 19%)',
                'secondary-fg': 'hsl(205 100% 88%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-cyan',
        color: '#00a2c7',
        label: 'Cyan',
        cssVars: {
            light: {
                primary: 'hsl(191 100% 39%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(187 71% 88%)',
                'secondary-fg': 'hsl(192 69% 17%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(191 100% 39%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(193 100% 14%)',
                'secondary-fg': 'hsl(190 80% 84%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-teal',
        color: '#12a594',
        label: 'Teal',
        cssVars: {
            light: {
                primary: 'hsl(173 80% 36%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(166 62% 88%)',
                'secondary-fg': 'hsl(174 65% 15%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(173 80% 36%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(176 93% 12%)',
                'secondary-fg': 'hsl(163 69% 81%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-jade',
        color: '#29a383',
        label: 'Jade',
        cssVars: {
            light: {
                primary: 'hsl(164 60% 40%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(149 49% 89%)',
                'secondary-fg': 'hsl(160 34% 17%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(164 60% 40%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(161 69% 14%)',
                'secondary-fg': 'hsl(155 69% 81%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-green',
        color: '#30a46c',
        label: 'Green',
        cssVars: {
            light: {
                primary: 'hsl(151 55% 42%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(140 49% 89%)',
                'secondary-fg': 'hsl(155 40% 16%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(151 55% 42%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(154 55% 15%)',
                'secondary-fg': 'hsl(144 70% 82%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-grass',
        color: '#46a758',
        label: 'Grass',
        cssVars: {
            light: {
                primary: 'hsl(131 41% 46%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(123 45% 90%)',
                'secondary-fg': 'hsl(131 30% 18%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(131 41% 46%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(134 33% 17%)',
                'secondary-fg': 'hsl(120 61% 85%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-bronze',
        color: '#a18072',
        label: 'Bronze',
        cssVars: {
            light: {
                primary: 'hsl(18 20% 54%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(19 33% 91%)',
                'secondary-fg': 'hsl(12 22% 22%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(18 20% 54%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(20 10% 17%)',
                'secondary-fg': 'hsl(21 36% 89%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-gold',
        color: '#978365',
        label: 'Gold',
        cssVars: {
            light: {
                primary: 'hsl(36 20% 49%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(44 26% 89%)',
                'secondary-fg': 'hsl(38 16% 20%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(36 20% 49%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(43 8% 16%)',
                'secondary-fg': 'hsl(36 25% 88%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-brown',
        color: '#ad7f58',
        label: 'Brown',
        cssVars: {
            light: {
                primary: 'hsl(28 34% 51%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(29 43% 90%)',
                'secondary-fg': 'hsl(19 15% 21%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(28 34% 51%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(26 19% 16%)',
                'secondary-fg': 'hsl(35 61% 87%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-orange',
        color: '#f76b15',
        label: 'Orange',
        cssVars: {
            light: {
                primary: 'hsl(23 93% 53%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(34 100% 85%)',
                'secondary-fg': 'hsl(16 50% 23%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(23 93% 53%)',
                'primary-fg': 'hsl(0 0% 93%)',
                secondary: 'hsl(28 100% 14%)',
                'secondary-fg': 'hsl(30 100% 88%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-amber',
        color: '#ffc53d',
        label: 'Amber',
        cssVars: {
            light: {
                primary: 'hsl(42 100% 62%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(50 100% 81%)',
                'secondary-fg': 'hsl(24 40% 22%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(42 100% 62%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(37 100% 12%)',
                'secondary-fg': 'hsl(41 100% 85%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-yellow',
        color: '#ffe629',
        label: 'Yellow',
        cssVars: {
            light: {
                primary: 'hsl(53 100% 58%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(53 100% 79%)',
                'secondary-fg': 'hsl(42 39% 20%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(53 100% 58%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(48 100% 11%)',
                'secondary-fg': 'hsl(53 79% 84%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-lime',
        color: '#bdee63',
        label: 'Lime',
        cssVars: {
            light: {
                primary: 'hsl(81 80% 66%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(76 63% 84%)',
                'secondary-fg': 'hsl(75 39% 18%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(81 80% 66%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(92 31% 16%)',
                'secondary-fg': 'hsl(80 79% 85%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-mint',
        color: '#86ead4',
        label: 'Mint',
        cssVars: {
            light: {
                primary: 'hsl(167 70% 72%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(165 67% 87%)',
                'secondary-fg': 'hsl(171 51% 17%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(167 70% 72%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(178 100% 11%)',
                'secondary-fg': 'hsl(156 71% 86%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    },
    {
        name: 'rd-sky',
        color: '#7ce2fe',
        label: 'Sky',
        cssVars: {
            light: {
                primary: 'hsl(193 98% 74%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(195 80% 90%)',
                'secondary-fg': 'hsl(205 50% 23%)',
                danger: 'hsl(10 78% 54%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(131 43% 43%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(24 100% 47%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            },
            dark: {
                primary: 'hsl(193 98% 74%)',
                'primary-fg': 'hsl(0 0% 13%)',
                secondary: 'hsl(208 67% 20%)',
                'secondary-fg': 'hsl(192 100% 88%)',
                danger: 'hsl(10 73% 51%)',
                'danger-fg': 'hsl(0 0% 98%)',
                success: 'hsl(132 50% 33%)',
                'success-fg': 'hsl(0 0% 98%)',
                warning: 'hsl(23 93% 53%)',
                'warning-fg': 'hsl(0 0% 98%)',
                info: 'hsl(291.96, 53.33%, 41.18%)',
                'info-fg': 'hsl(0 0% 93%)'
            }
        }
    }
]

export type Preset = (typeof presetColors)[number]
export type PresetColor = (typeof presetColors)[number]['name']
export type Gray = (typeof grayColors)[number]
export type GrayColor = (typeof grayColors)[number]['name']
