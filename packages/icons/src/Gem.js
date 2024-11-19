import * as React from 'react'
const SvgGem = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 9-4-6H6L2 9m20 0L12 22M22 9H2m10 13L2 9m10 13L8 9l3-6m1 19 4-13-3-6" />
  </svg>
)
export default SvgGem
