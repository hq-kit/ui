import * as React from 'react'
const SvgCombine = (props) => (
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
      d="M10 18H5a3 3 0 0 1-3-3v-1m8 4-3 3m3-3-3-3m7-13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m6-8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4 4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2M4 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgCombine
