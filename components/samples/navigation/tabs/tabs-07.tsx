import { IconBook, IconGift, IconHeart } from '@tabler/icons-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

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

const TabsWithTooltipDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs className='gap-4' defaultSelectedKey='explore'>
        <TabsList className='h-full'>
          {tabs.map(({ icon: Icon, name, value }) => (
            <Tooltip key={value}>
              <TabsTrigger
                aria-label='tab-trigger'
                className='flex flex-col items-center gap-1 px-2.5 sm:px-3'
                id={value}
              >
                <Icon />
              </TabsTrigger>
              <TooltipContent className='px-2 py-1 text-xs'>{name}</TooltipContent>
            </Tooltip>
          ))}
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

export default TabsWithTooltipDemo
