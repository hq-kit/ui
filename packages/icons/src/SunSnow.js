import * as React from 'react'
const SvgSunSnow = (props) => (
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
      d="M10 9a3 3 0 1 0 0 6m-8-3h1m11 9V3m-4 1V3m0 18v-1m-6.36-1.64.7-.7m0-11.32-.7-.7M14 12h8m-5-8-3 3m0 10 3 3m4-5-3-3 3-3"
    />
  </svg>
)
export default SvgSunSnow
