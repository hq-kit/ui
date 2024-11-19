import * as React from 'react'
const SvgArrowLeftRight = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3 4 7m0 0 4 4M4 7h16m-4 14 4-4m0 0-4-4m4 4H4" />
  </svg>
)
export default SvgArrowLeftRight
