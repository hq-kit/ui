import * as React from 'react'
const SvgUserCheck = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.292 15A8 8 0 0 0 2 21h12m2-2 2 2 4-4m-7-9A5 5 0 1 1 5 8a5 5 0 0 1 10 0" />
  </svg>
)
export default SvgUserCheck
