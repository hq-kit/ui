import * as React from 'react'
const SvgRepeat = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 2 4 4m0 0-4 4m4-4H7a4 4 0 0 0-4 4v1m4 11-4-4m0 0 4-4m-4 4h14a4 4 0 0 0 4-4v-1" />
  </svg>
)
export default SvgRepeat
