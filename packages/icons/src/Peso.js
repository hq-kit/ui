import * as React from 'react'
const SvgPeso = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 11H4m16-4H4m3 14V4a1 1 0 0 1 1-1h4a6 6 0 1 1 0 12H7" />
  </svg>
)
export default SvgPeso
