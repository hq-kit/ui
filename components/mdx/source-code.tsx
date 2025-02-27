'use client'

import * as React from 'react'

import { Button } from 'react-aria-components'

import previews from '@/components/docs/generated/previews.json'
import Code from '@/components/mdx/code'
import { Description, Tabs, cn } from '@/components/ui'

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
    component: string | string[]
    withMessage?: boolean
}

export default function SourceCode({ component, withMessage = true, ...props }: SourceCodeProps) {
    const [codeStrings, setCodeStrings] = React.useState<{ name: string; code: string }[]>([])
    const [isOpened, setIsOpened] = React.useState<boolean>(false)

    React.useEffect(() => {
        const componentArray = Array.isArray(component) ? component : [component]
        const updatedCodeStrings = componentArray.map((show) => {
            // @ts-expect-error no-type
            const componentData = previews[show]
            if (componentData) {
                return {
                    name: show,
                    code: componentData.raw.replace(
                        /export default function \w+\(\) \{/g,
                        'export default function App() {'
                    )
                }
            } else {
                console.error('Component not found:', show)
                return { name: show, code: '' }
            }
        })
        setCodeStrings(updatedCodeStrings)
        setIsOpened(false)
    }, [component])

    const open = () => setIsOpened(!isOpened)

    return (
        <section className={cn('not-prose space-y-2', withMessage ? 'my-4' : 'my-2')}>
            {withMessage && (
                <Description className='prose -mt-2 mb-4 max-w-none text-base'>
                    Copy the code below and paste it into your component folder.
                </Description>
            )}
            <Tabs onSelectionChange={() => setIsOpened(false)}>
                <Tabs.List items={codeStrings}>
                    {(item) => (
                        <Tabs.Label key={item.name} id={`tab-${item.name}`}>
                            {item.name.includes('demo') ? `main` : item.name}.tsx
                        </Tabs.Label>
                    )}
                </Tabs.List>
                {codeStrings.map((item) => (
                    <Tabs.Content key={item.name} id={`tab-${item.name}`}>
                        <div className={'relative overflow-hidden'} {...props}>
                            <div
                                className={cn(
                                    'my-0 overflow-hidden transition',
                                    !isOpened && 'h-32'
                                )}
                            >
                                <Code code={item.code} />
                            </div>
                            <div
                                className={cn(
                                    'to-background absolute inset-0 rounded-lg bg-gradient-to-b from-transparent',
                                    isOpened && 'hidden'
                                )}
                            ></div>
                            <Button
                                className='bg-bg hover:bg-bg pressed:bg-bg sticky right-1/2 bottom-4 left-1/2 -translate-x-1/2 rounded-lg border p-2 transition outline-none hover:ring-4 hover:ring-offset-4 focus:outline-none'
                                onPress={open}
                            >
                                {isOpened ? 'Hide' : 'Reveal'}
                            </Button>
                        </div>
                    </Tabs.Content>
                ))}
            </Tabs>
        </section>
    )
}
