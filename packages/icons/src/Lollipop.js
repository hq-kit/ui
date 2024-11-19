import * as React from 'react'
const SvgLollipop = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0m0 0a6 6 0 1 1-12 0 4 4 0 0 1 8 0 2 2 0 0 1-4 0m10 10-4.3-4.3" />
  </svg>
)
export default SvgLollipop
