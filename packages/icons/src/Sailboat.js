import * as React from 'react'
const SvgSailboat = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 2 11 12H3zm0 0v16m12 0H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4" />
  </svg>
)
export default SvgSailboat
