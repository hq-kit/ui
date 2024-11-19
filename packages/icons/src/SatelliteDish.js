import * as React from 'react'
const SvgSatelliteDish = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 15 3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3m-7 7a7.31 7.31 0 0 0 10 10z" />
  </svg>
)
export default SvgSatelliteDish
