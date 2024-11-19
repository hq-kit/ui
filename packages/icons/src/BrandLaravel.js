import * as React from 'react'
const SvgBrandLaravel = (props) => (
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
      d="m11 22-8-5V5.5M11 22l7-4v-8m-7 12v-4m7-8-4-2.5m4 2.5 4-2.5m-8 0L18 5l4 2.5m-8 0v4m8-4v4L11 18m0 0-4-2.5m0 0V8m0 7.5 7-4M7 8 3 5.5M7 8l4-2.5m-8 0L7 3l4 2.5m3 6 4 2.5m-7-1V5.5"
    />
  </svg>
)
export default SvgBrandLaravel
