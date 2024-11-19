import * as React from 'react'
const SvgMove3D = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v16M5 3 2 6m3-3 3 3M5 19h16M5 19l6-6m10 6-3-3m3 3-3 3" />
  </svg>
)
export default SvgMove3D
