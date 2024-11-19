import * as React from 'react'
const SvgWashingMachine = (props) => (
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
      d="M3 6h3m11 0h.01M12 18a5 5 0 0 0 0-10m0 10a5 5 0 0 1 0-10m0 10a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgWashingMachine
