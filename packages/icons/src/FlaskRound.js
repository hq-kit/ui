import * as React from 'react'
const SvgFlaskRound = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 2v7.31m4-7.32V9.3a6.5 6.5 0 1 1-4 0M8.5 2h7M5.52 16h12.96" />
  </svg>
)
export default SvgFlaskRound
