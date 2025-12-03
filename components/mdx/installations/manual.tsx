'use client'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { useEffect, useState } from 'react'
import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from '@/components/mdx/icons'
import { Tabs } from '@/components/ui/tabs'
import Fleet from './fleet'

export default function ManualInstall({ component }: { component: string }) {
  const [content, setContent] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<string>(component)
  const [deps, setDeps] = useState<string[]>([])
  const [uiComponents, setUiComponents] = useState<string[]>([])

  const [libComponents, setLibComponents] = useState<string[]>([])
  const [hooksComponents, setHooksComponents] = useState<string[]>([])

  useEffect(() => {
    fetch(`/r/${component}.json`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.files[0].content)
        setDeps(data.dependencies)
        setUiComponents(data.registryDependencies.filter((dep: string) => dep !== 'utils' && dep !== 'use-mobile'))
        setLibComponents(data.registryDependencies.filter((dep: string) => dep === 'utils'))
        setHooksComponents(data.registryDependencies.filter((dep: string) => dep === 'use-mobile'))
      })
  }, [component])

  function getContent(name: string) {
    fetch(`/r/${name}.json`)
      .then((res) => res.json())
      .then((data) => setContent(data.files[0].content))
      .then(() => setSelectedFile(name))
  }

  return (
    <>
      <p className='mb-2'>First install the dependencies</p>
      <Tabs defaultSelectedKey='npm'>
        <Tabs.List>
          <Tabs.Trigger id='npm'>
            <IconBrandNpm className='size-3' />
            NPM
          </Tabs.Trigger>
          <Tabs.Trigger id='yarn'>
            <IconBrandYarn className='size-3' />
            Yarn
          </Tabs.Trigger>
          <Tabs.Trigger id='pnpm'>
            <IconBrandPnpm className='size-3' />
            PNPM
          </Tabs.Trigger>
          <Tabs.Trigger id='bun'>
            <IconBrandBun className='size-3' />
            Bun
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content id='npm'>
          <DynamicCodeBlock code={`npm install ${deps.join(' ')}`} lang='bash' />
        </Tabs.Content>
        <Tabs.Content id='yarn'>
          <DynamicCodeBlock code={`yarn add ${deps.join(' ')}`} lang='bash' />
        </Tabs.Content>
        <Tabs.Content id='pnpm'>
          <DynamicCodeBlock code={`pnpm add ${deps.join(' ')}`} lang='bash' />
        </Tabs.Content>
        <Tabs.Content id='bun'>
          <DynamicCodeBlock code={`bun add ${deps.join(' ')}`} lang='bash' />
        </Tabs.Content>
      </Tabs>

      <div className='relative mt-2 grid h-[calc(100vh-35rem)] grid-cols-4 gap-2 *:first:col-span-1 *:last:col-span-3'>
        <Fleet
          components={deps}
          hooksComponents={hooksComponents}
          libComponents={libComponents}
          selectedFile={selectedFile}
          setSelectedFile={(file: string) => getContent(file)}
          uiComponents={[component, ...uiComponents]}
        />
        <DynamicCodeBlock
          code={content || ''}
          codeblock={{ className: 'size-full flex min-h-[calc(100vh-35rem)]' }}
          lang='tsx'
          wrapInSuspense
        />
      </div>
    </>
  )
}
