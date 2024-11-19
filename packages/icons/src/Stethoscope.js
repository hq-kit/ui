import * as React from 'react'
const SvgStethoscope = (props) => (
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
      d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 6 6m0 0a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2h-1M8 15a6 6 0 1 0 12 0v-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
)
export default SvgStethoscope
