import * as React from 'react'
const SvgScissorsLineDashed = (props) => (
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
      d="M5.42 9.42 8 12m6-6-8.58 8.58m5.38.22L14 18m2-6h-2m8 0h-2M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgScissorsLineDashed
