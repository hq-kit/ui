import * as React from 'react'
const SvgShoppingBag = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 6 3-4h12l3 4M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6M3 6h18m-5 4a4 4 0 1 1-8 0" />
  </svg>
)
export default SvgShoppingBag
