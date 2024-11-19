import * as React from 'react'
const SvgSignalLte = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8h-4v8h4m-4-4h2.5M4 8v8h4m2-8h4m-2 0v8" />
  </svg>
)
export default SvgSignalLte
