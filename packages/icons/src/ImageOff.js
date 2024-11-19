import * as React from 'react'
const SvgImageOff = (props) => (
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
      d="m2 2 20 20M10.41 10.41a2.002 2.002 0 0 1-2.83-2.83m5.92 5.92L6 21m12-9 3 3V5a2 2 0 0 0-2-2H9m-5.41.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
    />
  </svg>
)
export default SvgImageOff
