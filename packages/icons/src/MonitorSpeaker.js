import * as React from 'react'
const SvgMonitorSpeaker = (props) => (
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
      d="M5.5 20H8m9-11h.01M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4m6-12h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m4 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
)
export default SvgMonitorSpeaker
