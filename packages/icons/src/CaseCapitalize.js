import * as React from 'react'
const SvgCaseCapitalize = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 15 4-8 4 8m-7-2h6m11-4v6m0-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
)
export default SvgCaseCapitalize
