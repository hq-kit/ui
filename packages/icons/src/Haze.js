import * as React from 'react'
const SvgHaze = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5.2 6.2 1.4 1.4M2 13h2m16 0h2m-4.6-5.4 1.4-1.4M22 17H2m20 4H2m14-8a4 4 0 1 0-8 0m4-8V2.5" />
  </svg>
)
export default SvgHaze
