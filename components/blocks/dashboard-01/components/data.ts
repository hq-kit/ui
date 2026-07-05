import {
  type Icon,
  IconBook2,
  IconCamera,
  IconCommand,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconReport,
  IconRobot,
  IconSearch,
  IconSettings,
  IconStack2,
  IconTerminal,
  IconWaveSine
} from "@tabler/icons-react"

export type NavItem = {
  title: string
  url?: string
  icon?: Icon
  isActive?: boolean
  items?: NavItem[]
}

export type User = {
  name: string
  email: string
  avatar?: string
}

export type Team = {
  name: string
  logo?: Icon
  plan?: string
}

export const user: User = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "https://github.com/dq-alhq.png"
}

export const teams: Team[] = [
  {
    name: "Acme Inc",
    logo: IconStack2,
    plan: "Enterprise"
  },
  {
    name: "Acme Corp.",
    logo: IconWaveSine,
    plan: "Startup"
  },
  {
    name: "Evil Corp.",
    logo: IconCommand,
    plan: "Free"
  }
]

export const navItems: Record<string, NavItem[]> = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard
    },
    {
      title: "Playground",
      url: "#",
      icon: IconTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Models",
      url: "#",
      icon: IconRobot,
      items: [
        {
          title: "Genesis",
          url: "#"
        },
        {
          title: "Explorer",
          url: "#"
        },
        {
          title: "Quantum",
          url: "#"
        }
      ]
    },
    {
      title: "Documentation",
      url: "#",
      icon: IconBook2,
      items: [
        {
          title: "Introduction",
          url: "#"
        },
        {
          title: "Get Started",
          url: "#"
        },
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Changelog",
          url: "#"
        }
      ]
    }
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch
    }
  ],
  documents: [
    {
      title: "Data Library",
      url: "#",
      icon: IconDatabase
    },
    {
      title: "Reports",
      url: "#",
      icon: IconReport
    },
    {
      title: "Word Assistant",
      url: "#",
      icon: IconFileWord
    }
  ]
}
