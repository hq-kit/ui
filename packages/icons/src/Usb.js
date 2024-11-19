import * as React from 'react'
const SvgUsb = (props) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.7 19.3 19 5M9.26 7.68 5 12l2 5m3-3 5 2 3.5-3.5M11 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M21 3l-3 1 2 2zm-3 9 1-1 1 1-1 1z"
    />
  </svg>
)
export default SvgUsb
