import * as React from 'react'
const SvgBrandYahoo = (props) => (
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
      d="M3 6h5.294M7.235 17.99h7.412M4.588 6l5.824 6.994m0 0v4.996m0-4.996 6.353-4.996m-3.706 0h5.294M21 10.996v3.996m0 2.998V18"
    />
  </svg>
)
export default SvgBrandYahoo
