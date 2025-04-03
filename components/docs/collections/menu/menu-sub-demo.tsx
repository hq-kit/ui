'use client'

import { Menu } from '@/components/ui'

export default function MenuSubDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content>
                <Menu.Item>
                    <Menu.Label>View</Menu.Label>
                </Menu.Item>
                <Menu.Submenu>
                    <Menu.Item>
                        <Menu.Label>Options</Menu.Label>
                    </Menu.Item>
                    <Menu.Content>
                        <Menu.Item>
                            <Menu.Label>Edit</Menu.Label>
                        </Menu.Item>
                        <Menu.Submenu>
                            <Menu.Item isDanger>
                                <Menu.Label>Delete</Menu.Label>
                            </Menu.Item>
                            <Menu.Content>
                                <Menu.Item>
                                    <Menu.Label>For Everyone</Menu.Label>
                                </Menu.Item>
                                <Menu.Submenu>
                                    <Menu.Item>
                                        <Menu.Label>For Me</Menu.Label>
                                    </Menu.Item>
                                    <Menu.Content>
                                        <Menu.Item>
                                            <Menu.Label>Permanently</Menu.Label>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Menu.Label>Temporary</Menu.Label>
                                        </Menu.Item>
                                    </Menu.Content>
                                </Menu.Submenu>
                            </Menu.Content>
                        </Menu.Submenu>
                    </Menu.Content>
                </Menu.Submenu>
                <Menu.Item>
                    <Menu.Label>Help</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
