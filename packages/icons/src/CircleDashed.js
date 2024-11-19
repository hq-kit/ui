import * as React from 'react'
const SvgCircleDashed = (props) => (
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
      d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0M17.61 3.721a10 10 0 0 1 2.69 2.7m-18.117 7.48a10 10 0 0 1 0-3.8m18.097 7.508a10 10 0 0 1-2.7 2.69M21.82 10.1a10 10 0 0 1 0 3.8M3.72 6.39a10 10 0 0 1 2.7-2.69m-.03 16.58a10 10 0 0 1-2.69-2.7"
    />
  </svg>
)
export default SvgCircleDashed
