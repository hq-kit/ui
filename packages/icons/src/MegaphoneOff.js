import * as React from 'react'
const SvgMegaphoneOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.26 9.26 3 11v3l14.14 3.14m3.86-1.8V6l-7.31 2.03M11.6 16.8a3.009 3.009 0 0 1-5.8-1.6M2 2l20 20" />
  </svg>
)
export default SvgMegaphoneOff
