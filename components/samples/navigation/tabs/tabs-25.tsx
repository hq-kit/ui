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

const TabsCustomDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs className='gap-4' defaultSelectedKey='explore'>
        <TabsList className='gap-1 bg-background'>
          {tabs.map((tab) => (
            <TabsTrigger
              className='text-muted-foreground hover:text-foreground data-selected:text-primary-foreground *:data-[slot=selected-indicator]:bg-primary *:data-[slot=selected-indicator]:transition-colors *:data-[slot=selected-indicator]:duration-300 hover:*:data-[slot=selected-indicator]:border hover:*:data-[slot=selected-indicator]:bg-muted dark:data-selected:text-primary-foreground dark:*:data-[slot=selected-indicator]:border-transparent dark:*:data-[slot=selected-indicator]:bg-primary'
              id={tab.value}
              key={tab.value}
            >
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

export default TabsCustomDemo
