import * as React from 'react'
const SvgArrowLeftFromLine = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 6-6 6m0 0 6 6m-6-6h14m4 7V5" />
  </svg>
)
export default SvgArrowLeftFromLine
