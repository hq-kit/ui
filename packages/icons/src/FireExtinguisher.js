import * as React from 'react'
const SvgFireExtinguisher = (props) => (
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
      d="M15 6.5V3m0 0a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m4 0h3m-7 0v3.5M11 3a6 6 0 0 0-6 6v11m4-2h8M5 13h4m8-3a4 4 0 1 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z"
    />
  </svg>
)
export default SvgFireExtinguisher
