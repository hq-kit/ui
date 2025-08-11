export const listBlocks = [
    {
        section: 'ecommerce',
        category: 'tables',
        blocks: [
            {
                slug: 'ecommerce/tables/product',
                uiComponents: [
                    'card.tsx',
                    'container.tsx',
                    'menu.tsx',
                    'search-field.tsx',
                    'select.tsx',
                    'table.tsx',
                    'toolbar.tsx',
                    'pagination.tsx'
                ],
                components: ['paginator.tsx']
            }
        ]
    },
    {
        section: 'application',
        category: 'authentication',
        blocks: [
            {
                slug: 'application/authentication/split-card',
                uiComponents: [
                    'button.tsx',
                    'card.tsx',
                    'checkbox.tsx',
                    'form.tsx',
                    'header.tsx',
                    'link.tsx',
                    'separator.tsx',
                    'skeleton.tsx',
                    'text-field.tsx',
                    'toast.tsx'
                ],
                components: []
            },
            {
                slug: 'application/authentication/card',
                uiComponents: [
                    'button.tsx',
                    'card.tsx',
                    'checkbox.tsx',
                    'form.tsx',
                    'separator.tsx',
                    'text-field.tsx',
                    'toast.tsx'
                ],
                components: []
            },
            {
                slug: 'application/authentication/overlay',
                uiComponents: [
                    'button.tsx',
                    'card.tsx',
                    'checkbox.tsx',
                    'form.tsx',
                    'header.tsx',
                    'link.tsx',
                    'modal.tsx',
                    'separator.tsx',
                    'skeleton.tsx',
                    'text-field.tsx',
                    'toast.tsx'
                ],
                components: []
            },
            {
                slug: 'application/authentication/split',
                uiComponents: [
                    'button.tsx',
                    'checkbox.tsx',
                    'form.tsx',
                    'header.tsx',
                    'link.tsx',
                    'separator.tsx',
                    'skeleton.tsx',
                    'text-field.tsx',
                    'toast.tsx'
                ],
                components: []
            }
        ]
    },
    {
        section: 'application',
        category: 'social',
        blocks: [
            {
                slug: 'application/social/chat',
                uiComponents: [
                    'avatar.tsx',
                    'button.tsx',
                    'menu.tsx',
                    'popover.tsx',
                    'sidebar.tsx',
                    'user.tsx',
                    'form.tsx',
                    'textarea.tsx'
                ],
                components: ['chat-sidebar.tsx', 'contact-list.tsx', 'message-form.tsx', 'bubble-chat.tsx']
            },
            {
                slug: 'application/social/user-profile',
                uiComponents: ['avatar.tsx', 'card.tsx', 'container.tsx', 'tabs.tsx'],
                components: ['about.tsx', 'media.tsx', 'posts.tsx']
            }
        ]
    },
    {
        section: 'application',
        category: 'sidebar',
        blocks: [
            {
                slug: 'application/sidebar/basic',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            },
            {
                slug: 'application/sidebar/dock',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            },
            {
                slug: 'application/sidebar/fixed',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            },
            {
                slug: 'application/sidebar/float',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            },
            {
                slug: 'application/sidebar/dock-inset',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            },
            {
                slug: 'application/sidebar/inset',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            },
            {
                slug: 'application/sidebar/dock-float',
                uiComponents: ['link.tsx', 'skeleton.tsx', 'menu.tsx', 'sidebar.tsx', 'user.tsx'],
                components: ['app-sidebar-nav.tsx', 'app-sidebar.tsx']
            }
        ]
    },
    {
        section: 'application',
        category: 'navbar',
        blocks: [
            {
                slug: 'application/navbar/basic',
                uiComponents: [
                    'skeleton.tsx',
                    'avatar.tsx',
                    'breadcrumbs.tsx',
                    'button.tsx',
                    'menu.tsx',
                    'navbar.tsx',
                    'separator.tsx'
                ],
                components: []
            },
            {
                slug: 'application/navbar/float',
                uiComponents: [
                    'skeleton.tsx',
                    'avatar.tsx',
                    'breadcrumbs.tsx',
                    'button.tsx',
                    'menu.tsx',
                    'navbar.tsx',
                    'separator.tsx'
                ],
                components: []
            },
            {
                slug: 'application/navbar/inset',
                uiComponents: [
                    'skeleton.tsx',
                    'avatar.tsx',
                    'breadcrumbs.tsx',
                    'button.tsx',
                    'menu.tsx',
                    'navbar.tsx',
                    'separator.tsx'
                ],
                components: []
            }
        ]
    },
    {
        section: 'application',
        category: 'dashboard',
        blocks: [
            {
                slug: 'application/dashboard/simple',
                uiComponents: [
                    'avatar.tsx',
                    'breadcrumbs.tsx',
                    'link.tsx',
                    'menu.tsx',
                    'card.tsx',
                    'table.tsx',
                    'badge.tsx',
                    'sidebar.tsx',
                    'user.tsx',
                    'toggle.tsx'
                ],
                components: [
                    'app-sidebar-nav.tsx',
                    'data-table.tsx',
                    'stats.tsx',
                    'data.json',
                    'app-sidebar.tsx',
                    'chart-area.tsx'
                ]
            },
            {
                slug: 'application/dashboard/user-setting',
                uiComponents: [
                    'card.tsx',
                    'container.tsx',
                    'tabs.tsx',
                    'button.tsx',
                    'form.tsx',
                    'modal.tsx',
                    'note.tsx',
                    'text-field.tsx',
                    'date-picker.tsx',
                    'grid-list.tsx',
                    'switch.tsx',
                    'avatar.tsx',
                    'drop-zone.tsx',
                    'file-trigger.tsx',
                    'textarea.tsx'
                ],
                components: [
                    'danger-area.tsx',
                    'plan-billing-setting.tsx',
                    'security-setting.tsx',
                    'account-setting.tsx'
                ]
            }
        ]
    }
]
