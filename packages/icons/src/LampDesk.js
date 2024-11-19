import * as React from 'react'
const SvgLampDesk = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14 5-3 3m3-3 7 2-8 8-2-7m3-3-3-3-3 3 3 3M9.5 6.5 4 12l3 6m-4 4v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2z" />
  </svg>
)
export default SvgLampDesk
