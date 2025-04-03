'use client'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuSubDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='w-md h-32 rounded-lg border border-dashed flex items-center justify-center'>
                Right click me
            </ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item>
                    <ContextMenu.Label>View</ContextMenu.Label>
                </ContextMenu.Item>
                <ContextMenu.Submenu>
                    <ContextMenu.Item>
                        <ContextMenu.Label>Options</ContextMenu.Label>
                    </ContextMenu.Item>
                    <ContextMenu.Content>
                        <ContextMenu.Item>
                            <ContextMenu.Label>Edit</ContextMenu.Label>
                        </ContextMenu.Item>
                        <ContextMenu.Submenu>
                            <ContextMenu.Item isDanger>
                                <ContextMenu.Label>Delete</ContextMenu.Label>
                            </ContextMenu.Item>
                            <ContextMenu.Content>
                                <ContextMenu.Item>
                                    <ContextMenu.Label>For Everyone</ContextMenu.Label>
                                </ContextMenu.Item>
                                <ContextMenu.Submenu>
                                    <ContextMenu.Item>
                                        <ContextMenu.Label>For Me</ContextMenu.Label>
                                    </ContextMenu.Item>
                                    <ContextMenu.Content>
                                        <ContextMenu.Item>
                                            <ContextMenu.Label>Permanently</ContextMenu.Label>
                                        </ContextMenu.Item>
                                        <ContextMenu.Item>
                                            <ContextMenu.Label>Temporary</ContextMenu.Label>
                                        </ContextMenu.Item>
                                    </ContextMenu.Content>
                                </ContextMenu.Submenu>
                            </ContextMenu.Content>
                        </ContextMenu.Submenu>
                    </ContextMenu.Content>
                </ContextMenu.Submenu>
                <ContextMenu.Item>
                    <ContextMenu.Label>Help</ContextMenu.Label>
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
