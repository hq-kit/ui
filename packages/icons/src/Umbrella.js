import * as React from 'react'
const SvgUmbrella = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v8a2 2 0 0 0 4 0M12 2v1m10 9a10.06 10.06 0 0 0-20 0z" />
  </svg>
)
export default SvgUmbrella
