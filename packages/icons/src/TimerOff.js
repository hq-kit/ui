import * as React from 'react'
const SvgTimerOff = (props) => (
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
      d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"
    />
  </svg>
)
export default SvgTimerOff
