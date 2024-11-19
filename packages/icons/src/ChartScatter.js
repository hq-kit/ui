import * as React from 'react'
const SvgChartScatter = (props) => (
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
      d="M3 3v16a2 2 0 0 0 2 2h16M8 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-4 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m10-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
)
export default SvgChartScatter
