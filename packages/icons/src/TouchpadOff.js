import * as React from 'react'
const SvgTouchpadOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16M2 14h12m8 0h-2m-8 6v-6M2 2l20 20m0-6V6a2 2 0 0 0-2-2H10" />
  </svg>
)
export default SvgTouchpadOff
