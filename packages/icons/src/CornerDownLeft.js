import * as React from 'react'
const SvgCornerDownLeft = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 10-5 5m0 0 5 5m-5-5h12a4 4 0 0 0 4-4V4" />
  </svg>
)
export default SvgCornerDownLeft
