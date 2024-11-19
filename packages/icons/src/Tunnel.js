import * as React from 'react'
const SvgTunnel = (props) => (
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
      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7m18 0a9 9 0 0 0-9-9m9 9h-4m-5-9a9 9 0 0 0-9 9m9-9v5m-9 4h4m1 9v-9a4 4 0 0 1 4-4m0 0a4 4 0 0 1 4 4v9M3 17h4m10 0h4M6 6l3 3m6 0 3-3"
    />
  </svg>
)
export default SvgTunnel
