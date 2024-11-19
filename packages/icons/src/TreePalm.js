import * as React from 'react'
const SvgTreePalm = (props) => (
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
      d="M10 8H6L5 7 4 8H2c0-2.76 2.46-5 5.5-5S13 5.24 13 8c.5 2 3 8.5 1 14h-4c.83-2 1.5-4 1-6.5m2-8.36A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25 3.53-3.53c-1.95-1.96-5.27-1.8-7.42.35"
    />
  </svg>
)
export default SvgTreePalm
