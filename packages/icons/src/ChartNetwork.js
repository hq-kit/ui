import * as React from 'react'
const SvgChartNetwork = (props) => (
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
      d="m13.11 7.664 1.78 2.672m-.728 2.452-3.324 1.424M20 4l-6.06 1.515M3 3v16a2 2 0 0 0 2 2h16M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-7 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgChartNetwork
