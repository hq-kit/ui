import * as React from 'react'
const SvgFileMusic = (props) => (
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
      d="M16 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0V9l-8 1.3V18m0 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-4-5.6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"
    />
  </svg>
)
export default SvgFileMusic
