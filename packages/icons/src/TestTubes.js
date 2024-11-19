import * as React from 'react'
const SvgTestTubes = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v17.5a2.5 2.5 0 0 1-5 0V2m16 0v17.5a2.5 2.5 0 0 1-5 0V2M3 2h7m4 0h7M9 16H4m16 0h-5" />
  </svg>
)
export default SvgTestTubes
