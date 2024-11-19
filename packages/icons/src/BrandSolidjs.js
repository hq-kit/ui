import * as React from 'react'
const SvgBrandSolidjs = (props) => (
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
      d="M3 16.95Q9.3 21 12 21c2.25 0 3.6-1.35 3.6-3.15S14.25 14.7 12 14.7q-2.7 0-9 2.25m0 0 2.7-3.6q6.3-2.25 9-2.25c2.25 0 3.6 1.35 3.6 3.15 0 .664-.184 1.267-.53 1.764l-2.594 3.442M18.3 10.65l2.7-3.6C17.4 4.35 13.8 3 12 3c-1.836 0-2.356.417-3.077 1.39L6.265 7.73M18.3 10.65q-.805-.591-1.622-1.166C13.878 7.56 10.82 6.6 9.3 6.6c-2.25 0-3.6.9-3.6 3.15 0 1.515.815 2.417 2.174 2.846M18.3 10.65l-2.072.707"
    />
  </svg>
)
export default SvgBrandSolidjs
