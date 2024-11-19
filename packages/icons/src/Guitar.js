import * as React from 'react'
const SvgGuitar = (props) => (
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
    <path fill="currentColor" d="M11.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.9 12.1 4.514-4.514m0 0A2 2 0 0 0 17 6.172V4.828a2 2 0 0 1 .586-1.414L18.7 2.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-1.114 1.114A2 2 0 0 1 19.172 7h-1.344a2 2 0 0 0-1.414.586M6 16l2 2m.2-8.1C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2zm3.8 2.6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
)
export default SvgGuitar
