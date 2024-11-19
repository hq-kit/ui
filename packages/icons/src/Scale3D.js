import * as React from 'react'
const SvgScale3D = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0H5M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v12m0 0 6-6" />
  </svg>
)
export default SvgScale3D
