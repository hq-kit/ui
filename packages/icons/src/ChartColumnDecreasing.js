import * as React from 'react'
const SvgChartColumnDecreasing = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5" />
  </svg>
)
export default SvgChartColumnDecreasing
