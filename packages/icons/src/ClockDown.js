import * as React from 'react'
const SvgClockDown = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.338 21.994a10 10 0 1 1 9.587-8.767M12 6v6l2 1m0 5 4 4m0 0 4-4m-4 4v-8" />
  </svg>
)
export default SvgClockDown
