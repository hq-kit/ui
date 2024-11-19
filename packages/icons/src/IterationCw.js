import * as React from 'react'
const SvgIterationCw = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4m0 0 4 4m-4-4 4-4" />
  </svg>
)
export default SvgIterationCw
