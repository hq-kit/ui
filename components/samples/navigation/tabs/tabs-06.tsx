import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
    count: 8,
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
    count: 3,
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
    count: 6,
    content: (
      <>
        <span className='font-semibold text-foreground'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const TabsWithVerticalBadgeDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs className='gap-4' defaultSelectedKey='explore'>
        <TabsList className='h-full'>
          {tabs.map((tab) => (
            <TabsTrigger
              className='*:[span]:flex *:[span]:flex-col *:[span]:items-center *:[span]:gap-1 *:[span]:px-2.5 sm:*:[span]:px-3'
              id={tab.value}
              key={tab.value}
            >
              <Badge className='h-5 min-w-5 px-1 tabular-nums'>{tab.count}</Badge>
              {tab.name}
            </TabsTrigger>
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

export default TabsWithVerticalBadgeDemo
