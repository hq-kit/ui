import * as React from 'react'
const SvgBrandWindows = (props) => (
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
    <path fill="currentColor" d="m3 5.549 7.355-1 .004 7.075-7.353.042zm7.352 6.89.006 7.08-7.353-1.008v-6.12zm.891-8.02L20.996 3v8.534l-9.752.077zM21 12.505 20.997 21l-9.753-1.373-.013-7.139z" />
  </svg>
)
export default SvgBrandWindows
