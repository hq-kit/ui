'use client'

import React from 'react'

import {
    IconBook,
    IconBookOpen,
    IconBrandGithub,
    IconBrandGithubCopilot,
    IconBuilding,
    IconChartBar,
    IconFileCode,
    IconFilter,
    IconGlobe,
    IconHeart,
    IconLogOut,
    IconMessage,
    IconSettings,
    IconStar,
    IconUser,
    IconUsers
} from 'hq-icons'
import { Group, Menu as MenuPrimitive } from 'react-aria-components'

import {
    Avatar,
    Button,
    Checkbox,
    Description,
    Menu,
    Modal,
    Select,
    Sheet,
    TextField
} from '@/components/ui'

export default function SheetMenuDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <>
            <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Header>
                    <Modal.Title>Edit status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='space-y-4'>
                        <TextField
                            prefix={<IconBrandGithub />}
                            label='Status'
                            placeholder="What's your status?"
                        />
                        <Group>
                            <Checkbox>Busy</Checkbox>
                            <Description>
                                When others mention you, assign you, or request your review, GitHub
                                will let them know that you have limited availability.
                            </Description>
                        </Group>
                        <Select label='Clear Status'>
                            <Select.Item>Never</Select.Item>
                            <Select.Item>in 30 Minutes</Select.Item>
                            <Select.Item>in 1 Hour</Select.Item>
                            <Select.Item>in 8 Hours</Select.Item>
                            <Select.Item>after Today</Select.Item>
                            <Select.Item>after a Week</Select.Item>
                            <Select.Item>after a Month</Select.Item>
                        </Select>
                        <Select label='Visible to'>
                            <Select.Item>Everyone</Select.Item>
                            <Select.Item>Organization</Select.Item>
                            <Select.Item>Public</Select.Item>
                        </Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline' onPress={closeModal}>
                        Clear Status
                    </Button>
                    <Button onPress={closeModal}>Set Status</Button>
                </Modal.Footer>
            </Modal.Content>
            <Sheet>
                <Sheet.Trigger aria-label='Open menu'>
                    <Avatar src='https://github.com/dq-alhq.png' alt='dq-alhq' />
                </Sheet.Trigger>
                <Sheet.Content closeButton={false}>
                    <Sheet.Header className='bg-background sticky top-0 flex flex-row items-center p-4 sm:gap-3'>
                        <Avatar src='https://github.com/dq-alhq.png' alt='dq-alhq' size='xl' />
                        <div>
                            <Sheet.Title>dq-alhq</Sheet.Title>
                            <Sheet.Description>DQ Al-Haqqi</Sheet.Description>
                        </div>
                    </Sheet.Header>
                    <Sheet.Body className='border-t px-0 sm:px-0'>
                        <MenuPrimitive aria-label='Menu' className='divide-y'>
                            <Menu.Section>
                                <Menu.Item onAction={openModal}>
                                    <IconBrandGithub />
                                    <Menu.Label>Edit Status</Menu.Label>
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconUser />
                                    <Menu.Label>Your profile</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconBook />
                                    <Menu.Label>Your repositories</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconBrandGithubCopilot /> <Menu.Label>Your Copilot</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconChartBar /> <Menu.Label>Your projects</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconStar /> <Menu.Label>Your stars</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconFileCode /> <Menu.Label>Your gists</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconBuilding /> <Menu.Label>Your organizations</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconGlobe /> <Menu.Label>Your enterprises</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconHeart />
                                    <Menu.Label>Your sponsors</Menu.Label>
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconFilter /> <Menu.Label>Feature preview</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconSettings />
                                    <Menu.Label>Settings</Menu.Label>
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconBookOpen /> <Menu.Label>GitHub Docs</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconUsers /> <Menu.Label>GitHub Support</Menu.Label>
                                </Menu.Item>
                                <Menu.Item>
                                    <IconMessage /> <Menu.Label>GitHub Community</Menu.Label>
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconLogOut /> <Menu.Label>Sign out</Menu.Label>
                                </Menu.Item>
                            </Menu.Section>
                        </MenuPrimitive>
                    </Sheet.Body>
                </Sheet.Content>
            </Sheet>
        </>
    )
}
