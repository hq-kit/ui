'use client'

import { IconBrandGithub, IconSearch } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import { Collection, Header, Link } from 'react-aria-components'
import { IconApp } from '@/components/icons'
import { menus } from '@/components/layouts/menus'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants } from '../ui/button'
import { Kbd, KbdGroup } from '../ui/kbd'
import { Navbar } from '../ui/navbar'
import { Separator } from '../ui/separator'
import { CommandMenu } from './command-menu'

export function AppNavbar() {
  const pathname = usePathname()
  const menuItems = [
    { id: 1, label: 'Home', url: '/', active: pathname === '/' },
    { id: 2, label: 'Components', url: '/docs', active: pathname.startsWith('/docs') }
    // { id: 3, label: 'Blocks', url: '/blocks', active: pathname.startsWith('/blocks') }
  ]

  const [openNav, setOpenNav] = useState(false)
  const [openCommand, setOpenCommand] = useState(false)

  useEffect(() => {
    setOpenNav(false)
  }, [pathname])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpenCommand((openCommand) => !openCommand)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <CommandMenu open={openCommand} setOpen={setOpenCommand} />
      <Navbar isOpen={openNav} isSticky onOpenChange={setOpenNav}>
        <Navbar.Nav>
          <Navbar.Logo aria-label='Home' href='/'>
            <IconApp />
            <span className='whitespace-nowrap font-bold'>HQ UI</span>
          </Navbar.Logo>
          <Navbar.Section className='md:ml-4'>
            <Collection items={menuItems}>
              {(item) => (
                <Navbar.Item href={item.url} isActive={item.active}>
                  {item.label}
                </Navbar.Item>
              )}
            </Collection>
          </Navbar.Section>
          {menus().map((item) => (
            <Navbar.Section aria-label='Navigation' className='md:hidden' key={item.title}>
              <Header className='mt-4 mb-2 px-2 font-semibold text-foreground'>{item.title}</Header>
              {item.items?.map((item) => (
                <Navbar.Item href={item.slug} isActive={pathname === item.slug} key={item.slug}>
                  {item.title}
                </Navbar.Item>
              ))}
              {item.sections?.map((section) => (
                <Fragment key={section.title}>
                  <Header className='mt-4 mb-2 px-2 font-semibold text-foreground'>{section.title}</Header>
                  {section.items?.map((item) => (
                    <Navbar.Item href={item.slug} isActive={pathname === item.slug} key={item.slug}>
                      {item.title}
                    </Navbar.Item>
                  ))}
                </Fragment>
              ))}
            </Navbar.Section>
          ))}
          <Navbar.Section className='ml-auto hidden md:flex'>
            <Navbar.Flex>
              <Button onPress={() => setOpenCommand(true)} variant='outline'>
                <IconSearch />
                <span className='mr-2 text-muted-foreground'>Search...</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </Button>
              <Link
                aria-label='Github Repository'
                className={buttonVariants({
                  variant: 'outline',
                  size: 'icon'
                })}
                href={'https://github.com/hq-kit/ui'}
                target='_blank'
              >
                <IconBrandGithub />
              </Link>
              <ThemeToggle />
            </Navbar.Flex>
          </Navbar.Section>
        </Navbar.Nav>
        <Navbar.Compact>
          <Navbar.Flex>
            <Navbar.Trigger aria-label='Toggle Navbar' />
            <Separator className='mx-1 h-7' orientation='vertical' />
            <Navbar.Logo aria-label='Home' href='/'>
              <IconApp />
              <span className='whitespace-nowrap font-bold'>HQ UI</span>
            </Navbar.Logo>
          </Navbar.Flex>
          <Navbar.Flex>
            <Button onPress={() => setOpenCommand(true)} size='icon' variant='outline'>
              <IconSearch />
            </Button>
            <Link
              aria-label='Github Repository'
              className={buttonVariants({
                variant: 'outline',
                size: 'icon'
              })}
              href={'https://github.com/hq-kit/ui'}
              target='_blank'
            >
              <IconBrandGithub />
            </Link>
            <ThemeToggle />
          </Navbar.Flex>
        </Navbar.Compact>
      </Navbar>
    </>
  )
}
