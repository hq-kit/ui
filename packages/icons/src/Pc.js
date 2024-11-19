import * as React from 'react'
const SvgPc = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 19h6m-3-3v3M6 13v.01M6 16v.01M3 5h6v14H3zm9 4h10v7H12z" />
  </svg>
)
export default SvgPc
