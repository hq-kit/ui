import * as React from 'react'
const SvgLampWallDown = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 13V8a2 2 0 0 0-2-2H8m3 7h6l3 7H8zM4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4z" />
  </svg>
)
export default SvgLampWallDown
