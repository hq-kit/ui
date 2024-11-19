import * as React from 'react'
const SvgDessert = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 1 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 1 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8M3.2 14.8a9 9 0 0 0 17.6 0M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgDessert
