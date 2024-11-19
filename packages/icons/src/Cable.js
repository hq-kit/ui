import * as React from 'react'
const SvgCable = (props) => (
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
      d="M17 21v-2m0 0a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1m-4 0h4m0 0v2m-2-6V6.5a3.5 3.5 0 1 0-7 0v11a3.5 3.5 0 1 1-7 0V9M3 5h4M3 5a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1M3 5V3m4 2V3"
    />
  </svg>
)
export default SvgCable
