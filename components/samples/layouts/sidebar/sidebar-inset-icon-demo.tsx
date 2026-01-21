'use client'

import {
  IconBell,
  IconChevronRight,
  IconCircleCheck,
  IconCreditCard,
  IconHome,
  IconLayoutNavbar,
  IconLayoutSidebar,
  IconLogout,
  IconSelector,
  IconSparkles
} from '@tabler/icons-react'
import { IconApp } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar } from '@/components/ui/avatar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'

type NavMenu = {
  title: string
  url?: string
  icon?: React.ComponentType<{ className?: string }>
  items?: {
    title: string
    url: string
  }[]
}[]

const navigations: NavMenu = [
  {
    title: 'Home',
    url: '#',
    icon: IconHome
  },
  {
    title: 'Sidebars',
    url: '/block/layouts/sidebar',
    icon: IconLayoutSidebar,
    items: [
      {
        title: 'Default',
        url: '/block/layouts/sidebar/sidebar-demo'
      },
      {
        title: 'Floating',
        url: '/block/layouts/sidebar/sidebar-floating-demo'
      },
      {
        title: 'Inset',
        url: '/block/layouts/sidebar/sidebar-inset-demo'
      },
      {
        title: 'Default Icon',
        url: '/block/layouts/sidebar/sidebar-icon-demo'
      },
      {
        title: 'Floating Icon',
        url: '/block/layouts/sidebar/sidebar-floating-icon-demo'
      },
      {
        title: 'Inset Icon',
        url: '/block/layouts/sidebar/sidebar-inset-icon-demo'
      },
      {
        title: 'Fixed',
        url: '/block/layouts/sidebar/sidebar-fixed-demo'
      }
    ]
  },
  {
    title: 'Navbars',
    url: '/block/layouts/navbar',
    icon: IconLayoutNavbar,
    items: [
      {
        title: 'Default',
        url: '/block/layouts/navbar/navbar-demo'
      },
      {
        title: 'Floating',
        url: '/block/layouts/navbar/navbar-floating-demo'
      },
      {
        title: 'Inset',
        url: '/block/layouts/navbar/navbar-inset-demo'
      }
    ]
  }
]

const user = {
  name: 'DQ Al Haqqi',
  email: 'dq.alhaqqi@gmail.com',
  avatar: 'https://github.com/dq-alhq.png'
}

export default function SidebarDemo({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 14)'
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible='icon' variant='inset' {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className='data-[slot=sidebar-menu-button]:p-1.5!' href='#'>
                <IconApp className='size-5!' />
                <span className='font-semibold text-base'>HQ UI</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigations</SidebarGroupLabel>
            <SidebarMenu>
              <Navigation items={navigations} />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className='flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)'>
          <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
            <SidebarTrigger className='-ml-1' />
            <Separator className='mx-2 h-4' orientation='vertical' />
            <Breadcrumb>
              <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='#'>Blocks</Breadcrumb.Item>
              <Breadcrumb.Item>Sidebar</Breadcrumb.Item>
            </Breadcrumb>
            <div className='ml-auto flex items-center gap-2'>
              <ThemeToggle variant='ghost' />
            </div>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <Skeleton className='aspect-video rounded-xl' />
            <Skeleton className='aspect-video rounded-xl' />
            <Skeleton className='aspect-video rounded-xl' />
          </div>
          <Skeleton className='min-h-screen flex-1 rounded-xl md:min-h-min' />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const Navigation = ({ items }: { items: NavMenu }) => {
  return items.map((item) =>
    item.items ? (
      <Collapsible defaultExpanded={true} key={item.title}>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <IconChevronRight className='ml-auto transition-transform duration-200 group-data-expanded/collapsible:rotate-90' />
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton
                    href={subItem.url}
                    isActive={subItem.url === '/block/layouts/sidebar/sidebar-inset-icon-demo'}
                  >
                    {subItem.title}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    ) : (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton href={item.url} tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  )
}

const NavUser = ({
  user
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) => {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            size='lg'
          >
            <Avatar alt={user.name} className='h-8 w-8 rounded-lg' src={user.avatar} />
            <div className='grid flex-1 text-left text-sm leading-tight'>
              <span className='truncate font-medium'>{user.name}</span>
              <span className='truncate text-xs'>{user.email}</span>
            </div>
            <IconSelector className='ml-auto size-4' />
          </SidebarMenuButton>
          <DropdownMenuContent
            className='w-(--trigger-width) min-w-56 rounded-lg'
            offset={4}
            placement={isMobile ? 'bottom end' : 'right bottom'}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar alt={user.name} className='h-8 w-8 rounded-lg' src={user.avatar} />
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>{user.name}</span>
                  <span className='truncate text-xs'>{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconSparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconCircleCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconBell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
