import * as React from 'react'
const SvgParagraph = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4v16m4-16v16m2-16H9.5a4.5 4.5 0 0 0 0 9H13" />
  </svg>
)
export default SvgParagraph
