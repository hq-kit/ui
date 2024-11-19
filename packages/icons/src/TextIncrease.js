import * as React from 'react'
const SvgTextIncrease = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 13h6M2 16l4.5-9 4.5 9m7 0V7m0 0-4 4m4-4 4 4" />
  </svg>
)
export default SvgTextIncrease
