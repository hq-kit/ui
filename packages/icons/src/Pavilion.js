import * as React from 'react'
const SvgPavilion = (props) => (
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
      d="M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9m0 0h12M6 12a3 3 0 0 1-3-3c2.044.057 4.049-.505 5.685-1.596C10.32 6.314 11.49 4.76 12 3c.51 1.76 1.68 3.313 3.315 4.404S18.956 9.057 21 9a3 3 0 0 1-3 3m0 9v-9"
    />
  </svg>
)
export default SvgPavilion
