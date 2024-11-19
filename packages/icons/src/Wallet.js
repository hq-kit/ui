import * as React from 'react'
const SvgWallet = (props) => (
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
      d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h15a1 1 0 0 1 1 1v4M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4m0-4h-3a2 2 0 0 0 0 4h3m0-4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1"
    />
  </svg>
)
export default SvgWallet
