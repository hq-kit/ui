import * as React from 'react'
const SvgBlend = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
  </svg>
)
export default SvgBlend
