import * as React from 'react'
const SvgMoonStar = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 3v4m2-2h-4m-6-2a6.364 6.364 0 1 0 9 9 9 9 0 1 1-9-9" />
  </svg>
)
export default SvgMoonStar
