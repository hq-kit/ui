import * as React from 'react'
const SvgTestTubeDiagonal = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7 6.82 21.18a2.83 2.83 0 0 1-4.818-2.01c0-.75.298-1.47.828-2L17 3m-1-1 6 6m-10 8H4" />
  </svg>
)
export default SvgTestTubeDiagonal
