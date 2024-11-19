import * as React from 'react'
const SvgUndoDot = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v6m0 0h6m-6 0 3-2.7A9 9 0 0 1 12 8a9 9 0 0 1 9 9m-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
)
export default SvgUndoDot
