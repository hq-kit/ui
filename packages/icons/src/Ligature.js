import * as React from 'react'
const SvgLigature = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2M6 12h4m4 0h2v8M6 20h4m4 0h4" />
  </svg>
)
export default SvgLigature
