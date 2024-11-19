import * as React from 'react'
const SvgLuggage = (props) => (
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
      d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M6 20a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 2-2m10 2a2 2 0 1 1-4 0m4 0a2 2 0 0 0-2-2m-8 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14m-8 0a2 2 0 0 1 2 2m6-2a2 2 0 0 0-2 2m-4 0h4"
    />
  </svg>
)
export default SvgLuggage
