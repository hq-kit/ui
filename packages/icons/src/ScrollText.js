import * as React from 'react'
const SvgScrollText = (props) => (
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
      d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4m0 0a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2M4 3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h3m2 13h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2"
    />
  </svg>
)
export default SvgScrollText
