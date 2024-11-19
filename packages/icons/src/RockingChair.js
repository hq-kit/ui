import * as React from 'react'
const SvgRockingChair = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3.5 2 3 10.5H18m-8.5 0-4 7.5m9.5-7.5 3.5 7.5M2.75 18a13 13 0 0 0 18.5 0" />
  </svg>
)
export default SvgRockingChair
