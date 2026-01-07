import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: 'Home',
    value: 'home',
    content:
      'Welcome to the Home tab! Here, you can explore the latest updates, news, and highlights. Stay informed about what&apos;s happening and never miss out on important announcements.'
  },
  {
    name: 'Profile',
    value: 'profile',
    content:
      'This is your Profile tab. Manage your personal information, update your account details, and customize your settings to make your experience unique.'
  },
  {
    name: 'Messages',
    value: 'messages',
    content:
      'Messages: Check your recent messages, start new conversations, and stay connected with your friends and contacts. Manage your chat history and keep the communication flowing.'
  }
]

const CardWithTabsDemo = () => {
  return (
    <Card className='w-max'>
      <CardContent>
        <Tabs className='w-full max-w-sm' defaultSelectedKey={tabs[0].value}>
          <TabsList className='w-full justify-start rounded-none border-b bg-background p-0'>
            {tabs.map((tab) => (
              <TabsTrigger
                className='h-full rounded-none border-transparent border-b-2 bg-background data-selected:border-b-primary data-selected:shadow-none'
                id={tab.value}
                key={tab.value}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent id={tab.value} key={tab.value}>
              <p className='p-4 text-muted-foreground text-sm'>{tab.content}</p>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default CardWithTabsDemo
