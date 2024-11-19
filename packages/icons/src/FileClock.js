import * as React from 'react'
const SvgFileClock = (props) => (
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
      d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m10-5v4a2 2 0 0 0 2 2h4M9.5 17.5 8 16.25V14m6 2a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
    />
  </svg>
)
export default SvgFileClock
