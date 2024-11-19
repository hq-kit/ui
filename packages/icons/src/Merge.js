import * as React from 'react'
const SvgMerge = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 6 4-4m0 0 4 4m-4-4v10.3a4 4 0 0 1-1.172 2.872L4 22m16 0-5-5" />
  </svg>
)
export default SvgMerge
