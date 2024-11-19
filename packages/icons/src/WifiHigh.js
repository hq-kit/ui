import * as React from 'react'
const SvgWifiHigh = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h.01M5 12.86a10 10 0 0 1 14 0M8.5 16.428a5 5 0 0 1 7 0" />
  </svg>
)
export default SvgWifiHigh
