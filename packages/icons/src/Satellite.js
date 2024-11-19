import * as React from 'react'
const SvgSatellite = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7 9 3 5 7l4 4m8 0 4 4-4 4-4-4m3-7 3-3M9 21a6 6 0 0 0-6-6m5-3 4 4 6-6-4-4z" />
  </svg>
)
export default SvgSatellite
