import { IconClipboard } from 'hq-icons'
import template from 'lodash.template'
import { useTheme } from 'next-themes'

import Code from '@/components/mdx/code'
import { Button, Link, Modal } from '@/components/ui'
import { useThemeGenerator } from '@/lib/hooks/use-theme'
import { Gray, Preset } from '@/lib/themes'

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
                        <Modal.Description>
                            Copy and paste the following code into your CSS file.
                        </Modal.Description>
                    </Modal.Header>
                    <Modal.Body>
                        <CopyCode />
                    </Modal.Body>
                    <Modal.Footer className='sm:flex-col justify-start'>
                        <Modal.Title className='text-lg/2'>Font</Modal.Title>
                        <Modal.Description>
                            The Selected Font Sans is:{' '}
                            <Link
                                className='p-0 text-primary font-semibold'
                                target='_blank'
                                href={currentFontSansFamily.link}
                            >
                                {currentFontSansFamily.label}
                            </Link>
                            , and Font Mono is:{' '}
                            <Link
                                className='p-0 text-primary font-semibold'
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
    const { currentPresetColor, currentGrayColor, grayColors, presetColors } = useThemeGenerator()
    const activeTheme = presetColors.find((theme) => theme.name === currentPresetColor)
    const activeBase = grayColors.find((theme) => theme.name === currentGrayColor)

    const { theme } = useTheme()

    const lightColors = { ...activeBase?.cssVars.light, ...activeTheme?.cssVars.light }
    const darkColors = { ...activeBase?.cssVars.dark, ...activeTheme?.cssVars.dark }
    return theme === 'light' ? (
        <div className='grid grid-cols-2 gap-2 p-4 border border-dashed rounded-lg'>
            {Object.keys(lightColors).map((key) =>
                key.endsWith('fg') ? null : (
                    <div
                        className='px-2 py-1 border font-bold text-sm flex items-center justify-center rounded-lg'
                        style={{
                            backgroundColor: lightColors[key as keyof typeof lightColors],
                            color: lightColors[`${key}-fg` as keyof typeof lightColors]
                        }}
                        key={key}
                    >
                        {key}
                    </div>
                )
            )}
        </div>
    ) : (
        <div className='grid grid-cols-2 gap-2 p-4 border border-dashed rounded-lg'>
            {Object.keys(darkColors).map((key) =>
                key.endsWith('fg') ? null : (
                    <div
                        className='px-2 py-1 border font-bold text-sm flex items-center justify-center rounded-lg'
                        style={{
                            backgroundColor: darkColors[key as keyof typeof darkColors],
                            color: darkColors[`${key}-fg` as keyof typeof darkColors]
                        }}
                        key={key}
                    >
                        {key}
                    </div>
                )
            )}
        </div>
    )
}

const CopyCode = () => {
    const { currentPresetColor, currentGrayColor, currentBorderRadius, grayColors, presetColors } =
        useThemeGenerator()
    const activeTheme = presetColors.find((theme) => theme.name === currentPresetColor)
    const activeBase = grayColors.find((theme) => theme.name === currentGrayColor)

    return <Code lang='css' code={getThemeCode(activeTheme, activeBase, currentBorderRadius)} />
}

function getThemeCode(theme: Preset | undefined, grays: Gray | undefined, radius: number) {
    if (!theme || !grays) {
        return ''
    }

    const colors = {
        light: { ...theme.cssVars.light, ...grays.cssVars.light },
        dark: { ...theme.cssVars.dark, ...grays.cssVars.dark }
    }

    return template(CSS_VARIABLES)({ colors, radius })
}

const CSS_VARIABLES = `@layer base {
  :root {
    --bg: <%- colors.light["bg"] %>;
    --fg: <%- colors.light["fg"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-fg: <%- colors.light["primary-fg"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-fg: <%- colors.light["secondary-fg"] %>;
    --danger: <%- colors.light["danger"] %>;
    --danger-fg: <%- colors.light["danger-fg"] %>;
    --success: <%- colors.light["success"] %>;
    --success-fg: <%- colors.light["success-fg"] %>;
    --info: <%- colors.light["info"] %>;
    --info-fg: <%- colors.light["info-fg"] %>;
    --warning: <%- colors.light["warning"] %>;
    --warning-fg: <%- colors.light["warning-fg"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-fg: <%- colors.light["muted-fg"] %>;

    --chart-1: oklch(0.546 0.245 262.881);
    --chart-2: oklch(0.707 0.165 254.624);
    --chart-3: oklch(0.809 0.105 251.813);
    --chart-4: oklch(0.882 0.059 254.128);
    --chart-5: oklch(0.932 0.032 255.585);

    --radius: <%- radius %>rem;
  }

  .dark {
    --bg: <%- colors.dark["bg"] %>;
    --fg: <%- colors.dark["fg"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-fg: <%- colors.dark["secondary-fg"] %>;
    --danger: <%- colors.dark["danger"] %>;
    --danger-fg: <%- colors.dark["danger-fg"] %>;
    --success: <%- colors.dark["success"] %>;
    --success-fg: <%- colors.dark["success-fg"] %>;
    --info: <%- colors.dark["info"] %>;
    --info-fg: <%- colors.dark["info-fg"] %>;
    --warning: <%- colors.dark["warning"] %>;
    --warning-fg: <%- colors.dark["warning-fg"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-fg: <%- colors.dark["muted-fg"] %>;
  }
}
`
