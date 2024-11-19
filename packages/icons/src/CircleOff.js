import * as React from 'react'
const SvgCircleOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m2 2 20 20M8.35 2.69A10 10 0 0 1 21.3 15.65m-2.22 3.43A10.013 10.013 0 0 1 4.92 4.92" />
  </svg>
)
export default SvgCircleOff
