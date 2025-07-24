import { IconClipboard } from 'hq-icons'
import template from 'lodash.template'
import { useTheme } from 'next-themes'

import { Code } from '@/components/mdx/code'
import { Button, Link, Modal } from '@/components/ui'
import { useThemeGenerator } from '@/lib/hooks/use-theme'
import type { Preset } from '@/lib/themes'

export const ThemeSnippet = () => {
    const { currentFontSansFamily, currentFontMonoFamily } = useThemeGenerator()
    return (
        <>
            <Modal>
                <Button>
                    <IconClipboard />
                    Copy code
                </Button>
                <Modal.Content size='2xl'>
                    <Modal.Header>
                        <Modal.Title>Theme</Modal.Title>
                        <Modal.Description>Copy and paste the following code into your CSS file.</Modal.Description>
                    </Modal.Header>
                    <Modal.Body>
                        <CopyCode />
                    </Modal.Body>
                    <Modal.Footer className='justify-start sm:flex-col'>
                        <Modal.Title className='text-lg/2'>Font</Modal.Title>
                        <Modal.Description>
                            The Selected Font Sans is:{' '}
                            <Link
                                className='p-0 font-semibold text-primary'
                                target='_blank'
                                href={currentFontSansFamily.link}
                            >
                                {currentFontSansFamily.label}
                            </Link>
                            , and Font Mono is:{' '}
                            <Link
                                className='p-0 font-semibold text-primary'
                                target='_blank'
                                href={currentFontMonoFamily.link}
                            >
                                {currentFontMonoFamily.label}
                            </Link>
                        </Modal.Description>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    )
}

export const ColorPreview = () => {
    const { currentPresetTheme, presetThemes } = useThemeGenerator()
    const activeTheme = presetThemes.find((theme) => theme.name === currentPresetTheme)

    const { theme } = useTheme()

    const lightColors = { ...activeTheme?.cssVars.light }
    const darkColors = { ...activeTheme?.cssVars.dark }

    return theme === 'light' ? (
        <div className='grid grid-cols-2 gap-2 rounded-lg border border-dashed p-4'>
            {Object.keys(lightColors).map((key) =>
                key.endsWith('fg') ? null : (
                    <div
                        className='flex items-center justify-center rounded-lg border px-2 py-1 font-bold text-sm'
                        style={{
                            backgroundColor: lightColors[key as keyof typeof lightColors] ?? `var(--${key})`,
                            color:
                                lightColors[`${key}-foreground` as keyof typeof lightColors] ??
                                `var(--${key}-foreground)`
                        }}
                        key={key}
                    >
                        {key}
                    </div>
                )
            )}
            <div
                className='flex items-center justify-center rounded-lg border px-2 py-1 font-bold text-sm'
                style={{
                    backgroundColor: 'transparent',
                    color: 'var(--muted)'
                }}
            >
                border
            </div>
        </div>
    ) : (
        <div className='grid grid-cols-2 gap-2 rounded-lg border border-dashed p-4'>
            {Object.keys(darkColors).map((key) =>
                key.endsWith('fg') ? null : (
                    <div
                        className='flex items-center justify-center rounded-lg border px-2 py-1 font-bold text-sm'
                        style={{
                            backgroundColor: darkColors[key as keyof typeof darkColors] ?? `var(--${key})`,
                            color:
                                darkColors[`${key}-foreground` as keyof typeof darkColors] ?? `var(--${key}-foreground)`
                        }}
                        key={key}
                    >
                        {key}
                    </div>
                )
            )}
            <div
                className='flex items-center justify-center rounded-lg border px-2 py-1 font-bold text-sm'
                style={{
                    backgroundColor: 'transparent',
                    color: 'var(--muted)'
                }}
            >
                border
            </div>
        </div>
    )
}

const CopyCode = () => {
    const { currentPresetTheme, currentBorderRadius, presetThemes } = useThemeGenerator()
    const activeTheme = presetThemes.find((theme) => theme.name === currentPresetTheme)

    return <Code lang='css' code={getThemeCode(activeTheme, currentBorderRadius)} />
}

function getThemeCode(theme: Preset | undefined, radius: string) {
    if (!theme) {
        return ''
    }

    const colors = {
        light: { ...theme.cssVars.light },
        dark: { ...theme.cssVars.dark }
    }

    return template(CSS_VARIABLES)({ colors, radius })
}

const CSS_VARIABLES = `@layer base {
  :root {
    --background: <%- colors.light["bg"] %>;
    --foreground: <%- colors.light["fg"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;

    --radius: <%- radius %>rem;
  }

  .dark {
    --background: <%- colors.dark["bg"] %>;
    --foreground: <%- colors.dark["fg"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
  }
}
`
