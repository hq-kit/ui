import * as React from 'react'
const SvgHeading2 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
  </svg>
)
export default SvgHeading2
