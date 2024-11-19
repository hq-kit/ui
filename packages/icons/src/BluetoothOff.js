import * as React from 'react'
const SvgBluetoothOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 17-5 5V12l-5 5M2 2l20 20M14.5 9.5 17 7l-5-5v4.5" />
  </svg>
)
export default SvgBluetoothOff
