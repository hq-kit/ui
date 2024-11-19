import * as React from 'react'
const SvgNavigationOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20" />
  </svg>
)
export default SvgNavigationOff
