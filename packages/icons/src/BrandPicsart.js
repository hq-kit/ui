import * as React from 'react'
const SvgBrandPicsart = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9a7 7 0 1 0 14 0A7 7 0 0 0 5 9m0 0v11a2 2 0 0 0 4 0v-4.5M9 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
  </svg>
)
export default SvgBrandPicsart
