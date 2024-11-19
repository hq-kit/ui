import * as React from 'react'
const SvgThermometerSun = (props) => (
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
      d="M12 9a4 4 0 0 0-2 7.5M12 3v2M6.6 18.4l-1.4 1.4M4 13H2m4.34-5.66L4.93 5.93M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0"
    />
  </svg>
)
export default SvgThermometerSun
