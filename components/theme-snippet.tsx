import { Code } from '@/components/mdx/code'
import { Button, Link, Modal } from '@/components/ui'
import { useThemeGenerator } from '@/lib/hooks/use-theme'
import { getPreset } from '@/lib/themes'
import { generateThemeCode } from '@/lib/themes/theme-generator'
import { IconClipboardCopy } from '@tabler/icons-react'

export const ThemeSnippet = () => {
    const { currentFontSansFamily, currentFontMonoFamily } = useThemeGenerator()
    return (
        <>
            <Modal>
                <Button>
                    <IconClipboardCopy />
                    Copy code
                </Button>
                <Modal.Content size='2xl'>
                    <Modal.Header>
                        <Modal.Title>Theme</Modal.Title>
                        <Modal.Description>Copy and paste the following code into your CSS file.</Modal.Description>
                    </Modal.Header>
                    <Modal.Body className='rehype'>
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

const CopyCode = () => {
    const { currentPresetTheme } = useThemeGenerator()
    const theme = getPreset(currentPresetTheme)

    return <Code filename='app.css' withoutSwitcher lang='css' code={generateThemeCode(theme)} />
}
