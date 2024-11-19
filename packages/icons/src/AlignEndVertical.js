import * as React from 'react'
const SvgAlignEndVertical = (props) => (
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
      d="M22 22V2M4 4h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m7 10h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgAlignEndVertical
