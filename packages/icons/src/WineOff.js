import * as React from 'react'
const SvgWineOff = (props) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 22h8M7 10h3m-3 0c.003-.906.106-1.81.307-2.693M7 10a5 5 0 0 0 7.391 4.391M17 10h-1.343M17 10c0-2-.5-4-2-8H9q-.193.51-.362.981M17 10q-.001.613-.145 1.198M12 15v7M2 2l20 20"
    />
  </svg>
)
export default SvgWineOff
