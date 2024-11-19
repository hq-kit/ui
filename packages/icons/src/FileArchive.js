import * as React from 'react'
const SvgFileArchive = (props) => (
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
      d="M10 12v-1m0 7v-2m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-11V6m4-4v4a2 2 0 0 0 2 2h4m-4.5 14H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"
    />
  </svg>
)
export default SvgFileArchive
