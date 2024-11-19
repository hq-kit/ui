import * as React from 'react'
const SvgSearchCheck = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 11 2 2 4-4m7 12-4.3-4.3M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
  </svg>
)
export default SvgSearchCheck
