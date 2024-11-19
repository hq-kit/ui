import * as React from 'react'
const SvgTrendingUpDown = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828 21 21m0 0v-5m0 5h-5m5-18-9 9-4-4-6 6M21 3v5m0-5h-5" />
  </svg>
)
export default SvgTrendingUpDown
