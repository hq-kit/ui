import * as React from 'react'
const SvgUndo2 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14 4 9m0 0 5-5M4 9h10.5a5.5 5.5 0 1 1 0 11H11" />
  </svg>
)
export default SvgUndo2
