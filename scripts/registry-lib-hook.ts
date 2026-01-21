import type { RegistryItem } from 'shadcn/schema'

export const libHook: RegistryItem[] = [
  {
    name: 'utils',
    type: 'registry:lib',
    dependencies: ['clsx', 'tailwind-merge'],
    files: [
      {
        path: 'lib/utils.ts',
        type: 'registry:lib'
      }
    ]
  },
  {
    name: 'use-mobile',
    type: 'registry:hook',
    files: [
      {
        path: 'hooks/use-mobile.ts',
        type: 'registry:hook'
      }
    ]
  }
]
