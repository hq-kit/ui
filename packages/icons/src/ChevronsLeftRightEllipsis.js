import * as React from 'react'
const SvgChevronsLeftRightEllipsis = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 8 4 4-4 4M6 8l-4 4 4 4m2-4h.01M12 12h.01M16 12h.01" />
  </svg>
)
export default SvgChevronsLeftRightEllipsis
