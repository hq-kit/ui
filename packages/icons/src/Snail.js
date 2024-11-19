import * as React from 'react'
const SvgSnail = (props) => (
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
      d="M2 13a6 6 0 0 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0m-8 0a8 8 0 1 0 16 0M2 13a8 8 0 1 1 16 0m0 0V7a2 2 0 1 1 4 0v6c0 4.4-3.6 8-8 8H2M18 3l1.1 2.2M22 3l-1.1 2.2"
    />
  </svg>
)
export default SvgSnail
