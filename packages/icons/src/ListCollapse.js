import * as React from 'react'
const SvgListCollapse = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 10 2.5-2.5L3 5m0 14 2.5-2.5L3 14m7-8h11m-11 6h11m-11 6h11" />
  </svg>
)
export default SvgListCollapse
