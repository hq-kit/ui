type Docs = {
    title: string
    url?: string
    order: number
    status?: string
    items?: Docs[]
}

export const docs: Docs[] = [
  {
    "title": "getting-started",
    "order": 0,
    "items": [
      {
        "title": "Client Side Routing",
        "url": "/docs/getting-started/client-side-routing",
        "order": 3
      },
      {
        "title": "Installation",
        "url": "/docs/getting-started/installation",
        "order": 2
      },
      {
        "title": "Introduction",
        "url": "/docs/getting-started/introduction",
        "order": 1
      }
    ]
  },
  {
    "title": "dark-mode",
    "order": 1,
    "items": [
      {
        "title": "Astro",
        "url": "/docs/dark-mode/astro",
        "order": 4
      },
      {
        "title": "Inertia.js",
        "url": "/docs/dark-mode/inertia-js",
        "order": 3
      },
      {
        "title": "Next.js",
        "url": "/docs/dark-mode/next-js",
        "order": 1
      },
      {
        "title": "Remix",
        "url": "/docs/dark-mode/remix",
        "order": 5
      },
      {
        "title": "Vite",
        "url": "/docs/dark-mode/vite",
        "order": 2
      }
    ]
  },
  {
    "title": "components",
    "order": 2,
    "items": [
      {
        "title": "buttons",
        "order": 1,
        "items": [
          {
            "title": "Button",
            "url": "/docs/components/buttons/button",
            "order": 1
          },
          {
            "title": "File Trigger",
            "url": "/docs/components/buttons/file-trigger",
            "order": 2
          },
          {
            "title": "Toggle",
            "url": "/docs/components/buttons/toggle",
            "order": 3
          }
        ]
      },
      {
        "title": "collections",
        "order": 5,
        "items": [
          {
            "title": "Accordion",
            "url": "/docs/components/collections/accordion",
            "order": 5
          },
          {
            "title": "Collapsible",
            "url": "/docs/components/collections/collapsible",
            "order": 6
          },
          {
            "title": "Grid List",
            "url": "/docs/components/collections/grid-list",
            "order": 3
          },
          {
            "title": "List Box",
            "url": "/docs/components/collections/list-box",
            "order": 3
          },
          {
            "title": "Menu",
            "url": "/docs/components/collections/menu",
            "order": 1
          },
          {
            "title": "Table",
            "url": "/docs/components/collections/table",
            "order": 4
          },
          {
            "title": "Tag Group",
            "url": "/docs/components/collections/tag-group",
            "order": 7
          },
          {
            "title": "Tree",
            "url": "/docs/components/collections/tree",
            "order": 8
          }
        ]
      },
      {
        "title": "charts",
        "order": 1,
        "items": [
          {
            "title": "Area Chart",
            "url": "/docs/components/charts/area-chart",
            "order": 1
          },
          {
            "title": "Bar Chart",
            "url": "/docs/components/charts/bar-chart",
            "order": 3
          },
          {
            "title": "Line Chart",
            "url": "/docs/components/charts/line-chart",
            "order": 2
          },
          {
            "title": "Pie Chart",
            "url": "/docs/components/charts/pie-chart",
            "order": 4
          },
          {
            "title": "Radar Chart",
            "url": "/docs/components/charts/radar-chart",
            "order": 5
          },
          {
            "title": "Radial Chart",
            "url": "/docs/components/charts/radial-chart",
            "order": 6
          },
          {
            "title": "Scatter Chart",
            "url": "/docs/components/charts/scatter-chart",
            "order": 7
          },
          {
            "title": "Chart Tooltip",
            "url": "/docs/components/charts/tooltip",
            "order": 8
          }
        ]
      },
      {
        "title": "colors",
        "order": 1,
        "items": [
          {
            "title": "Color Area",
            "url": "/docs/components/colors/color-area",
            "order": 1
          },
          {
            "title": "Color Field",
            "url": "/docs/components/colors/color-field",
            "order": 2
          },
          {
            "title": "Color Picker",
            "url": "/docs/components/colors/color-picker",
            "order": 3
          },
          {
            "title": "Color Slider",
            "url": "/docs/components/colors/color-slider",
            "order": 4
          },
          {
            "title": "Color Swatch Picker",
            "url": "/docs/components/colors/color-swatch-picker",
            "order": 6
          },
          {
            "title": "Color Swatch",
            "url": "/docs/components/colors/color-swatch",
            "order": 5
          },
          {
            "title": "Color Wheel",
            "url": "/docs/components/colors/color-wheel",
            "order": 7
          }
        ]
      },
      {
        "title": "controls",
        "order": 1,
        "items": [
          {
            "title": "Command",
            "url": "/docs/components/controls/command",
            "order": 1
          },
          {
            "title": "Context Menu",
            "url": "/docs/components/controls/context-menu",
            "order": 2
          },
          {
            "title": "Keyboard",
            "url": "/docs/components/controls/keyboard",
            "order": 6
          },
          {
            "title": "Slider",
            "url": "/docs/components/controls/slider",
            "order": 3
          },
          {
            "title": "Switch",
            "url": "/docs/components/controls/switch",
            "order": 4
          },
          {
            "title": "Toolbar",
            "url": "/docs/components/controls/toolbar",
            "order": 5
          }
        ]
      },
      {
        "title": "date-and-time",
        "order": 1,
        "items": [
          {
            "title": "Calendar",
            "url": "/docs/components/date-and-time/calendar",
            "order": 1
          },
          {
            "title": "Date Field",
            "url": "/docs/components/date-and-time/date-field",
            "order": 3
          },
          {
            "title": "Date Picker",
            "url": "/docs/components/date-and-time/date-picker",
            "order": 4
          },
          {
            "title": "Date Range Picker",
            "url": "/docs/components/date-and-time/date-range-picker",
            "order": 5
          },
          {
            "title": "Range Calendar",
            "url": "/docs/components/date-and-time/range-calendar",
            "order": 3
          },
          {
            "title": "Time Field",
            "url": "/docs/components/date-and-time/time-field",
            "order": 6
          }
        ]
      },
      {
        "title": "drag-and-drop",
        "order": 1,
        "items": [
          {
            "title": "Drop Zone",
            "url": "/docs/components/drag-and-drop/drop-zone",
            "order": 1
          }
        ]
      },
      {
        "title": "forms",
        "order": 6,
        "items": [
          {
            "title": "Checkbox Group",
            "url": "/docs/components/forms/checkbox-group",
            "order": 6
          },
          {
            "title": "Checkbox",
            "url": "/docs/components/forms/checkbox",
            "order": 7
          },
          {
            "title": "Form",
            "url": "/docs/components/forms/form",
            "order": 1
          },
          {
            "title": "Number Field",
            "url": "/docs/components/forms/number-field",
            "order": 3
          },
          {
            "title": "O T P",
            "url": "/docs/components/forms/otp",
            "order": 9
          },
          {
            "title": "Radio Group",
            "url": "/docs/components/forms/radio-group",
            "order": 8
          },
          {
            "title": "Rich Text Field",
            "url": "/docs/components/forms/rich-text-field",
            "order": 11,
            "status": "alpha"
          },
          {
            "title": "Search Field",
            "url": "/docs/components/forms/search-field",
            "order": 4
          },
          {
            "title": "Selection Box",
            "url": "/docs/components/forms/selection-box",
            "order": 10,
            "status": "alpha"
          },
          {
            "title": "Text Field",
            "url": "/docs/components/forms/text-field",
            "order": 2
          },
          {
            "title": "Textarea",
            "url": "/docs/components/forms/textarea",
            "order": 5
          }
        ]
      },
      {
        "title": "media",
        "order": 2,
        "items": [
          {
            "title": "Avatar",
            "url": "/docs/components/media/avatar",
            "order": 2
          },
          {
            "title": "Carousel",
            "url": "/docs/components/media/carousel",
            "order": 1
          },
          {
            "title": "User",
            "url": "/docs/components/media/user",
            "order": 3
          }
        ]
      },
      {
        "title": "overlays",
        "order": 1,
        "items": [
          {
            "title": "Modal",
            "url": "/docs/components/overlays/modal",
            "order": 1
          },
          {
            "title": "Popover",
            "url": "/docs/components/overlays/popover",
            "order": 2
          },
          {
            "title": "Sheet",
            "url": "/docs/components/overlays/sheet",
            "order": 3
          },
          {
            "title": "Tooltip",
            "url": "/docs/components/overlays/tooltip",
            "order": 4
          }
        ]
      },
      {
        "title": "layouts",
        "order": 1,
        "items": [
          {
            "title": "Navbar",
            "url": "/docs/components/layouts/navbar",
            "order": 1
          },
          {
            "title": "Sidebar",
            "url": "/docs/components/layouts/sidebar",
            "order": 2
          }
        ]
      },
      {
        "title": "pickers",
        "order": 2,
        "items": [
          {
            "title": "Combo Box",
            "url": "/docs/components/pickers/combo-box",
            "order": 2
          },
          {
            "title": "Multi Select",
            "url": "/docs/components/pickers/multi-select",
            "order": 3,
            "status": "beta"
          },
          {
            "title": "Select",
            "url": "/docs/components/pickers/select",
            "order": 1
          }
        ]
      },
      {
        "title": "statuses",
        "order": 1,
        "items": [
          {
            "title": "Badge",
            "url": "/docs/components/statuses/badge",
            "order": 1
          },
          {
            "title": "Indicator",
            "url": "/docs/components/statuses/indicator",
            "order": 7
          },
          {
            "title": "Meter",
            "url": "/docs/components/statuses/meter",
            "order": 3
          },
          {
            "title": "Note / Alert",
            "url": "/docs/components/statuses/note",
            "order": 4
          },
          {
            "title": "Progress",
            "url": "/docs/components/statuses/progress",
            "order": 2
          },
          {
            "title": "Skeleton",
            "url": "/docs/components/statuses/skeleton",
            "order": 5
          },
          {
            "title": "Toast",
            "url": "/docs/components/statuses/toast",
            "order": 6,
            "status": "alpha"
          }
        ]
      },
      {
        "title": "navigation",
        "order": 2,
        "items": [
          {
            "title": "Breadcrumbs",
            "url": "/docs/components/navigation/breadcrumbs",
            "order": 2
          },
          {
            "title": "Link",
            "url": "/docs/components/navigation/link",
            "order": 1
          },
          {
            "title": "Pagination",
            "url": "/docs/components/navigation/pagination",
            "order": 4
          },
          {
            "title": "Tabs",
            "url": "/docs/components/navigation/tabs",
            "order": 3
          }
        ]
      },
      {
        "title": "surfaces",
        "order": 1,
        "items": [
          {
            "title": "Card",
            "url": "/docs/components/surfaces/card",
            "order": 1
          },
          {
            "title": "Description List",
            "url": "/docs/components/surfaces/description-list",
            "order": 2
          },
          {
            "title": "Separator",
            "url": "/docs/components/surfaces/separator",
            "order": 3
          },
          {
            "title": "Spoiler",
            "url": "/docs/components/surfaces/spoiler",
            "order": 4
          }
        ]
      }
    ]
  }
]