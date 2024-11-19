import * as React from 'react'
const SvgBlinds = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18m-1 4H8m12 4H8m2 8h10M8 15h12M4 3v14m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
  </svg>
)
export default SvgBlinds
