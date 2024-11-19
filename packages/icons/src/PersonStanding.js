import * as React from 'react'
const SvgPersonStanding = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 20 3-6m0 0 3 6m-3-6v-4M6 8l6 2m0 0 6-2m-5-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
)
export default SvgPersonStanding
