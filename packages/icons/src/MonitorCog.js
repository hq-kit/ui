import * as React from 'react'
const SvgMonitorCog = (props) => (
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
      d="M12 17v4m3.2-16.1-.9-.4m.9 2.6-.9.4m2.6-4.3-.4-.9m.4 6.5-.4.9m3-7.4-.4.9m.4 6.5-.4-.9m2.6-4.3-.9.4m.9 2.6-.9-.4M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8m5-15a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgMonitorCog
