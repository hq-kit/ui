import * as React from 'react'
const SvgWarehouse = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V8l9-4 9 4v13m-8-8h4v8H7v-6h6m0 6v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
  </svg>
)
export default SvgWarehouse
