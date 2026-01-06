import {
  IconBook,
  IconCalendar,
  IconChevronRight,
  IconCircle,
  IconHeartPlus,
  IconHome,
  IconLayout,
  IconLayoutNavbar,
  IconLogin,
  IconLogout,
  IconMail,
  IconMessage,
  IconShoppingCart,
  type TablerIcon
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Sheet, SheetBody, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

type NavigationItem = {
  name: string
  icon: TablerIcon
} & (
  | {
      type: 'page'
      children?: never
    }
  | {
      type: 'category'
      children: NavigationItem[]
    }
)

const navigationMenu: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: IconHome,
    type: 'page'
  },
  {
    name: 'Layouts',
    icon: IconLayout,
    type: 'category',
    children: [
      {
        name: 'Content Navbar',
        icon: IconLayout,
        type: 'page'
      },
      {
        name: 'Horizontal',
        icon: IconLayout,
        type: 'page'
      },
      {
        name: 'Without Menu',
        icon: IconLayout,
        type: 'page'
      }
    ]
  },
  {
    name: 'Front Pages',
    icon: IconLayoutNavbar,
    type: 'category',
    children: [
      {
        name: 'Landing Page',
        icon: IconLayoutNavbar,
        type: 'page'
      },
      {
        name: 'Pricing Page',
        icon: IconLayoutNavbar,
        type: 'page'
      },
      {
        name: 'Checkout Page',
        icon: IconLayoutNavbar,
        type: 'page'
      }
    ]
  },
  {
    name: 'Chat',
    icon: IconMessage,
    type: 'page'
  },
  {
    name: 'Email',
    icon: IconMail,
    type: 'page'
  },
  {
    name: 'Calendar',
    icon: IconCalendar,
    type: 'page'
  },
  {
    name: 'Ecommerce',
    icon: IconShoppingCart,
    type: 'category',
    children: [
      {
        name: 'Products',
        icon: IconShoppingCart,
        type: 'page'
      },
      {
        name: 'Categories',
        icon: IconShoppingCart,
        type: 'page'
      },
      {
        name: 'Shopping & Delivery',
        icon: IconShoppingCart,
        type: 'page'
      },
      {
        name: 'Location',
        icon: IconShoppingCart,
        type: 'page'
      }
    ]
  },
  {
    name: 'Sign In',
    icon: IconLogin,
    type: 'page'
  },
  {
    name: 'Sign Out',
    icon: IconLogout,
    type: 'page'
  },
  {
    name: 'Support',
    icon: IconHeartPlus,
    type: 'page'
  },
  {
    name: 'Documentation',
    icon: IconBook,
    type: 'page'
  }
]

const NavigationMenu = ({ item, level }: { level: number; item: NavigationItem }) => {
  if (item.type === 'page') {
    return (
      <div
        className='flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 *:[svg]:size-4 *:[svg]:shrink-0'
        style={{ paddingLeft: `${level === 0 ? 0.25 : 1.75}rem` }}
      >
        {level === 0 ? <item.icon /> : <IconCircle />}
        <span className='text-sm'>{item.name}</span>
      </div>
    )
  }

  return (
    <Collapsible
      className='flex flex-col gap-0 transition-[gap] data-expanded:gap-1.5'
      style={{ paddingLeft: `${level === 0 ? 0 : 1.5}rem` }}
    >
      <CollapsibleTrigger className='flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 *:[svg]:size-4 *:[svg]:shrink-0'>
        {level === 0 ? <item.icon /> : <IconCircle />}
        <span className='flex-1 text-start text-sm'>{item.name}</span>
        <IconChevronRight className='size-4 shrink-0 in-data-expanded:rotate-90 transition-transform' />
      </CollapsibleTrigger>
      <CollapsibleContent className='flex flex-col gap-1.5'>
        {item.children.map((item) => (
          <NavigationMenu item={item} key={item.name} level={level + 1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

const SheetWithNavigationMenuDemo = () => {
  return (
    <Sheet>
      <Button variant='outline'>Navigation Menu</Button>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='pl-1'>Menu</SheetTitle>
        </SheetHeader>
        <SheetBody className='flex flex-col gap-2.5'>
          {navigationMenu.map((item) => (
            <NavigationMenu item={item} key={item.name} level={0} />
          ))}
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}

export default SheetWithNavigationMenuDemo
