import * as React from 'react'
const SvgPoundSterling = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 7c0-5.333-8-5.333-8 0v14m-4 0h12M6 13h10" />
  </svg>
)
export default SvgPoundSterling
