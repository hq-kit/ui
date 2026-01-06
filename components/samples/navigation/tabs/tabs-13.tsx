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

const TabsLiftedDemo = () => {
  return (
    <div>
      <Tabs className='gap-4' defaultSelectedKey='explore'>
        <TabsList className='justify-start rounded-none border-b bg-background p-0'>
          {tabs.map((tab) => (
            <TabsTrigger
              className='data-selected:*:data-[slot=selected-indicator]:border-b-background *:data-[slot=selected-indicator]:-mb-0.5 *:data-[slot=selected-indicator]:h-full *:data-[slot=selected-indicator]:rounded-none *:data-[slot=selected-indicator]:rounded-t *:data-[slot=selected-indicator]:border *:data-[slot=selected-indicator]:border-border *:data-[slot=selected-indicator]:border-b-border *:data-[slot=selected-indicator]:bg-background *:data-[slot=selected-indicator]:shadow-none dark:border-b-0 dark:*:data-[slot=selected-indicator]:-mb-0.5 dark:*:data-[slot=selected-indicator]:bg-background'
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

export default TabsLiftedDemo
