import * as React from 'react'
const SvgRupiah = (props) => (
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
      d="M10.5 16.818 4 9.907l2.921.06c.95 0 1.86-.364 2.53-1.012A3.4 3.4 0 0 0 10.5 6.514c0-.917-.377-1.795-1.048-2.443A3.65 3.65 0 0 0 6.92 3.059L4 3v13.817m10.246.729 2.175.059c.95 0 1.86-.364 2.53-1.012A3.4 3.4 0 0 0 20 14.15c0-.916-.377-1.794-1.048-2.442a3.65 3.65 0 0 0-2.53-1.012l-2.176-.06V21"
    />
  </svg>
)
export default SvgRupiah
