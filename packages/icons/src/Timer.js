import * as React from 'react'
const SvgTimer = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 2h4m-2 12 3-3m5 3a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
  </svg>
)
export default SvgTimer
