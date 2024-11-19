import * as React from 'react'
const SvgRainbow = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 17a10 10 0 0 0-20 0m4 0a6 6 0 1 1 12 0m-8 0a2 2 0 0 1 4 0" />
  </svg>
)
export default SvgRainbow
