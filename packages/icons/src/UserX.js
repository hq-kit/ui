import * as React from 'react'
const SvgUserX = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.873 14A8 8 0 0 0 2 21h11.873M17 17l5 5m0-5-5 5M15 8A5 5 0 1 1 5 8a5 5 0 0 1 10 0" />
  </svg>
)
export default SvgUserX
