import * as React from 'react'
const SvgBell = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.3 21a1.941 1.941 0 0 0 3.4 0M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
  </svg>
)
export default SvgBell
