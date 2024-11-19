import * as React from 'react'
const SvgGrave = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16v-5H6V7h4V3h4v4h4v4h-4v5m-9 5v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z" />
  </svg>
)
export default SvgGrave
