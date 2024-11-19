import * as React from 'react'
const SvgFileStack = (props) => (
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
      d="M21 7h-3a2 2 0 0 1-2-2V2M7 8v8.8c0 .3.2.6.4.8s.5.4.8.4H15M3 12v8.8c0 .3.2.6.4.8s.5.4.8.4H11M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17z"
    />
  </svg>
)
export default SvgFileStack
