import * as React from 'react'
const SvgPillBottle = (props) => (
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
      d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M5 2h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
    />
  </svg>
)
export default SvgPillBottle
