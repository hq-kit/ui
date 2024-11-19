import * as React from 'react'
const SvgStrikethrough = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 1 1 0 8H6m-2-8h16" />
  </svg>
)
export default SvgStrikethrough
