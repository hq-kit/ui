import * as React from 'react'
const SvgCurrency = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 3 3 3m15-3-3 3M3 21l3-3m15 3-3-3m2-6a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
  </svg>
)
export default SvgCurrency
