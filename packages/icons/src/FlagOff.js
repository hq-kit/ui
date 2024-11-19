import * as React from 'react'
const SvgFlagOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2c3 0 5 2 8 2s4-1 4-1v11M4 22V4m0 11s1-1 4-1 5 2 8 2M2 2l20 20" />
  </svg>
)
export default SvgFlagOff
