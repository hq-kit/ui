import * as React from 'react'
const SvgDrill = (props) => (
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
      d="M18 6h4m-8-2h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3m-9 2-2 8m0 0c-.6 0-1 .4-1 1 0 1.7 1.3 3 3 3h5c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm9-8v3c0 .6-.4 1-1 1H8m-1 4 2-8m5-1c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1z"
    />
  </svg>
)
export default SvgDrill
