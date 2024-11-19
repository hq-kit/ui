import * as React from 'react'
const SvgLampWallUp = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 11v5a2 2 0 0 1-2 2H8m3-14h6l3 7H8zM4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4z" />
  </svg>
)
export default SvgLampWallUp
