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
  },
  {
    name: 'Trending',
    value: 'trending',
    content: (
      <>
        Stay on top of what&apos;s <span className='font-semibold text-foreground'>trending</span>. Discover what
        everyone&apos;s talking about, from viral trends to the latest memes and conversations.
      </>
    )
  },
  {
    name: 'Events',
    value: 'events',
    content: (
      <>
        Check out upcoming <span className='font-semibold text-foreground'>events</span> happening near you. Whether
        virtual or in-person, there&apos;s always something to join and be a part of.
      </>
    )
  },
  {
    name: 'News',
    value: 'news',
    content: (
      <>
        Stay updated with the latest <span className='font-semibold text-foreground'>news</span> across the globe. From
        tech breakthroughs to world events, get the stories that matter most.
      </>
    )
  },
  {
    name: 'Community',
    value: 'community',
    content: (
      <>
        Connect with the <span className='font-semibold text-foreground'>community</span>—share your thoughts, ask
        questions, and join discussions with like-minded individuals.
      </>
    )
  },
  {
    name: 'Rewards',
    value: 'rewards',
    content: (
      <>
        Unlock exclusive <span className='font-semibold text-foreground'>rewards</span> and perks for your activity.
        Keep an eye out for new ways to earn and redeem your points.
      </>
    )
  },
  {
    name: 'Profile',
    value: 'profile',
    content: (
      <>
        View and edit your <span className='font-semibold text-foreground'>profile</span> information, track your
        activity, and customize your experience. It&apos;s all about you here!
      </>
    )
  }
]

const TabsOverflowDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs className='gap-1' defaultSelectedKey='explore'>
        <TabsList className='mb-3 w-full justify-start overflow-x-auto [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-0 hover:[&::-webkit-scrollbar]:h-2'>
          {tabs.map((tab) => (
            <TabsTrigger id={tab.value} key={tab.value}>
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

export default TabsOverflowDemo
