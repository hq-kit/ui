import * as React from 'react'
const SvgReplyAll = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 17-5-5 5-5m5 10-5-5m0 0 5-5m-5 5h11a4 4 0 0 1 4 4v2" />
  </svg>
)
export default SvgReplyAll
