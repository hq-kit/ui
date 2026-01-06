'use client'

import type { Key } from 'react-aria-components'
import { IconBook, IconGift, IconHeart } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
    icon: IconBook,
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
    icon: IconHeart,
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
    icon: IconGift,
    content: (
      <>
        <span className='font-semibold text-foreground'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const ExpandableTabsDemo = () => {
  const [activeTab, setActiveTab] = useState<Key>('explore')

  return (
    <div className='w-full max-w-md'>
      <Tabs className='gap-4' onSelectionChange={setActiveTab} selectedKey={activeTab}>
        <TabsList className='h-auto gap-2 rounded-xl p-1'>
          {tabs.map(({ icon: Icon, name, value }) => {
            const isActive = activeTab === value

            return (
              <motion.div
                animate={{
                  width: isActive ? 120 : 32
                }}
                className={cn(
                  'flex h-8 items-center justify-center overflow-hidden rounded-md',
                  isActive ? 'flex-1' : 'flex-none'
                )}
                initial={false}
                key={value}
                layout
                onClick={() => setActiveTab(value)}
                transition={{
                  type: 'tween',
                  stiffness: 400,
                  damping: 25
                }}
              >
                <TabsTrigger id={value}>
                  <motion.div
                    animate={{ filter: 'blur(0px)' }}
                    className='flex h-8 w-full items-center justify-center'
                    exit={{ filter: 'blur(2px)' }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Icon className='aspect-square size-4 shrink-0' />
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          animate={{ opacity: 1, scaleX: 1 }}
                          className='font-medium max-sm:hidden'
                          initial={{ opacity: 0, scaleX: 0.8 }}
                          style={{ originX: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                          {name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </TabsTrigger>
              </motion.div>
            )
          })}
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

export default ExpandableTabsDemo
