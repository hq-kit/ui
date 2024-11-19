import * as React from 'react'
const SvgApple = (props) => (
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
      d="M12 7c1-.56 2.78-2 5-2a4.91 4.91 0 0 1 5 4.78C22 14 19 22 16 22c-1.25 0-2.5-1.06-4-1.06S9.25 22 8 22c-3 0-6-8-6-12.22A4.9 4.9 0 0 1 7 5c2.22 0 4 1.44 5 2m0 0c0-3-1-4.5-2-5"
    />
  </svg>
)
export default SvgApple
