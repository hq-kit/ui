import * as React from 'react'
const SvgListTree = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12h-8m8-6H8m13 12h-8M3 6v4m0 0c0 1.1.9 2 2 2h3m-5-2v6c0 1.1.9 2 2 2h3" />
  </svg>
)
export default SvgListTree
