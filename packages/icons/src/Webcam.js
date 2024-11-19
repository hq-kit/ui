import * as React from 'react'
const SvgWebcam = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 0v4m-5 0h10m-2-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
)
export default SvgWebcam
