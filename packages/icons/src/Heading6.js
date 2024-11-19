import * as React from 'react'
const SvgHeading6 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h8m-8 6V6m8 12V6m5 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0c0-2.5 1-4 3-6" />
  </svg>
)
export default SvgHeading6
