import * as React from 'react'
const SvgCircleCheckBig = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.801 10a10 10 0 1 1-4.8-6.665M9 11l3 3L22 4" />
  </svg>
)
export default SvgCircleCheckBig
