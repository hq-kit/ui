import * as React from 'react'
const SvgBrandKotlin = (props) => (
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
    <path fill="currentColor" d="M21 21H3V3h18l-9 9z" />
  </svg>
)
export default SvgBrandKotlin
