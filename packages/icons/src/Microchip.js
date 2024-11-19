import * as React from 'react'
const SvgMicrochip = (props) => (
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
      d="M18 12h2m-2 4h2m-2 4h2m-2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m12 0V4m0 0h2m-2 0a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2H8a2 2 0 0 0-2 2m12 4h2M4 12h2m-2 4h2m-2 4h2m0 0V4M4 4h2M4 8h2"
    />
  </svg>
)
export default SvgMicrochip
