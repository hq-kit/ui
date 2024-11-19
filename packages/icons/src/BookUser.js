import * as React from 'react'
const SvgBookUser = (props) => (
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
      d="M15 13a3 3 0 0 0-3-3m0 0a3 3 0 0 0-3 3m3-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-8 9.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5m0 0A2.5 2.5 0 0 1 6.5 17H20"
    />
  </svg>
)
export default SvgBookUser
