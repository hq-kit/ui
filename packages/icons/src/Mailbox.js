import * as React from 'react'
const SvgMailbox = (props) => (
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
      d="M6.5 5C4 5 2 7 2 9.5V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9c0-2.2-1.8-4-4-4zm0 0C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m6-10h3v2M6 10h1"
    />
  </svg>
)
export default SvgMailbox
