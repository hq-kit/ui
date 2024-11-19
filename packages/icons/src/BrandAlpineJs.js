import * as React from 'react'
const SvgBrandAlpineJs = (props) => (
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
    <path fill="currentColor" d="m22 12-4.767 5-4.77-4.996 4.77-5.003zM6.767 7 2 12l4.767 5H16.3z" />
  </svg>
)
export default SvgBrandAlpineJs
