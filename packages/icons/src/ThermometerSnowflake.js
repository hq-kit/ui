import * as React from 'react'
const SvgThermometerSnowflake = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h10M9 4v16M3 9l3 3-3 3m9-9L9 9 6 6m0 12 3-3 1.5 1.5M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0" />
  </svg>
)
export default SvgThermometerSnowflake
