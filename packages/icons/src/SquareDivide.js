import * as React from 'react'
const SvgSquareDivide = (props) => (
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
    <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
)
export default SvgSquareDivide
