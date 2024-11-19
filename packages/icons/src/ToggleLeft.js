import * as React from 'react'
const SvgToggleLeft = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6H8a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
)
export default SvgToggleLeft
