import * as React from 'react'
const SvgBrandInertia = (props) => (
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
    <path fill="currentColor" d="M8.176 6H3l5.001 6L3 18h5.175l5.001-6z" />
    <path fill="currentColor" d="M15.999 6H10.82l5.004 6-5.002 6H16l5-6z" />
  </svg>
)
export default SvgBrandInertia
