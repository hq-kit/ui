import * as React from 'react'
const SvgParagraphLtr = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 3v11m0-5H7a3 3 0 1 1 0-6h8m-1 0v11m4 0 4 4m0 0H2m20 0-4 4" />
  </svg>
)
export default SvgParagraphLtr
