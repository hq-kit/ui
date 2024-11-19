import * as React from 'react'
const SvgMapPinOff = (props) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.75 7.09a3 3 0 0 1 2.16 2.16m2.162 7.822c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 9.999a8 8 0 0 1 1.432-4.567M2 2l20 20M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533M9.13 9.13a3 3 0 0 0 3.74 3.74"
    />
  </svg>
)
export default SvgMapPinOff
