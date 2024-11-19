import * as React from 'react'
const SvgBrandBing = (props) => (
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
    <path fill="currentColor" d="M5 3v16l4.006 2L19 15.82v-4.09l-8.863-2.78 1.734 3.89L14.628 14l-5.643 2.92V4.27z" />
  </svg>
)
export default SvgBrandBing
