import * as React from 'react'
const SvgUnfoldVertical = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22v-6m0 6 3-3m-3 3-3-3m3-11V2m0 0 3 3m-3-3L9 5m-5 7H2m8 0H8m8 0h-2m8 0h-2" />
  </svg>
)
export default SvgUnfoldVertical
