import * as React from 'react'
const SvgSunrise = (props) => (
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
      d="M12 2v8m0-8L8 6m4-4 4 4M4.93 10.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07-1.41 1.41M22 22H2m14-4a4 4 0 1 0-8 0"
    />
  </svg>
)
export default SvgSunrise
