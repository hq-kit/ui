import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  {
    name: "Explore",
    value: "explore",
    content: (
      <>
        Discover <span className="text-foreground font-semibold">fresh ideas</span>, trending topics, and hidden gems
        curated just for you. Start exploring and let your curiosity lead the way!
      </>
    )
  },
  {
    name: "Favorites",
    value: "favorites",
    content: (
      <>
        All your <span className="text-foreground font-semibold">favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.
      </>
    )
  },
  {
    name: "Surprise Me",
    value: "surprise",
    content: (
      <>
        <span className="text-foreground font-semibold">Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const TabsOutlinedDemo = () => {
  return (
    <div>
      <Tabs className="gap-4" defaultSelectedKey="explore">
        <TabsList className="bg-background gap-1 border p-1">
          {tabs.map((tab) => (
            <TabsTrigger
              className="data-selected:text-primary-foreground *:data-[slot=selected-indicator]:bg-primary dark:data-selected:text-primary-foreground dark:*:data-[slot=selected-indicator]:bg-primary dark:*:data-[slot=selected-indicator]:border-transparent"
              id={tab.value}
              key={tab.value}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent id={tab.value} key={tab.value}>
            <p className="text-muted-foreground text-sm">{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default TabsOutlinedDemo
