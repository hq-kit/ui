import * as React from 'react'
const SvgFerrisWheel = (props) => (
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
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0-3 8m3-8 3 8M12 2v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M8 22h8m2-3.3a9 9 0 1 0-12 0"
    />
  </svg>
)
export default SvgFerrisWheel
