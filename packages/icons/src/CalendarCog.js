import * as React from 'react'
const SvgCalendarCog = (props) => (
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
      d="m15.2 16.9-.9-.4m.9 2.6-.9.4M16 2v4m.9 9.2-.4-.9m.4 6.5-.4.9m3-7.4-.4.9m.4 6.5-.4-.9M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m10.7-5.5-.9.4m.9 2.6-.9-.4M3 10h18M8 2v4m13 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgCalendarCog
