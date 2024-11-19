import * as React from 'react'
const SvgUsers = (props) => (
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
      d="M10 13a8 8 0 0 1 8 8H2a8 8 0 0 1 8-8m0 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10m12 7c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
    />
  </svg>
)
export default SvgUsers
