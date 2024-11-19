import * as React from 'react'
const SvgBrandAdobe = (props) => (
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
    <path fill="currentColor" d="M14.4 3H21v17.999zM9.66 3H3v18zM12 9.646l4.26 11.353H13.5l-1.26-3.6H9.12z" />
  </svg>
)
export default SvgBrandAdobe
