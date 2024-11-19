import * as React from 'react'
const SvgReplaceAll = (props) => (
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
      d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-18a2 2 0 0 1 2-2m0 8a2 2 0 0 1-2-2m6 6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-20a2 2 0 0 1 2 2m0 4a2 2 0 0 1-2 2M3 7l3 3m0 0 3-3m-3 3V5a3 3 0 0 1 3-3h1M4 14h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgReplaceAll
