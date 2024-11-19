import * as React from 'react'
const SvgLetterText = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h6m-6-6h6M3 13l3.553-7.724a.5.5 0 0 1 .894 0L11 13m-8 5h18M4 11h6" />
  </svg>
)
export default SvgLetterText
