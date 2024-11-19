import * as React from 'react'
const SvgTrainFront = (props) => (
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
      d="M8 3.1V7a4 4 0 0 0 8 0V3.1M9 15l-1-1m7 1 1-1m-8 5-2 3m10-3 2 3m-9-3c-2.8 0-5-2.2-5-5v-4a8 8 0 1 1 16 0v4c0 2.8-2.2 5-5 5z"
    />
  </svg>
)
export default SvgTrainFront
