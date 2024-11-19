import * as React from 'react'
const SvgWheat = (props) => (
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
      d="M2 22 16 8m0 0h2a4 4 0 0 0 4-4V2h-2a4 4 0 0 0-4 4zm-9.47 9.47a3.5 3.5 0 0 0 0-4.94L5 11l-1.53 1.53a3.5 3.5 0 0 0 0 4.94L5 19m1.53-1.53L5 19m1.53-1.53a3.5 3.5 0 0 1 4.94 0L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19m5.53-5.53a3.5 3.5 0 0 0 0-4.94L9 7 7.47 8.53a3.5 3.5 0 0 0 0 4.94L9 15m1.53-1.53L9 15m1.53-1.53a3.5 3.5 0 0 1 4.94 0L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15m5.53-5.53a3.5 3.5 0 0 0 0-4.94L13 3l-1.53 1.53a3.5 3.5 0 0 0 0 4.94L13 11m1.53-1.53L13 11m1.53-1.53a3.5 3.5 0 0 1 4.94 0L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11"
    />
  </svg>
)
export default SvgWheat
