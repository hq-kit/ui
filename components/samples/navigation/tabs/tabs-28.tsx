'use client'

import type { Key } from 'react-aria-components'
import { motion } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
    content: (
      <>
        Discover <span className='font-semibold text-foreground'>fresh ideas</span>, trending topics, and hidden gems
        curated just for you. Start exploring and let your curiosity lead the way!
      </>
    )
  },
  {
    name: 'Favorites',
    value: 'favorites',
    content: (
      <>
        All your <span className='font-semibold text-foreground'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.
      </>
    )
  },
  {
    name: 'Surprise Me',
    value: 'surprise',
    content: (
      <>
        <span className='font-semibold text-foreground'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const AnimatedUnderlineTabsDemo = () => {
  const [activeTab, setActiveTab] = useState<Key>('explore')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab)
    const activeTabElement = tabRefs.current[activeIndex]

    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement

      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth
      })
    }
  }, [activeTab])

  return (
    <div className='w-full max-w-md'>
      <Tabs className='gap-4' onSelectionChange={setActiveTab} selectedKey={activeTab}>
        <TabsList className='relative rounded-none border-b bg-background p-0'>
          {tabs.map((tab) => (
            <TabsTrigger
              className='relative z-10 rounded-none border-0 bg-background data-[state=active]:shadow-none dark:data-[state=active]:bg-background'
              id={tab.value}
              key={tab.value}
            >
              {tab.name}
            </TabsTrigger>
          ))}

          <motion.div
            className='absolute bottom-0 z-20 h-0.5 bg-primary'
            layoutId='underline'
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40
            }}
          />
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent id={tab.value} key={tab.value}>
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default AnimatedUnderlineTabsDemo
