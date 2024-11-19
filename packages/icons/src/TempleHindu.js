import * as React from 'react'
const SvgTempleHindu = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 2v2m0 0L8.8 8M10 4h4M3 14h4l.6-2M3 14v-2.5M3 14v7h7v-5h4v5h7v-7M7.6 12l1.2-4m-1.2 4h8.8M8.8 8h6.4M14 2v2m0 0 1.2 4m5.8 6h-4l-.6-2m4.6 2v-2.5m-4.6.5-1.2-4"
    />
  </svg>
)
export default SvgTempleHindu
