import * as React from 'react'
const SvgBinoculars = (props) => (
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
      d="M10 10h4m5-3V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m4 0a1 1 0 0 1 1 1v2.32c0 1.867 2 3.439 2 4.829V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1m4 0h-4m7 9H2m3-9a1 1 0 0 0-1 1v2.32c0 1.867-2 3.439-2 4.829V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1M5 7h4M5 7V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"
    />
  </svg>
)
export default SvgBinoculars
