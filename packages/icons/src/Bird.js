import * as React from 'react'
const SvgBird = (props) => (
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
      d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7m0 0a4 4 0 0 0-7.28-2.3L2 20M20 7l2 .5-2 .5M10 18v3m4-3.25V21m-7-3a6 6 0 0 0 3.84-10.61"
    />
  </svg>
)
export default SvgBird
