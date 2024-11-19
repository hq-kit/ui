import * as React from 'react'
const SvgPopcorn = (props) => (
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
      d="M18 8a2 2 0 0 0 0-4 2 2 0 1 0-4 0 2 2 0 1 0-4 0 2 2 0 1 0-4 0 2 2 0 1 0 0 4m4 14L9 8m5 14 1-14m5 0c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1z"
    />
  </svg>
)
export default SvgPopcorn
