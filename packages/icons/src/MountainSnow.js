import * as React from 'react'
const SvgMountainSnow = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19M8 3l4 8 5-5 5 15H2z" />
  </svg>
)
export default SvgMountainSnow
