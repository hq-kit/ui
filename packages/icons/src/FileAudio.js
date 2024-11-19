import * as React from 'react'
const SvgFileAudio = (props) => (
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
      d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m10-5v4a2 2 0 0 0 2 2h4M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 1 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgFileAudio
